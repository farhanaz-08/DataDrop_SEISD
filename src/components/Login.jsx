// src/components/Login.jsx
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#f9f8ff]">
      {/* Left side */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center space-y-6">
        <div className="flex items-center space-x-3">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/chat.png"
            alt="logo"
            className="w-12 h-12 bg-purple-600 p-2 rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-xl font-bold text-purple-800">DATA DROP</h1>
            <p className="text-gray-500">University Forum</p>
          </div>
        </div>

        {/* Large Icon */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-600 rounded-2xl p-10 shadow-lg">
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/chat.png"
              alt="logo large"
              className="w-16 h-16"
            />
          </div>
          <p className="mt-4 text-purple-800 font-semibold">DATA DROP</p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Login
          </h2>

          <form className="space-y-5">
            {/* Email */}
            <input
              type="email"
              placeholder="User mail"
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Forgot password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot password ?
              </a>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full py-2 text-white font-semibold bg-gradient-to-r from-purple-600 to-purple-800 rounded-md hover:opacity-90"
            >
              Sign in
            </button>

            {/* Register link */}
            <div className="text-center">
              <a
                href="#"
                className="text-sm text-purple-600 hover:underline"
              >
                Don&apos;t have an account ?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
