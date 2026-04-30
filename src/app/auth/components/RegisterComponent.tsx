"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, User, UserCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { handleRegister } from '@/lib/auth';

// Define validation schema
const registerSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterInput = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    setServerError('');
    try {
      await handleRegister(data);
    } catch (err: any) {
      setServerError(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center bg-slate-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-20 z-10 flex justify-between items-center">
        <div className="max-w-xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
            <p className="text-slate-500 mt-2">Join us and start managing your workspace.</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {serverError && (
              <div className="p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">First Name</label>
                <div className="relative group">
                  <input
                    {...register('firstName')}
                    className={`w-full pl-4 pr-11 py-3.5 bg-slate-50 border ${errors.firstName ? 'border-red-300' : 'border-slate-200'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200`}
                    placeholder="John"
                  />
                  <User className="absolute right-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500" />
                </div>
                {errors.firstName && <p className="text-xs text-red-500 ml-1">{errors.firstName.message}</p>}
              </div>

              {/* Last Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Last Name</label>
                <div className="relative group">
                  <input
                    {...register('lastName')}
                    className={`w-full pl-4 pr-11 py-3.5 bg-slate-50 border ${errors.lastName ? 'border-red-300' : 'border-slate-200'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200`}
                    placeholder="Doe"
                  />
                  <User className="absolute right-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500" />
                </div>
                {errors.lastName && <p className="text-xs text-red-500 ml-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Username */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
              <div className="relative group">
                <input
                  {...register('username')}
                  className={`w-full pl-4 pr-11 py-3.5 bg-slate-50 border ${errors.username ? 'border-red-300' : 'border-slate-200'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200`}
                  placeholder="johndoe_99"
                />
                <UserCircle className="absolute right-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500" />
              </div>
              {errors.username && <p className="text-xs text-red-500 ml-1">{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full pl-4 pr-11 py-3.5 bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-200'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200`}
                  placeholder="name@company.com"
                />
                <Mail className="absolute right-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500" />
              </div>
              {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative group">
                <input
                  {...register('password')}
                  type={showPassword ? "text" : "password"}
                  className={`w-full pl-4 pr-11 py-3.5 bg-slate-50 border ${errors.password ? 'border-red-300' : 'border-slate-200'} rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200`}
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-indigo-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 ml-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Creating Account...
                </>
              ) : "Register"}
            </button>

            <p className="text-center text-slate-500 text-sm mt-6">
              Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Log in</a>
            </p>
          </form>
        </div>

        {/* Decorative Right Panel */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 ml-20 text-center">
          <div className="w-full max-w-md aspect-square bg-indigo-600 rounded-[3rem] rotate-3 flex items-center justify-center relative shadow-2xl">
             <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3rem] -rotate-6" />
             <div className="relative z-10 text-white p-10">
                <h2 className="text-3xl font-bold mb-4">Start your journey with us.</h2>
                <p className="text-indigo-100">The best way to manage your tasks, collaboration, and progress in one clean dashboard.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}