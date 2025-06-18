import React, { useState } from 'react';
import axios from '../axios';
import { PiLockLaminatedOpenBold } from "react-icons/pi";
import { FaRegCopy } from "react-icons/fa";

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
    } catch (error) {
      console.error("Decryption error:", error);
      alert("Failed to decrypt text.");
    }
  };

  const clear = () => {
    setInputText('');
    setShift('');
    setDecryptedText('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decryptedText);
    alert("Decrypted text copied to clipboard!:"+{decryptedText});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-300 transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          
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
        <div className="mb-4">
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

        {/* Clear Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={clear}
            className="text-sm text-red-500 hover:bg-blue-500"
          >
            ❌ Clear All
          </button>
        </div>

        {/* Decrypt Button */}
        <div className="mb-6">
          <button
            onClick={handleDecryptClick}
            className="w-full text-sm text-red-500 hover:bg-blue-500"
          >
            🔓 Decrypt Text
          </button>
        </div>

        {/* Decrypted output */}
        {decryptedText && (
          <div className="mt-4 mb-6 p-4 bg-purple-50 border border-purple-200 rounded-xl text-purple-900 text-lg font-semibold shadow-inner transition">
            <span className="block text-sm text-gray-500 mb-1">Decrypted Output:</span>
            <div className="flex justify-between items-center">
              <span className="break-words">{decryptedText}</span>
              <button
                onClick={copyToClipboard}
                className="ml-4 text-purple-600 hover:text-purple-800 transition"
                title="Copy to clipboard"
              >
                <FaRegCopy />
              </button>
            </div>
            <span className="block mt-2 text-sm text-gray-500">
              Encrypted Message: <span className="italic">{inputText || '[Cleared]'}</span>
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

export default DecryptText;
