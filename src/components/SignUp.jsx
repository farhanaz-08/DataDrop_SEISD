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
    
    // Redirect to dashboard after successful signup
    navigate('/dashboard');
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

  const handleGoogleSignUp = () => {
    // Add Google OAuth functionality here
    console.log('Sign up with Google clicked');
    // Redirect to dashboard after Google signup
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] font-poppins relative overflow-hidden">
      {/* ... (rest of your SignUp component remains the same) ... */}
      
      {/* In the form section, keep everything the same but the handleSubmit will now redirect */}
    </div>
  );
};

export default SignUp;