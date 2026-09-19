import type { Metadata } from "next";
import { AdminBlogClient } from "./AdminBlogClient";

export const metadata: Metadata = {
  title: "Blog Admin",
  description: "Author and publish oMyImage blog posts.",
  robots: { index: false, follow: false },
};

export default function AdminBlogPage() {
  return <AdminBlogClient />;
}
