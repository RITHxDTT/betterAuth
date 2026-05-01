"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogOut, User } from "lucide-react";
import { useSession } from "@/lib/useSession";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { data, refresh } = useSession();
  const sessionData = data?.user;

  const isActive = (path: string) => pathname === path;

  const signOut = async () => {
  await fetch("/api/logout", { method: "POST" });

  
  router.refresh(); 

  
  router.push("/auth/login");
};


  return (
    <header className="sticky top-0 z-50 bg-white/100 backdrop-blur-md border-b border-neutral-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="w-7 h-7" />
          <span className="text-lg font-semibold">
            <span className="bg-gradient-to-br from-[#3D38C3] to-[#534FFD] bg-clip-text text-transparent">
              HRD
            </span>
            {" "} <span className="text-black">Room</span>
          </span>
        </Link>

          {/* Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            {sessionData && (
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
            {!sessionData ? (
              <>
                <Link href="/auth/login" className="px-8 py-3 text-white font-semibold rounded-2xl transition-transform hover:scale-105 active:scale-95 bg-gradient-to-br from-[#3D38C3] to-[#534FFD] shadow-lg shadow-indigo-200">Login</Link>
                <Link href="/auth/register" className="px-8 py-3 text-white font-semibold rounded-2xl transition-transform hover:scale-105 active:scale-95 bg-gradient-to-br from-[#3D38C3] to-[#534FFD] shadow-lg shadow-indigo-200">Register</Link>
              </>
            ) : (
              <div className="flex items-center gap-6">
                
                {/* Redesigned Profile Link */}
                <Link 
                  href="/view/profile-user" 
                  className="flex items-center gap-3 p-1 pr-4 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                >
                  <div className="relative">
                    <img
                      src={sessionData.image || "https://ui-avatars.com/api/?name=" + sessionData.name}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-sm font-bold text-slate-900 leading-tight group-hover:text-[#3D38C3]">
                      {sessionData.name || "User"}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight truncate max-w-[100px]">
                      {sessionData.email}
                    </span>
                  </div>
                </Link>

                <button 
                  onClick={signOut} 
                  className="flex items-center gap-2 px-3 py-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Logout</span>
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