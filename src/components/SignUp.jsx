import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    department: '',
    role: ''
  });

  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const navigate = useNavigate();

  // Department options
  const departments = ['CSE', 'EEE', 'LAW', 'BBA', 'Pharmacy', 'TFD'];

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

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleAdminRedirect = () => {
    navigate('/admin-login');
  };

  const handleRoleSelect = (role) => {
    setFormData({
      ...formData,
      role: role
    });
    setShowRoleDropdown(false);
  };

  const handleDepartmentSelect = (department) => {
    setFormData({
      ...formData,
      department: department
    });
    setShowDepartmentDropdown(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] font-poppins relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute w-[203px] h-[203px] left-[119px] top-[489px] bg-[#8B7CE9] blur-[100px]"></div>
      <div className="absolute w-[111px] h-[111px] left-[455px] top-[350px] bg-[#6451E1] blur-[100px]"></div>
      
      {/* Logo Section - Top Left */}
      <div className="absolute left-16 top-12 flex items-center gap-3">
        <img 
          src={logo} 
          alt="Data Drop Logo" 
          className="w-14 h-14 object-contain rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-[#180F57] font-semibold text-xl tracking-wide">DATA DROP</h1>
          <p className="text-[#666666] text-lg">RPSU Forum</p>
        </div>
      </div>

      {/* Admin Button - Top Right */}
      <button 
        onClick={handleAdminRedirect}
        className="absolute right-16 top-16 px-4 py-2 bg-[#ECE9FB] rounded-lg text-[#533DDE] font-medium text-lg hover:bg-[#E0DCF9] transition-colors"
      >
        Admin?
      </button>

      {/* Group 8 - Center Background Icon */}
      <div className="absolute w-[251px] h-[251px] left-[248px] top-[415px]">
        <img 
          src={logo} 
          alt="Data Drop Background Logo" 
          className="w-[235px] h-[235px] rounded-[44px] shadow-[0px_6px_30px_rgba(41,35,92,0.25)]"
        />
      </div>

      {/* Main Signup Card */}
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
                  name="username"
                  placeholder="Username"
                  className="w-full bg-transparent outline-none text-[#333333] font-medium text-lg placeholder-[#999999]"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              {/* University Mail Field */}
              <div className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="University mail"
                  className="w-full bg-transparent outline-none text-[#333333] font-medium text-lg placeholder-[#999999]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Department Field - Updated with Dropdown */}
              <div className="relative">
                <div 
                  className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center justify-between cursor-pointer hover:bg-[#E8E8E8] transition-colors"
                  onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
                >
                  <span className={`font-medium text-lg ${formData.department ? 'text-[#333333]' : 'text-[#999999]'}`}>
                    {formData.department || 'Department'}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className={`w-2 h-2 border-r-2 border-b-2 border-[#333333] transform ${showDepartmentDropdown ? 'rotate-225 translate-y-[1px]' : 'rotate-45 translate-y-[-1px]'} transition-transform`}></div>
                  </div>
                </div>

                {/* Department Dropdown Menu */}
                {showDepartmentDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-[0px_6px_18px_rgba(100,81,225,0.16)] z-10 overflow-hidden max-h-48 overflow-y-auto">
                    {departments.map((dept, index) => (
                      <div 
                        key={dept}
                        className={`px-4 py-3 hover:bg-[#ECE9FB] cursor-pointer transition-colors ${index < departments.length - 1 ? 'border-b border-gray-100' : ''}`}
                        onClick={() => handleDepartmentSelect(dept)}
                      >
                        <span className="text-[#333333] font-medium text-lg">{dept}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* User Role Field - Updated with Dropdown */}
              <div className="relative">
                <div 
                  className="w-full h-14 bg-[#F2F2F2] rounded-lg px-4 flex items-center justify-between cursor-pointer hover:bg-[#E8E8E8] transition-colors"
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                >
                  <span className={`font-medium text-lg ${formData.role ? 'text-[#333333]' : 'text-[#999999]'}`}>
                    {formData.role || 'User role (teacher/student)'}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className={`w-2 h-2 border-r-2 border-b-2 border-[#333333] transform ${showRoleDropdown ? 'rotate-225 translate-y-[1px]' : 'rotate-45 translate-y-[-1px]'} transition-transform`}></div>
                  </div>
                </div>

                {/* Dropdown Menu */}
                {showRoleDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-[0px_6px_18px_rgba(100,81,225,0.16)] z-10 overflow-hidden">
                    <div 
                      className="px-4 py-3 hover:bg-[#ECE9FB] cursor-pointer transition-colors border-b border-gray-100"
                      onClick={() => handleRoleSelect('Teacher')}
                    >
                      <span className="text-[#333333] font-medium text-lg">Teacher</span>
                    </div>
                    <div 
                      className="px-4 py-3 hover:bg-[#ECE9FB] cursor-pointer transition-colors"
                      onClick={() => handleRoleSelect('Student')}
                    >
                      <span className="text-[#333333] font-medium text-lg">Student</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-6">
                <button
                  type="button"
                  onClick={handleLoginRedirect}
                  className="px-6 py-3 bg-[#ECE9FB] rounded-lg text-[#533DDE] font-medium text-lg hover:bg-[#E0DCF9] transition-colors"
                >
                  Already have an account?
                </button>
                
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