"use client";
import React from 'react';
import { ArrowRight, CheckCircle2, QrCode } from 'lucide-react';

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
      <section className="relative pt-20 pb-16 px-6 text-center max-w-5xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-indigo-600 text-white rounded-full shadow-sm">
          From assignments to achievements
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900 leading-tight mb-6">
          Stay on track. Don't miss tasks.<br />
          <span className="text-indigo-600">Achieve more with confidence.</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Manage your tasks, get timely notifications, and stay connected with your instructors in one centralized platform.
        </p>
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-indigo-200 transition-all hover:scale-105">
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* Tech Marquee */}
      <div className="w-full bg-slate-900 py-8 rotate-[-1deg] scale-105 overflow-hidden border-y border-slate-800">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
              <span className="text-white font-medium tracking-widest uppercase text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Group Image Card */}
        <div className="lg:col-span-8 relative group">
          <div className="absolute inset-0 bg-indigo-600 rounded-[2.5rem] rotate-1 scale-[0.98] transition-transform group-hover:rotate-0" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
            <img 
              src="/api/placeholder/800/500" 
              alt="HRD Students Group" 
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-lg">
                <QrCode size={40} className="text-slate-900" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Scan to login</h3>
                <p className="text-white/80 text-sm">Follow up with instructors and stay connected.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Feature Stats */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="flex-1 bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200/50">
             <div className="relative mb-6">
                <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center">
                   <span className="text-4xl font-black text-indigo-600">HRD</span>
                </div>
                <div className="absolute -top-2 -right-6 bg-slate-900 text-white text-[10px] px-3 py-1 rounded-full font-bold">
                   Students 1000+
                </div>
             </div>
             <h2 className="text-2xl font-black text-slate-800 tracking-tighter">HRD ROOM</h2>
             <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mt-2 mb-8">Focus • Learn • Grow</p>
             <div className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                +1000 task
             </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center md:text-left relative">
        <div className="absolute top-0 right-0 w-32 h-1 bg-indigo-600 rounded-full opacity-20" />
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 leading-relaxed">
          HRD Room is built to help students and instructors manage tasks, track progress, and communicate efficiently in one <span className="text-indigo-600">centralized platform.</span>
        </h2>
        <p className="mt-8 text-slate-500 text-lg leading-loose">
          It streamlines the learning process by providing tools for assignment management, real-time notifications, and performance tracking. Students can easily view their tasks, submit assignments, and monitor their own progress.
        </p>

        {/* User Avatars Social Proof */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((u) => (
              <div key={u} className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                <img src={`/api/placeholder/100/100`} alt="user" />
              </div>
            ))}
            <div className="w-14 h-14 rounded-full border-4 border-white bg-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
              +
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Trusted by thousands of students</p>
            <p className="text-xs text-slate-400 mt-1 italic">"Code every day to steadily improve and reach the top tier."</p>
          </div>
        </div>
      </section>

      {/* Footer Accents */}
      <div className="px-6 pb-20 flex flex-col md:flex-row justify-between items-end opacity-20">
        <h2 className="text-8xl font-black text-slate-300 select-none">SEC02</h2>
        <div className="text-right hidden md:block">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Everything you need</p>
           <p className="text-sm font-medium text-slate-400">Nothing you don't</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HRDRoomLanding;