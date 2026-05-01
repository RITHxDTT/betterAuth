"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogOut, User } from "lucide-react";

export default function Navigation({ session }: { session: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const signOut = async () => {
  await fetch("/api/logout", { method: "POST" });

  // 🔥 CRITICAL: force server re-evaluation
  // 2. Refresh the current route's data (clears 'session' prop)
  router.refresh(); 

  // 3. Redirect afterward
  router.push("/auth/login");
};

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" className="w-7 h-7" />
            <span className="text-lg font-semibold">HRD Room</span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            {session && (
              <>
                <Link
                  href="/view"
                  className={isActive("/view") ? "text-black" : "text-gray-500"}
                >
                  Home
                </Link>

                <Link
                  href="/dashboard"
                  className={isActive("/dashboard") ? "text-black" : "text-gray-500"}
                >
                  Dashboard
                </Link>
              </>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">

            {!session ? (
              <>
                <Link href="/auth/login">Sign in</Link>
              </>
            ) : (
              <div className="flex items-center gap-4">

                <Link href="/view/profile-user" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </Link>

                <button onClick={signOut} className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>

              </div>
            )}

            <button className="md:hidden">
              <Menu />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}