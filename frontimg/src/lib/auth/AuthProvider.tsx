"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { authFetch, saveToken, clearToken, getStoredToken } from "@/lib/api";

export interface AuthUser {
  id: string;
  email: string | null;
  name?: string | null;
}

export interface Profile {
  id: string;
  plan: string;
  /** "user" | "admin" — from profiles.role. */
  role: string;
  subscription_status: string;
  created_at: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  profile: Profile | null;
  loading: boolean;
  /** Whether the account has an email/password set (false for Google-only). */
  hasPassword: boolean;
  signOut: () => void;
  refreshProfile: () => Promise<void>;
  /** Save a newly issued JWT and reload the session. */
  saveAndLoad: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [hasPassword, setHasPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadSession = useCallback(async () => {
    const token = getStoredToken();
    if (!token) {
      setUser(null);
      setProfile(null);
      setHasPassword(false);
      setLoading(false);
      return;
    }
    try {
      const res = await authFetch("/me");
      if (!res.ok) {
        // Covers an expired token and — because tokens are brand-scoped — one
        // issued by oMyPDF that was pasted in here. Both mean "not signed in".
        clearToken();
        setUser(null);
        setProfile(null);
        setHasPassword(false);
      } else {
        const { user: u, profile: p, hasPassword: hp } = await res.json() as {
          user: AuthUser; profile: Profile | null; hasPassword?: boolean;
        };
        setUser(u);
        setProfile(p);
        setHasPassword(!!hp);
      }
    } catch {
      /* network error — keep optimistic state from token */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadSession();
  }, [loadSession]);

  const signOut = useCallback(() => {
    clearToken();
    setUser(null);
    setProfile(null);
    setHasPassword(false);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!getStoredToken()) return;
    try {
      const res = await authFetch("/me");
      if (res.ok) {
        const { user: u, profile: p, hasPassword: hp } = await res.json() as {
          user: AuthUser; profile: Profile | null; hasPassword?: boolean;
        };
        setUser(u);
        setProfile(p);
        setHasPassword(!!hp);
      }
    } catch {
      /* best-effort */
    }
  }, []);

  const saveAndLoad = useCallback(async (token: string) => {
    saveToken(token);
    setLoading(true);
    await loadSession();
  }, [loadSession]);

  const value = useMemo<AuthContextValue>(
    () => ({ user, profile, loading, hasPassword, signOut, refreshProfile, saveAndLoad }),
    [user, profile, loading, hasPassword, signOut, refreshProfile, saveAndLoad]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
