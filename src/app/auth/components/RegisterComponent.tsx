"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, UserCircle } from 'lucide-react';
import { handleRegister } from '@/lib/auth';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await handleRegister(formData);
    } catch (err: any) {
      setError(err.message || "Something went wrong during registration.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-white">
      {/* Form Section */}
      <div className="container mx-auto px-6 lg:px-20 z-20">
        <div className="max-w-xl">
          <header className="mb-8">
            <p className="text-gray-600 font-medium">Join Our Community</p>
            <h1 className="text-4xl font-bold text-black mt-1">Create Account</h1>
          </header>

          <form onSubmit={onRegisterSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {error && (
              <div className="md:col-span-2 p-3 text-sm text-red-500 bg-red-50 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            {/* First Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">First Name</label>
              <div className="relative">
                <input name="firstName" required onChange={handleChange} className="w-full px-4 py-3 bg-blue-50/50 border border-transparent rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John" />
                <User className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Last Name</label>
              <div className="relative">
                <input name="lastName" required onChange={handleChange} className="w-full px-4 py-3 bg-blue-50/50 border border-transparent rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Doe" />
                <User className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Username */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold">Username</label>
              <div className="relative">
                <input name="username" required onChange={handleChange} className="w-full px-4 py-3 bg-blue-50/50 border border-transparent rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john_doe" />
                <UserCircle className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <div className="relative">
                <input name="email" type="email" required onChange={handleChange} className="w-full px-4 py-3 bg-blue-50/50 border border-transparent rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
                <Mail className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Password */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold">Password</label>
              <div className="relative">
                <input name="password" type="password" required onChange={handleChange} className="w-full px-4 py-3 bg-blue-50/50 border border-transparent rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="••••••••" />
                <Lock className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="md:col-span-2 mt-4 py-4 bg-[#4338CA] hover:bg-[#3730A3] disabled:bg-indigo-300 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              {isLoading ? "Creating Account..." : "Register"}
            </button>
          </form>
        </div>
      </div>

      {/* Same Background Styling as SignIn */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block opacity-20 lg:opacity-100">
        <div 
          className="absolute inset-0 z-10"
          style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 30% 50%)',
            borderLeft: '2px solid #A78BFA'
          }}
        />
        <img 
          src="https://www.kshrd.com.kh/_next/image?url=https%3A%2F%2Frustfs.kshrd.app%2Fhrd-website-image%2Fpublic%2Fall-gen-img%2F12-basic.jpg&w=3840&q=75" 
          alt="Workspace" 
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}