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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

          {/* Desktop Nav */}
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

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 md:hidden hover:bg-slate-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {sessionData ? (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-3 rounded-xl text-sm font-semibold ${
                    isActive(link.href) ? "bg-indigo-50 text-indigo-600" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <button 
                onClick={signOut}
                className="flex items-center gap-3 p-3 text-red-500 font-semibold text-sm"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-3">
              <Link href="/auth/login" className="w-full p-3 text-center font-semibold text-slate-600">Login</Link>
              <Link href="/auth/register" className="w-full p-3 text-center bg-indigo-600 text-white rounded-xl font-semibold">Register</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}