"use client";
import React, { useState } from 'react';
import { Mail, Eye, Lock } from 'lucide-react';
import handleSignIn from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await handleSignIn({ email, password });
      router.push("/dashboard");
    } catch (err) {
      alert(err.message || "An error occurred during sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-white">


      <div className="container mx-auto px-6 lg:px-20 z-20">
        <div className="max-w-md">
          <header className="mb-8">
            <p className="text-gray-600 font-medium">Start With Our Community</p>
            <h1 className="text-4xl font-bold text-black mt-1">Sign In</h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-black">Email</label>
              <div className="relative">
                <input
                  name="email" 
                  type="email"
                  required
                  placeholder="Type your email here..."
                  className="w-full px-4 text-black py-4 bg-blue-50/50 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-black">Password</label>
              <div className="relative">
                <input
                  name="password" 
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full px-4 py-4 text-black bg-blue-50/50 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#4338CA] hover:bg-[#3730A3] text-white font-bold rounded-xl shadow-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
  
    </div>
  );
}