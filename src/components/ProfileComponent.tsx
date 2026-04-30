"use client";

import { useState } from "react";
import { User, Mail, Calendar } from "lucide-react";

export default function ProfileDetails() {
  // Static mock data
  const [user] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    dob: "2000-05-04",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src={user.avatar}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 shadow"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-slate-900">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-slate-500">User Profile</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* First Name */}
          <div className="space-y-1">
            <label className="text-sm text-slate-500">First Name</label>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <User className="text-slate-400 w-5 h-5" />
              <span className="text-slate-800 font-medium">
                {user.firstName}
              </span>
            </div>
          </div>

          {/* Last Name */}
          <div className="space-y-1">
            <label className="text-sm text-slate-500">Last Name</label>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <User className="text-slate-400 w-5 h-5" />
              <span className="text-slate-800 font-medium">
                {user.lastName}
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm text-slate-500">Email</label>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <Mail className="text-slate-400 w-5 h-5" />
              <span className="text-slate-800 font-medium">
                {user.email}
              </span>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="space-y-1">
            <label className="text-sm text-slate-500">Date of Birth</label>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <Calendar className="text-slate-400 w-5 h-5" />
              <span className="text-slate-800 font-medium">
                {user.dob}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}