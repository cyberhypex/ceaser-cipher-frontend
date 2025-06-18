import React, { useState } from 'react';
import axios from '../axios';
import { PiLockKeyBold } from "react-icons/pi";
import { FaRegCopy } from "react-icons/fa";

const EncryptText = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleEncryptClick = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to encrypt.");
      return;
    }

    try {
      const response = await axios.get("/encrypt", {
        params: {
          text: inputText,
          shift: shift || 3,
        }
      });

      setEncryptedText(response.data);
    } catch (error) {
      console.error("Encryption error:", error);
      alert("Failed to encrypt text.");
    }
  };

  const clear = () => {
    setInputText('');
    setShift('');
    setEncryptedText('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encryptedText);
    alert("Encrypted text copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-600 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-blue-200 transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          
         <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            Caesar Cipher Encryptor
          </h2>
        </div>

        {/* Text Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 font-medium mb-2">
            Text to Encrypt
          </label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="e.g. Hello World"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Shift Input */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 font-medium mb-2">
            Shift Value (Optional)
          </label>
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            placeholder="Default is 3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Clear Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={clear}
            className="text-sm text-red-500 hover:underline transition"
          >
            ❌ Clear All
          </button>
        </div>

        {/* Encrypt Button */}
        <div className="mb-6">
          <button
            onClick={handleEncryptClick}
            className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 text-black font-semibold py-3 rounded-xl shadow-md transition"
          >
            🔐 Encrypt Text
          </button>
        </div>

        {/* Encrypted Output Section */}
        {encryptedText && (
          <div className="mb-8 p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-900 shadow-inner transition">
            <span className="block text-sm text-gray-500 mb-1">Encrypted Output:</span>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold break-words">{encryptedText}</span>
              <button
                onClick={copyToClipboard}
                className="ml-4 text-indigo-600 hover:text-indigo-800 transition"
                title="Copy to clipboard"
              >
                <FaRegCopy />
              </button>
            </div>
            <span className="block mt-2 text-sm text-gray-500">
              Original Message: <span className="italic">{inputText || '[Cleared]'}</span>
            </span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition"
          >
            ⬅️ Back
          </button>
          <button
            onClick={() => window.location.href = "/"}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition"
          >
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default EncryptText;
