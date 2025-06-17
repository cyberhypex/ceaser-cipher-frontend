import React, { useState } from 'react';
import axios from '../axios';
import { PiLockLaminatedOpenBold } from "react-icons/pi";

const DecryptText = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleDecryptClick = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to decrypt.");
      return;
    }

    try {
      const response = await axios.get("/decrypt", {
        params: {
          text: inputText,
          shift: shift || 3
        }
      });

      setDecryptedText(response.data);
      setInputText('');
      setShift('');
    } catch (error) {
      console.error("Decryption error:", error);
      alert("Failed to decrypt text.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg border border-purple-300 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <PiLockLaminatedOpenBold className="text-3xl text-purple-700" />
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
          Caesar Cipher Decryptor
        </h2>
      </div>

      {/* Input for text */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 font-medium mb-2">
          Text to Decrypt
        </label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. Khoor Zruog"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
      </div>

      {/* Button */}
      <div className="mb-6">
        <button
          onClick={handleDecryptClick}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-300 hover:from-pink-500 hover:to-purple-400 text-black font-semibold py-3 rounded-xl shadow-md transition"
        >
          🔓 Decrypt Text
        </button>
      </div>

      {/* Decrypted output */}
      {decryptedText && (
        <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-xl text-purple-900 text-lg font-semibold shadow-inner">
          <span className="block text-sm text-gray-500 mb-1">Decrypted Output:</span>
          {decryptedText}
        </div>
      )}
    </div>
  );
};

export default DecryptText;
