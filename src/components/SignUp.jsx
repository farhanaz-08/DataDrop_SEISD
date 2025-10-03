import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    department: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] flex items-center justify-center p-4 font-sans">
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8 mx-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Register as a user
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div className="bg-gray-100 rounded-lg p-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-lg"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

          {/* University Mail */}
          <div className="bg-gray-100 rounded-lg p-4">
            <input
              type="email"
              placeholder="University mail"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-lg"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Department */}
          <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer">
            <span className="text-gray-700 text-lg">Department</span>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* User Role */}
          <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer">
            <span className="text-gray-700 text-lg">User role (teacher/student)</span>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              className="px-6 py-3 bg-purple-100 text-purple-600 rounded-lg font-medium hover:bg-purple-200 transition-colors"
            >
              Already have an account?
            </button>
            
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;