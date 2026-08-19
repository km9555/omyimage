"use client";

import { useAuthContext } from "./AuthProvider";

/** Access the current auth state: { user, profile, loading, signOut, refreshProfile, saveAndLoad }. */
export function useAuth() {
  return useAuthContext();
}
