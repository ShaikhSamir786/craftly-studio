"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (
      email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      localStorage.setItem("craftly_admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Invalid credentials. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary p-6">
      <div className="w-full max-w-md bg-surface border border-outline rounded-3xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
             <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
          </div>
          <h1 className="font-display text-2xl font-bold">Admin Login</h1>
          <p className="text-on-surface-variant text-sm mt-2">Sign in to manage Craftly Studio</p>
        </div>

        {error && (
          <div className="bg-red-500/10 text-red-500 p-4 rounded-lg text-sm mb-6 border border-red-500/20">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-outline rounded-lg px-4 py-3 focus:outline-none focus:border-accent" 
              placeholder="admin@craftly-studio.vercel.app"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-outline rounded-lg px-4 py-3 focus:outline-none focus:border-accent" 
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
