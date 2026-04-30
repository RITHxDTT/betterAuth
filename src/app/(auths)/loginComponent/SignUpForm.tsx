import React from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export const SignUpForm = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create account</h1>
        <p className="text-sm text-slate-500">Enter your details to get started</p>
      </div>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          Sign Up
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};