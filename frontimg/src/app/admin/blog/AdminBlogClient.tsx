"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { useRequireAdmin } from "@/lib/auth/useRequireAdmin";
import { apiFetch, backendUrl, getStoredToken } from "@/lib/api";
import { renderPostBody } from "@/lib/blog-render";
import type { BlogPost } from "@/lib/blog";

interface Form {
  id: string | null;
  slug: string;
  title: string;
  excerpt: string;
  bodyMarkdown: string;
  coverImageUrl: string;
  accent: string;
  tags: [string, string, string];
  author: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
}

const EMPTY: Form = {
  id: null,
  slug: "",
  title: "",
  excerpt: "",
  bodyMarkdown: "",
  coverImageUrl: "",
  accent: "#c2542c",
  tags: ["", "", ""],
  author: "oMyImage Team",
  readTime: "5 min",
  seoTitle: "",
  seoDescription: "",
};

function postToForm(p: BlogPost): Form {
  const tags = [...p.tags, "", "", ""].slice(0, 3) as [string, string, string];
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    bodyMarkdown: p.bodyMarkdown,
    coverImageUrl: p.coverImageUrl ?? "",
    accent: p.accent,
    tags,
    author: p.author,
    readTime: p.readTime,
    seoTitle: p.seoTitle ?? "",
    seoDescription: p.seoDescription ?? "",
  };
}

function formToPayload(f: Form) {
  return {
    slug: f.slug.trim(),
    title: f.title.trim(),
    excerpt: f.excerpt.trim(),
    bodyMarkdown: f.bodyMarkdown,
    coverImageUrl: f.coverImageUrl.trim() || null,
    accent: f.accent,
    tags: f.tags.map((t) => t.trim()).filter(Boolean),
    author: f.author.trim(),
    readTime: f.readTime.trim(),
    seoTitle: f.seoTitle.trim() || null,
    seoDescription: f.seoDescription.trim() || null,
  };
}

const inputCls =
  "w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-3 py-2 text-body-md text-on-surface focus:border-secondary focus:outline-none";
const labelCls = "text-label-sm font-label-sm font-semibold text-primary";

export function AdminBlogClient() {
  const { user, loading, isAdmin } = useRequireAdmin();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [forbidden, setForbidden] = useState(false);
  const [view, setView] = useState<"list" | "edit">("list");
  const [form, setForm] = useState<Form>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const loadPosts = useCallback(async () => {
    setLoadingList(true);
    const res = await apiFetch("/api/image/blog/admin/posts");
    if (res.status === 403) { setForbidden(true); setLoadingList(false); return; }
    if (res.ok) {
      const { posts: p } = (await res.json()) as { posts: BlogPost[] };
      setPosts(p);
    }
    setLoadingList(false);
  }, []);

  useEffect(() => {
    if (!loading && user) void loadPosts();
  }, [loading, user, loadPosts]);

  const preview = useMemo(() => {
    try {
      // Same renderer as the published page, so the preview is exact.
      return renderPostBody(form.bodyMarkdown).html;
    } catch {
      return "";
    }
  }, [form.bodyMarkdown]);

  function set<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function save() {
    const payload = formToPayload(form);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(payload.slug)) {
      toast.error("Slug must be lowercase words separated by hyphens.");
      return;
    }
    if (!payload.title) { toast.error("Title is required."); return; }
    if (payload.tags.length !== 3) { toast.error("Exactly 3 tags are required."); return; }

    setSaving(true);
    const res = form.id
      ? await apiFetch(`/api/image/blog/admin/posts/${form.id}`, { method: "PUT", body: JSON.stringify(payload) })
      : await apiFetch("/api/image/blog/admin/posts", { method: "POST", body: JSON.stringify(payload) });
    setSaving(false);

    if (!res.ok) {
      const { error } = (await res.json().catch(() => ({ error: "Save failed." }))) as { error?: string };
      toast.error(error ?? "Save failed.");
      return;
    }
    const { post } = (await res.json()) as { post: BlogPost };
    setForm(postToForm(post));
    toast.success("Saved.");
    void loadPosts();
  }

  async function publishToggle(post: BlogPost) {
    const action = post.status === "published" ? "unpublish" : "publish";
    const res = await apiFetch(`/api/image/blog/admin/posts/${post.id}/${action}`, { method: "POST" });
    if (!res.ok) { toast.error(`Could not ${action}.`); return; }
    toast.success(post.status === "published" ? "Unpublished." : "Published — a site rebuild was triggered.");
    void loadPosts();
    if (form.id === post.id) {
      const { post: updated } = (await res.json()) as { post: BlogPost };
      setForm(postToForm(updated));
    }
  }

  async function remove(post: BlogPost) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    const res = await apiFetch(`/api/image/blog/admin/posts/${post.id}`, { method: "DELETE" });
    if (!res.ok && res.status !== 204) { toast.error("Delete failed."); return; }
    toast.success("Deleted.");
    if (form.id === post.id) { setView("list"); setForm(EMPTY); }
    void loadPosts();
  }

  async function uploadImage(file: File) {
    setUploading(true);
    const fd = new FormData();
    fd.append("image", file);
    const token = getStoredToken();
    let url = "";
    try {
      const res = await fetch(`${backendUrl()}/api/image/blog/admin/images`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: fd,
      });
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({}))) as { error?: string };
        toast.error(error ?? "Image upload failed.");
        return;
      }
      ({ url } = (await res.json()) as { url: string });
    } catch {
      toast.error("Image upload failed.");
      return;
    } finally {
      setUploading(false);
    }

    // Insert markdown at the cursor; also set as cover if none is set yet.
    const el = bodyRef.current;
    const snippet = `\n\n![${file.name.replace(/\.[^.]+$/, "")}](${url})\n\n`;
    if (el) {
      const start = el.selectionStart ?? form.bodyMarkdown.length;
      const next = form.bodyMarkdown.slice(0, start) + snippet + form.bodyMarkdown.slice(start);
      set("bodyMarkdown", next);
    } else {
      set("bodyMarkdown", form.bodyMarkdown + snippet);
    }
    if (!form.coverImageUrl) set("coverImageUrl", url);
    toast.success("Image uploaded.");
  }

  if (loading || (!user && !forbidden)) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Icon name="progress_activity" className="animate-spin text-[28px] text-on-surface-variant" />
      </div>
    );
  }

  if (forbidden || !isAdmin) {
    return (
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter py-24 text-center flex flex-col items-center gap-3">
        <Icon name="lock" className="text-4xl text-on-surface-variant" />
        <h1 className="text-headline-md font-bold text-primary">Admins only</h1>
        <p className="text-body-md text-on-surface-variant">
          Your account doesn&apos;t have access to the blog admin.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-md">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-display-lg-mobile font-black text-primary">Blog Admin</h1>
        {view === "list" ? (
          <button
            type="button"
            onClick={() => { setForm(EMPTY); setView("edit"); }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-on-primary px-4 py-2 text-label-sm font-label-sm font-semibold hover-lift"
          >
            <Icon name="add" className="text-[18px]" /> New post
          </button>
        ) : (
          <button
            type="button"
            onClick={() => { setView("list"); void loadPosts(); }}
            className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline"
          >
            <Icon name="arrow_back" className="text-[18px]" /> Back to list
          </button>
        )}
      </div>

      {view === "list" ? (
        <div className="flex flex-col gap-2">
          {loadingList ? (
            <div className="py-16 flex justify-center">
              <Icon name="progress_activity" className="animate-spin text-[24px] text-on-surface-variant" />
            </div>
          ) : posts.length === 0 ? (
            <p className="text-body-md text-on-surface-variant py-12 text-center">No posts yet.</p>
          ) : (
            posts.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest px-4 py-3"
              >
                <span
                  className={`text-label-sm font-label-sm rounded-full px-2.5 py-0.5 shrink-0 ${
                    p.status === "published"
                      ? "bg-chip-teal-bg text-chip-teal-ink"
                      : "bg-chip-amber-bg text-chip-amber-ink"
                  }`}
                >
                  {p.status}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-body-md font-semibold text-primary truncate">{p.title}</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant truncate">/blog/{p.slug}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button type="button" onClick={() => { setForm(postToForm(p)); setView("edit"); }}
                    className="p-2 rounded-lg hover:bg-surface-container text-on-surface-variant" title="Edit">
                    <Icon name="edit" className="text-[20px]" />
                  </button>
                  <button type="button" onClick={() => void publishToggle(p)}
                    className="p-2 rounded-lg hover:bg-surface-container text-on-surface-variant"
                    title={p.status === "published" ? "Unpublish" : "Publish"}>
                    <Icon name={p.status === "published" ? "unpublished" : "publish"} className="text-[20px]" />
                  </button>
                  <button type="button" onClick={() => void remove(p)}
                    className="p-2 rounded-lg hover:bg-surface-container text-error" title="Delete">
                    <Icon name="delete" className="text-[20px]" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
          {/* Editor */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Title</span>
                <input className={inputCls} value={form.title} onChange={(e) => set("title", e.target.value)} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Slug</span>
                <input className={inputCls} value={form.slug} placeholder="how-to-compress-a-jpg"
                  onChange={(e) => set("slug", e.target.value)} />
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className={labelCls}>Excerpt</span>
              <textarea className={`${inputCls} resize-y min-h-[64px]`} value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)} />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <label key={i} className="flex flex-col gap-1">
                  <span className={labelCls}>Tag {i + 1}</span>
                  <input className={inputCls} value={form.tags[i]}
                    onChange={(e) => {
                      const tags = [...form.tags] as [string, string, string];
                      tags[i] = e.target.value;
                      set("tags", tags);
                    }} />
                </label>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Author</span>
                <input className={inputCls} value={form.author} onChange={(e) => set("author", e.target.value)} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Read time</span>
                <input className={inputCls} value={form.readTime} onChange={(e) => set("readTime", e.target.value)} />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-end">
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Cover image URL</span>
                <input className={inputCls} value={form.coverImageUrl}
                  onChange={(e) => set("coverImageUrl", e.target.value)} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelCls}>Accent</span>
                <input type="color" className="h-10 w-16 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  value={form.accent} onChange={(e) => set("accent", e.target.value)} />
              </label>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className={labelCls}>Body (Markdown)</span>
                <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading}
                  className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline disabled:opacity-50">
                  <Icon name={uploading ? "progress_activity" : "add_photo_alternate"}
                    className={`text-[18px] ${uploading ? "animate-spin" : ""}`} />
                  Insert image
                </button>
                <input ref={fileRef} type="file" accept="image/*" className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) void uploadImage(f); e.target.value = ""; }} />
              </div>
              <textarea ref={bodyRef} className={`${inputCls} font-mono text-body-sm resize-y min-h-[360px]`}
                value={form.bodyMarkdown} onChange={(e) => set("bodyMarkdown", e.target.value)} />
            </div>

            <details className="rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-3 py-2">
              <summary className={`${labelCls} cursor-pointer`}>SEO overrides (optional)</summary>
              <div className="flex flex-col gap-3 mt-3">
                <label className="flex flex-col gap-1">
                  <span className={labelCls}>SEO title</span>
                  <input className={inputCls} value={form.seoTitle} onChange={(e) => set("seoTitle", e.target.value)} />
                </label>
                <label className="flex flex-col gap-1">
                  <span className={labelCls}>SEO description</span>
                  <textarea className={`${inputCls} resize-y min-h-[64px]`} value={form.seoDescription}
                    onChange={(e) => set("seoDescription", e.target.value)} />
                </label>
              </div>
            </details>

            <div className="flex items-center gap-2">
              <button type="button" onClick={() => void save()} disabled={saving}
                className="inline-flex items-center gap-2 rounded-lg bg-primary text-on-primary px-5 py-2.5 text-label-sm font-label-sm font-semibold hover-lift disabled:opacity-60">
                <Icon name={saving ? "progress_activity" : "save"} className={`text-[18px] ${saving ? "animate-spin" : ""}`} />
                {form.id ? "Save changes" : "Save draft"}
              </button>
              {form.id && (
                <p className="text-label-sm font-label-sm text-on-surface-variant">
                  Use the list&apos;s publish button to make it live.
                </p>
              )}
            </div>
          </div>

          {/* Live preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <p className={`${labelCls} mb-2`}>Preview</p>
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-5 max-h-[80vh] overflow-y-auto">
              <h2 className="text-headline-md font-bold text-primary mb-2">{form.title || "Untitled"}</h2>
              <p className="text-body-md text-on-surface-variant mb-4">{form.excerpt}</p>
              <div className="blog-body" dangerouslySetInnerHTML={{ __html: preview }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
