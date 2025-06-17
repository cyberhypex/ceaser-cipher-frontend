import React, { useState } from 'react';
import axios from '../axios';
import { PiLockKeyBold } from "react-icons/pi";

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
          shift: shift || 3
        }
      });

      setEncryptedText(response.data);
      setInputText('');
      setShift('');
    } catch (error) {
      console.error("Encryption error:", error);
      alert("Failed to encrypt text.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg border border-blue-200 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <PiLockKeyBold className="text-3xl text-indigo-700" />
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">
          Caesar Cipher Encryptor
        </h2>
      </div>

      {/* Input for text */}
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

      {/* Input for shift value */}
      <div className="mb-6">
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

      {/* Button */}
      <div className="mb-6">
        <button
          onClick={handleEncryptClick}
          className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-500 hover:to-yellow-400 text-black font-semibold py-3 rounded-xl shadow-md transition"
        >
          🔐 Encrypt Text
        </button>
      </div>

      {/* Encrypted output */}
      {encryptedText && (
        <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-900 text-lg font-semibold shadow-inner">
          <span className="block text-sm text-gray-500 mb-1">Encrypted Output:</span>
          {encryptedText}
        </div>
      )}
    </div>
  );
};

export default EncryptText;
