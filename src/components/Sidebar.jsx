import React from 'react';
import { AiOutlineHome, AiOutlineCompass } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { MdEvent, MdAnnouncement } from 'react-icons/md';

function Sidebar() {
  return (
    <div className="w-64 p-4 bg-white shadow-md flex flex-col gap-6">
      {/* Overview */}
      <div>
        <h2 className="text-gray-500 mb-2 uppercase text-sm">Overview</h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-100 cursor-pointer bg-purple-50">
            <AiOutlineHome /> Home
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-100 cursor-pointer">
            <AiOutlineCompass /> Explore
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-100 cursor-pointer">
            <BsPeople /> My Community
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-100 cursor-pointer">
            <MdEvent /> Events
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-100 cursor-pointer">
            <MdAnnouncement /> Announcement
          </li>
        </ul>
      </div>

      {/* Create Community */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-purple-700">
        + New Community
      </button>

      {/* Recent Communities */}
      <div>
        <h2 className="text-gray-500 mb-2 uppercase text-sm">Recent Community</h2>
        <ul className="flex flex-col gap-2">
          <li className="p-2 rounded-md border-l-4 border-purple-400 cursor-pointer hover:bg-purple-50">CSE_bookClub</li>
          <li className="p-2 rounded-md border-l-4 border-green-400 cursor-pointer hover:bg-green-50">CSE_Cultural</li>
          <li className="p-2 rounded-md border-l-4 border-blue-400 cursor-pointer hover:bg-blue-50">CSE_Debate</li>
          <li className="p-2 rounded-md border-l-4 border-green-300 cursor-pointer hover:bg-green-50">BBA_Cultural</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
