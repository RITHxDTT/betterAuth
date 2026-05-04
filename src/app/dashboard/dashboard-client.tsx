"use client";

import dynamic from 'next/dynamic';
import { Filter, Users, LayoutDashboard } from 'lucide-react';

// Disable Server-Side Rendering for the chart
const AnalyticsChart = dynamic(() => import('../dashboard/AnalyticsChart'), { 
  ssr: false,
  loading: () => <div className="h-64 w-full bg-slate-50 animate-pulse rounded-xl" />
});

export default function Dashboard() {
  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <main className="flex-1 p-4 md:p-8 w-full overflow-x-hidden">
        
        {/* Header */}
        <header className="mb-8 mt-2 md:mt-0">
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard className="w-5 h-5 text-indigo-600 md:hidden" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">Dashboard</h2>
          </div>
          <p className="text-sm md:text-base text-slate-500">Welcome back, Prof. Anderson.</p>
        </header>

        {/* Stats Grid - Responsive grid sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8">
          <StatCard title="Total Task" value="10" color="bg-indigo-600" textColor="text-white" />
          <StatCard title="In Progress" value="56" color="bg-blue-50" textColor="text-blue-600" />
          <StatCard title="On-Time" value="56" color="bg-green-50" textColor="text-green-600" />
          <StatCard title="Submissions" value="56" color="bg-orange-50" textColor="text-orange-600" />
          <StatCard title="Overdue" value="56" color="bg-red-50" textColor="text-red-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-[2rem] border border-slate-100 shadow-sm">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800">Learning Analytics</h3>
                <select className="text-xs bg-slate-50 border-none rounded-lg focus:ring-0">
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
             </div>
             <div className="w-full h-[250px] md:h-[300px]">
                <AnalyticsChart />
             </div>
          </div>

          
          <div className="lg:col-span-4 bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between bg-gradient-to-br from-white to-indigo-50/30 shadow-sm">
             <div>
                <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Recent Task</span>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Filter size={16} className="text-slate-400" />
                    </button>
                </div>
                <h4 className="text-lg md:text-xl font-black text-slate-800 leading-tight">
                    Java Spring Boot Practice 01
                </h4>
                <div className="flex items-center gap-2 mt-3">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                   </div>
                   <p className="text-[11px] font-medium text-slate-500">24 students submitted</p>
                </div>
             </div>
             
             <div className="mt-8">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-indigo-100">
                   Review Submissions
                </button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const StatCard = ({ title, value, color, textColor }: any) => (
  <div className={`${color} p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between min-h-[120px] md:min-h-[140px] relative overflow-hidden transition-transform hover:scale-[1.02]`}>
    <div>
      <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wide ${textColor} opacity-70`}>{title}</p>
      <p className={`text-2xl md:text-3xl font-black ${textColor} mt-1`}>{value}</p>
    </div>
    <div className="mt-2 flex items-center gap-1.5">
        <span className={`text-[9px] px-1.5 py-0.5 bg-white/20 rounded font-bold ${textColor}`}>+12%</span>
        <span className={`text-[9px] ${textColor} opacity-60 hidden sm:inline`}>vs last month</span>
    </div>
  </div>
);