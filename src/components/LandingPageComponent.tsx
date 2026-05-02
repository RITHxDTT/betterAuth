"use client";
import React from 'react';
import { ArrowRight, QrCode } from 'lucide-react';

const HRDRoomLanding = () => {
  const techStack = [
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk/white' },
    { name: 'Spring', logo: 'https://cdn.simpleicons.org/springboot/white' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
    { name: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel/white' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/white' },
    { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux/white' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-12 px-4 text-center max-w-5xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-indigo-600 text-white rounded-full shadow-sm">
          From assignments to achievements
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-indigo-900 leading-tight mb-6">
          Stay on track. <br className="hidden sm:block" /> Don't miss tasks.<br />
          <span className="text-indigo-600">Achieve more with confidence.</span>
        </h1>
        <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4">
          Manage your tasks, get timely notifications, and stay connected with your instructors in one centralized platform.
        </p>
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95">
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* Tech Marquee - Added overflow-hidden container */}
      <div className="relative w-full bg-slate-900 py-6 rotate-[-1deg] scale-105 overflow-hidden border-y border-slate-800">
        <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-12 items-center w-max">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 opacity-60">
              <img src={tech.logo} alt={tech.name} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-white font-medium tracking-widest uppercase text-xs md:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Group Image Card */}
        <div className="lg:col-span-8 relative group">
          <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] md:rounded-[2.5rem] rotate-1 scale-[0.98]" />
          <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 h-full">
            <img 
              src="/api/placeholder/800/500" 
              alt="HRD Students Group" 
              className="w-full h-full object-cover min-h-[300px] md:min-h-[450px]"
            />
            {/* Mobile optimized overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 flex flex-row items-center gap-4">
              <div className="p-2 md:p-3 bg-white rounded-xl shadow-lg shrink-0">
                <QrCode size={32} className="text-slate-900 md:w-10 md:h-10" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-lg">Scan to login</h3>
                <p className="text-white/80 text-[10px] md:text-sm line-clamp-1">Stay connected with instructors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Feature Stats */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200/50">
             <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-50 rounded-full flex items-center justify-center">
                   <span className="text-3xl md:text-4xl font-black text-indigo-600">HRD</span>
                </div>
                <div className="absolute -top-2 -right-4 bg-slate-900 text-white text-[9px] px-2 py-1 rounded-full font-bold">
                   1000+ Students
                </div>
             </div>
             <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tighter">HRD ROOM</h2>
             <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mt-2 mb-8">Focus • Learn • Grow</p>
             <div className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-bold text-sm md:text-base">
                +1000 tasks
             </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-bold text-indigo-900 leading-snug md:leading-relaxed">
          HRD Room helps students and instructors manage tasks, track progress, and communicate in one <span className="text-indigo-600">centralized platform.</span>
        </h2>
        <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
          It streamlines the learning process by providing tools for assignment management, real-time notifications, and performance tracking.
        </p>

        {/* User Avatars Social Proof */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex -space-x-3 md:-space-x-4">
            {[1, 2, 3].map((u) => (
              <div key={u} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-slate-200 overflow-hidden">
                <img src={`/api/placeholder/100/100`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-indigo-600 flex items-center justify-center text-white text-xs md:text-base font-bold">
              +
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-slate-800">Trusted by thousands of students</p>
            <p className="text-[11px] text-slate-400 mt-0.5 italic">"Code every day to steadily improve."</p>
          </div>
        </div>
      </section>

      {/* Footer Accents */}
      <div className="px-6 pb-12 flex flex-row justify-between items-end opacity-20 overflow-hidden">
        <h2 className="text-5xl md:text-8xl font-black text-slate-300 select-none">SEC02</h2>
        <div className="text-right">
           <p className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest">Everything you need</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HRDRoomLanding;