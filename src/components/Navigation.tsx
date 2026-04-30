"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-7 h-7" />
            <span className="text-lg font-semibold text-neutral-900 tracking-tight">
              HRD Room
            </span>
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition ${
                isActive("/")
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className={`transition ${
                isActive("/dashboard")
                  ? "text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-sm text-neutral-600 hover:text-black transition"
            >
              Sign in
            </Link>

            <Link
              href="/auth/register"
              className="px-4 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-neutral-800 transition"
            >
              Get Started
            </Link>

            {/* Mobile menu icon (future use) */}
            <button className="md:hidden p-2 rounded-md hover:bg-neutral-100">
              <Menu className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}