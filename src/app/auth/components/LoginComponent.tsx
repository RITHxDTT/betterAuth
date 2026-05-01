"use client";

import React, { useState } from "react";
import { Mail, Eye, EyeOff, Lock, Loader2 } from "lucide-react";



import { useRouter } from "next/navigation";
import { handleSignIn } from "@/lib/auth";

export default function SignInPage() {
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    setLoading(true);

    // await handleSignIn({ email, password });
    const data = await handleSignIn({ email, password });

    if (!data?.payload?.access_token) {
      throw new Error("No access token returned");
    }

    router.refresh();
    router.push("/dashboard");
  } catch (err: any) {
    setError(err.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  


  return (
    <div className="relative min-h-screen w-full flex items-center bg-slate-50 overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 lg:px-20 z-10 flex justify-between items-center">
        {/* LEFT: FORM */}
        <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <header className="mb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-slate-500 mt-2">
              Sign in to continue to your dashboard.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error message */}
            {error && (
              <div className="p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 animate-in fade-in zoom-in duration-300">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="text-black w-full pl-4 pr-11 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200"
                />
                <Mail className="absolute right-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Password
              </label>
              <div className="relative group">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="text-black w-full pl-4 pr-11 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-indigo-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Footer */}
            <p className="text-center text-slate-500 text-sm mt-6">
              Don’t have an account?{" "}
              <a
                href="/auth/register"
                className="text-indigo-600 font-bold hover:underline"
              >
                Create one
              </a>
            </p>
          </form>
        </div>

        {/* RIGHT: DECORATION */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 ml-20 text-center">
          <div className="w-full max-w-md aspect-square bg-indigo-600 rounded-[3rem] rotate-3 flex items-center justify-center relative shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3rem] -rotate-6" />
            <div className="relative z-10 text-white p-10">
              <h2 className="text-3xl font-bold mb-4">
                Welcome back again.
              </h2>
              <p className="text-indigo-100">
                Continue managing your tasks, tracking progress, and collaborating with your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}