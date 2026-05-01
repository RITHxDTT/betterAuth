import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideBarComponent from '../../../components/SideBarComponent'
import { cookies } from "next/headers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRD Room",
  description: "Task tracking and collaboration system",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getCookies = await cookies();
  const token = getCookies.get("token")?.value;
  
  return (
    
      
    <>
         <div className="flex min-h-screen bg-[#F8FAFC]">
          
          {/* Sidebar stays fixed on the left */}
          <SideBarComponent />

          {/* Page content scrolls on the right */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          
        </div>
    </>
        
       
      
    
  );
}