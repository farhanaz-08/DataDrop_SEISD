import React from 'react';
import PostCard from './PostCard';

function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      {/* Add new post */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Add a new post"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">+</button>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        <button className="bg-purple-600 text-white px-3 py-1 rounded">Department</button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Recent</button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Top</button>
      </div>

      {/* Posts */}
      <PostCard
        title="Date of the final exams"
        author="Dr Ronald Jackson"
        time="3d ago"
        content="Hand rib pepperoni thin and rib steak ranch. Pork banana rib cheese sautéed olives..."
        tags={['University-wide', 'Event']}
      />
      <PostCard
        title="Photography Contest"
        author="Dr Ronald Jackson"
        time="3d ago"
        content="Join us for the annual photography contest. Open for all departments..."
        tags={['Post', 'RPSU_Photography']}
      />
    </div>
  );
}

export default Dashboard;
