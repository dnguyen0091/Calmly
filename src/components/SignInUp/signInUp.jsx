import React, { useState } from 'react';

export default function SignInUp() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        {/* Header/Tabs for switching mode */}
        <div className="flex mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 border-b-2 font-semibold transition-colors duration-300 ${
              mode === 'login'
                ? 'border-blue-500 text-blue-500'
                : 'border-gray-200 text-gray-500 hover:text-blue-500'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2 border-b-2 font-semibold transition-colors duration-300 ${
              mode === 'register'
                ? 'border-blue-500 text-blue-500'
                : 'border-gray-200 text-gray-500 hover:text-blue-500'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form>
          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-300"
          >
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Options */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-50 transition">
            {/* Replace with the actual path to your Google icon */}
            <img src="/path/to/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-50 transition">
            {/* Replace with the actual path to your Apple icon */}
            <img src="/path/to/apple-icon.png" alt="Apple" className="w-5 h-5 mr-2" />
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
