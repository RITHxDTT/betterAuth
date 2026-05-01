"use client"

import SideBarComponent from '../../components/SideBarComponent'
// import AnalyticsChart from '../dashboard/AnalyticsChart'
import dynamic from 'next/dynamic';

// Disable Server-Side Rendering for the chart
const AnalyticsChart = dynamic(() => import('../dashboard/AnalyticsChart'), { 
  ssr: false,
  loading: () => <div className="h-64 w-full bg-slate-50 animate-pulse rounded-xl" />
});
export default function Dashboard() {
  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
          <p className="text-slate-500">Welcome back, Prof. Anderson. Here's your campus summary.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <StatCard title="Total Task" value="10" color="bg-indigo-600" textColor="text-white" />
          <StatCard title="Total In Progress" value="56" color="bg-blue-50" textColor="text-blue-600" />
          <StatCard title="On-Time Submission" value="56" color="bg-green-50" textColor="text-green-600" />
          <StatCard title="Total Submission" value="56" color="bg-orange-50" textColor="text-orange-600" />
          <StatCard title="Total Submission" value="56" color="bg-red-50" textColor="text-red-600" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Chart Section - Placeholder */}
          <div className="col-span-8 bg-white p-6 rounded-3xl border border-slate-100 h-80">
             <h3 className="font-semibold mb-4 text-slate-700">Analytics</h3>
             <div className="w-full h-full bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                <AnalyticsChart />
             </div>
          </div>

          {/* Recent Task Widget */}
          <div className="col-span-4 bg-white p-6 rounded-3xl border border-slate-100 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50">
             <div>
                <div className="flex justify-between items-start mb-6">
                    <span className="font-semibold text-slate-700">Recent Task</span>
                    <button className="text-xs border px-2 py-1 rounded-lg">Filter</button>
                </div>
                <h4 className="text-xl font-bold text-indigo-900 leading-tight">
                    Assignment Java Practice01 Right Now?
                </h4>
                <p className="text-xs text-slate-400 mt-2">This meeting has 24 students.</p>
             </div>
             <button className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold mt-4 shadow-lg shadow-indigo-200">
                Start Meeting
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}

const StatCard = ({ title, value, color, textColor }: any) => (
  <div className={`${color} p-5 rounded-3xl flex flex-col justify-between min-h-[140px] relative overflow-hidden`}>
    <p className={`text-xs font-medium ${textColor} opacity-80`}>{title}</p>
    <p className={`text-3xl font-bold ${textColor} mt-2`}>{value}</p>
    <div className="mt-4 flex items-center gap-1">
        <span className={`text-[10px] px-1 bg-white/20 rounded ${textColor}`}>3^</span>
        <span className={`text-[10px] ${textColor} opacity-70`}>Increase from last task.</span>
    </div>
  </div>
);