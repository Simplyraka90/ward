"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        No user found. Please Login.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0d0f19] text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>

      {/* PROFILE */}
      <div className="flex items-center gap-6 mb-10">
        <Image
          src={user.image}
          alt="Profile"
          width={90}
          height={90}
          className="rounded-full border border-white/20"
        />
        <div>
          <p className="text-lg">{user.email}</p>
        </div>
      </div>

      {/* UPLOADED IMAGES */}
      <h2 className="text-xl font-semibold mb-3">Uploaded Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {user.uploads.length === 0 && (
          <p className="text-gray-300">No uploads yet</p>
        )}

        {user.uploads.map((img: string, i: number) => (
          <Image key={i} src={img} width={200} height={200} alt="Upload" className="rounded-lg" />
        ))}
      </div>

      {/* DOWNLOADED IMAGES */}
      <h2 className="text-xl font-semibold mt-10 mb-3">Downloaded Images</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {user.downloads.length === 0 && (
          <p className="text-gray-300">No downloads yet</p>
        )}

        {user.downloads.map((img: string, i: number) => (
          <Image key={i} src={img} width={200} height={200} alt="Download" className="rounded-lg" />
        ))}
      </div>
    </div>
  );
}
