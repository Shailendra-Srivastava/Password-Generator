import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = upper + lower;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      newPassword += randomChar;
    }

    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-orange-600 p-6">
      <div className="text-3xl font-bold mb-8">Password Generator</div>

      <div className="bg-gray-300 rounded-xl p-18 w-full max-w-xl">
        
        <div className="flex items-center mb-10">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your Password"
            className="flex-1 p-3 rounded-l-lg bg-white text-orange-600 font-bold text-lg outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="bg-orange-500 hover:bg-orange-800 text-white px-4 py-3 rounded-r-lg font-semibold"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Slider + Length */}
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-lg font-semibold">{length}</span>
        </div>

        
        <div className="flex space-x-8 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <span className="text-lg">Number</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <span className="text-lg">Symbol</span>
          </label>
        </div>
      </div>

      <button
        onClick={generatePassword}
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold"
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
