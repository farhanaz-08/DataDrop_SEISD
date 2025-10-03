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
    <div className="min-h-screen bg-[#FAF9FF] font-poppins relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute w-[203px] h-[203px] left-[119px] top-[489px] bg-[#8B7CE9] blur-[100px]"></div>
      <div className="absolute w-[111px] h-[111px] left-[455px] top-[350px] bg-[#6451E1] blur-[100px]"></div>
      
      {/* Logo Section - Top Left */}
      <div className="absolute left-16 top-12 flex items-center gap-3">
        <div className="w-14 h-14 bg-[#533DDE] rounded-xl flex items-center justify-center">
          {/* Clean message bubble icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 16V20L10 16H18C19.1046 16 20 15.1046 20 14V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#180F57] font-semibold text-xl tracking-wide">DATA DROP</h1>
          <p className="text-[#666666] text-lg">University Forum</p>
        </div>
      </div>

      {/* Admin Button - Top Right */}
      <button className="absolute right-16 top-16 px-4 py-2 bg-[#ECE9FB] rounded-lg text-[#533DDE] font-medium text-lg hover:bg-[#E0DCF9] transition-colors">
        Admin?
      </button>

      {/* Group 8 Logo - Clean Message Bubble Icon */}
      <div className="absolute w-[251px] h-[251px] left-[248px] top-[415px]">
        {/* Blur background */}
        <div className="absolute w-[235px] h-[235px] left-[16px] top-[16px] bg-[#8B7CE9] blur-[6px] rounded-[44.7619px]"></div>
        
        {/* Main icon - Clean Message Bubble */}
        <div className="absolute w-[235px] h-[235px] left-0 top-0 bg-[#533DDE] rounded-[44.7619px] shadow-[0px_6px_30px_rgba(41,35,92,0.25)] flex items-center justify-center">
          {/* Clean message bubble SVG */}
          <svg width="135" height="128" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 16V20L10 16H18C19.1046 16 20 15.1046 20 14V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Main Signup Card - Centered */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-[855px] bg-white rounded-xl shadow-[0px_6px_18px_rgba(100,81,225,0.16)] p-12 ml-64">
          <div className="flex flex-col gap-8 w-full">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center text-[#333333] tracking-wide mb-4">
              Register as a user
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Username Field */}
              <div className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-transparent outline-none text-[#999999] font-medium text-lg placeholder-[#999999]"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>

              {/* University Mail Field */}
              <div className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center">
                <input
                  type="email"
                  placeholder="University mail"
                  className="w-full bg-transparent outline-none text-[#999999] font-medium text-lg placeholder-[#999999]"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Department Field */}
              <div className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center justify-between cursor-pointer hover:bg-[#E8E8E8] transition-colors">
                <span className="text-[#333333] font-medium text-lg">Department</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#333333] transform rotate-45 translate-y-[-1px]"></div>
                </div>
              </div>

              {/* User Role Field */}
              <div className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center justify-between cursor-pointer hover:bg-[#E8E8E8] transition-colors">
                <span className="text-[#4D4D4D] font-medium text-lg">User role (teacher/student)</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#333333] transform rotate-45 translate-y-[-1px]"></div>
                </div>
              </div>

              {/* Action Buttons - Fixed alignment */}
              <div className="flex justify-between items-center pt-6">
                {/* Already have account - Left aligned */}
                <button
                  type="button"
                  className="px-6 py-3 bg-[#ECE9FB] rounded-lg text-[#533DDE] font-medium text-lg hover:bg-[#E0DCF9] transition-colors"
                >
                  Already have an account?
                </button>
                
                {/* Sign Up Button - Right side */}
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#533DDE] rounded-lg text-white font-medium text-lg hover:bg-[#311EAE] transition-colors min-w-[120px]"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom DATA DROP Text */}
      <div className="absolute w-[157px] h-[38px] left-[298px] top-[683px]">
        <h2 className="text-[25.4118px] leading-[38px] font-semibold tracking-[0.04em] text-[#311EAE]">
          DATA DROP
        </h2>
      </div>
    </div>
  );
};

export default SignUp;