import React from 'react';
import { PiDetectiveFill } from "react-icons/pi";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      {/* Detective Icon and Title */}
      <div className="flex items-center space-x-4 mb-6">
        <PiDetectiveFill className="text-5xl text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]" />
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]">
          Cipher Detective
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl text-center max-w-xl mb-10">
        Unearth the secrets of encrypted messages. Choose your path.
      </p>

      {/* Buttons */}
      <div className="flex space-x-6">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl border border-gray-600 shadow-md hover:shadow-white/10 transition-all duration-300">
          Encrypt
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl border border-gray-600 shadow-md hover:shadow-white/10 transition-all duration-300">
          Decrypt
        </button>
      </div>
    </div>
  );
}
