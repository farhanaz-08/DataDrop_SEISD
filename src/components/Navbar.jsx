import React from 'react';
import { FiPlus, FiBell, FiSettings } from 'react-icons/fi';
import profilePic from '../assets/profile.jpeg'; // adjust if different path
import logo from '../assets/Rpsu.jpeg';


function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">

       <div className="flex items-center gap-2">
       <img src={logo} alt="Logo" className="w-10 h-10" />
       <span className="text-xl font-bold text-purple-700"> </span>
       </div>

      {/* Logo */}
      <div className="text-xl font-bold text-purple-700">
        DATA DROP
      </div>

      {/* Search */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Type to search"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Icons + Profile */}
      <div className="flex items-center gap-4">
        <FiPlus className="text-2xl cursor-pointer text-purple-600" />
        <FiBell className="text-2xl cursor-pointer text-gray-600" />
        <FiSettings className="text-2xl cursor-pointer text-gray-600" />
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-purple-500"
        />
      </div>
    </nav>
  );
}

export default Navbar;

