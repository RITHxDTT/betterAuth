"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function ProfileDetails() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        if (!res.ok || !data?.isSuccess) {
          throw new Error(data?.message || "Failed to load profile");
        }

        setUser(data.payload);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-fullmin-h-screen bg-slate-50 px-6 py-10">
      <div className=" mx-auto bg-white rounded-3xl shadow-lg border border-slate-100 p-8">

        {/* TOP HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.profile_image_url || "https://i.pravatar.cc/150"}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shadow">
                📷
              </div>
            </div>

            {/* Name + Info */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {user.given_name} {user.family_name}
              </h1>

              {/* badges */}
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  {user.role}
                </span>
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                  Active
                </span>
              </div>

              {/* email + location */}
              <div className="flex gap-6 mt-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  {user.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  Phnom Penh, Cambodia
                </div>
              </div>
            </div>
          </div>

        
        </div>

        {/* PERSONAL INFO */}
        <h2 className="text-lg font-semibold mb-6">Personal Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Field label="Full Name" value={`${user.given_name} ${user.family_name}`} />
          <Field label="Gender" value={user.gender || "N/A"} />

          <Field label="Email" value={user.email} />
          <Field label="Date Of Birth" value={user.birthdate || "N/A"} />

          <Field label="Subject" value="Java Programming" />
          <Field label="Generation" value="14th" />

          <div className="md:col-span-2">
            <Field label="Address" value="Toul Touk, Phnom Penh, Cambodia" />
          </div>
        </div>

        {/* FOOTER BUTTON */}
        <div className="flex justify-end mt-10">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Field Component */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-sm text-slate-500">{label}</label>
      <div className="mt-1 px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-700">
        {value}
      </div>
    </div>
  );
}