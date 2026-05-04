"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogOut, X } from "lucide-react";
import { useSession } from "@/lib/useSession";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { data } = useSession();
  
  const sessionData = data?.user;

  const isActive = (path: string) => pathname === path;

  const signOut = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.refresh();
    router.push("/auth/login");
  };

  const navLinks = [
    { name: "Home", href: "/view" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
               <span className="text-white font-bold text-xs">HRD</span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-indigo-600">HRD</span>{" "}
              <span className="text-slate-900">Room</span>
            </span>
          </Link>

          
          <nav className="hidden md:flex gap-8">
            {sessionData && navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {!sessionData ? (
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/auth/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-4">Login</Link>
                <Link href="/auth/register" className="px-5 py-2.5 text-sm text-white font-semibold rounded-xl bg-indigo-600 shadow-md shadow-indigo-100 transition-transform active:scale-95">
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3 md:gap-6">
                <Link 
                  href="/view/profile-user" 
                  className="flex items-center gap-2 p-1 md:pr-4 rounded-full bg-slate-50 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
                >
                  <img
                    src={sessionData.image || `https://ui-avatars.com/api/?name=${sessionData.name}&background=6366f1&color=fff`}
                    alt="Avatar"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover ring-2 ring-white"
                  />
                  <div className="hidden lg:flex flex-col text-left">
                    <span className="text-xs font-bold text-slate-900 leading-none">{sessionData.name}</span>
                    <span className="text-[10px] text-slate-400 leading-none mt-1">Student</span>
                  </div>
                </Link>

                <button 
                  onClick={signOut} 
                  className="hidden md:flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            )}

            
          </div>
        </div>
      </div>

      
      
    </header>
  );
}