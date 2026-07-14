"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAdmin = localStorage.getItem("craftly_admin_auth");
    if (isAdmin === "true") {
      setUser({ email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "Admin User" });
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const signOut = async () => {
    localStorage.removeItem("craftly_admin_auth");
    setUser(null);
    window.location.href = "/admin/login";
  };

  return { user, loading, signOut };
}
