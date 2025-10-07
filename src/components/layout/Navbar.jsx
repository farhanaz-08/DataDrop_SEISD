import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/dashboard', icon: '🏠' },
    { label: 'Explore', path: '/explore', icon: '🔍' },
    { label: 'My Community', path: '/my-community', icon: '👥' },
    { label: 'Events', path: '/events', icon: '📅' },
    { label: 'Announcement', path: '/announcements', icon: '📢' }
  ];

  const communities = [
    { name: 'CSE_bookClub', members: '1.2k', icon: '📚' },
    { name: 'CSE_Cultural', members: '856', icon: '🎭' },
    { name: 'CSE_Debate', members: '432', icon: '💬' },
    { name: 'BBA_Cultural', members: '723', icon: '🎨' }
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#533DDE] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DD</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-[#180F57]">DATA DROP</h1>
              <p className="text-xs text-[#999999]">RPSU Forum</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#4D4D4D] mb-4 px-4">OVERVIEW</h3>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
                    isActivePath(item.path)
                      ? 'bg-[#ECE9FB] text-[#533DDE] font-semibold'
                      : 'text-[#4D4D4D] hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Create Community Section */}
          <div>
            <h3 className="text-sm font-semibold text-[#4D4D4D] mb-4 px-4">CREATE COMMUNITY</h3>
            
            {/* New Community Button */}
            <button className="w-full mb-6 bg-[#533DDE] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#311EAE] transition-colors flex items-center justify-center space-x-2">
              <span>+</span>
              <span>NEW COMMUNITY</span>
            </button>

            {/* Recent Communities */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-[#999999] mb-3 px-4 uppercase tracking-wide">RECENT COMMUNITY</h4>
              <div className="space-y-2">
                {communities.map((community) => (
                  <button
                    key={community.name}
                    className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-50 text-left"
                  >
                    <span className="text-lg">{community.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#333333]">{community.name}</p>
                      <p className="text-xs text-[#999999]">{community.members} members</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#533DDE] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DD</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-[#180F57]">DATA DROP</h1>
              <p className="text-xs text-[#999999]">RPSU Forum</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4D4D4D] mb-3">OVERVIEW</h3>
              <nav className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left ${
                      isActivePath(item.path)
                        ? 'bg-[#ECE9FB] text-[#533DDE] font-semibold'
                        : 'text-[#4D4D4D]'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              <h3 className="text-sm font-semibold text-[#4D4D4D] mb-3">CREATE COMMUNITY</h3>
              <button className="w-full bg-[#533DDE] text-white py-3 px-4 rounded-xl font-semibold mb-4">
                + NEW COMMUNITY
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;