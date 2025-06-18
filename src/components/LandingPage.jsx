import React from 'react';
import { PiDetectiveFill } from "react-icons/pi";

export function LandingPage() {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col justify-center items-center px-4 text-white">
      
      {/* Header */}
      <div className=" flex-col items-center mb-10">
        <div className="flex items-center mb-6">
          <PiDetectiveFill className="text-9xl mr-4 text-amber-300 drop-shadow-md" />
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-amber-300">Cipher</span>
          </h1>
        </div>
        <div className='flex items-center text-amber-300'>
          Encrypt your messages easily using Caesar Cipher — fast, secure, and simple.
          
        </div>


        {/* Buttons stacked with spacing */}
        <div className=" flex-col items-center mt-4 ">
          <button
            onClick={() => handleNavigation('/encrypt')}
            className="bg-white text-amber-300 font-bold px-8 py-3 rounded-lg hover:bg-black hover:text-blue-600 transition shadow-md"
          >
            Encrypt your message
          </button>  
        
          
        </div>
        
        <div className=" flex-col items-center mt-4">
          <button
            onClick={() => handleNavigation('/decrypt')}
            className="bg-white text-amber-300 font-bold px-8 py-3 rounded-lg hover:bg-black  transition shadow-md"
          >
            Decrypt your encrypted message
          </button>
          
        </div>
        <div className='flex items-center text-amber-300 mt-2.5'>
          Built by Anshuman
          
        </div>

      </div>
    </div>
  );
}
