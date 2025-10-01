import React from 'react';
import profilePic from '../assets/profile.jpg';

function PostCard({ title, author, time, content, tags }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="flex items-center gap-2 mt-2">
        <img src={profilePic} alt="author" className="w-8 h-8 rounded-full" />
        <span className="text-gray-600">{author} • {time}</span>
      </div>
      <p className="mt-2 text-gray-700">{content}</p>
      <div className="flex gap-2 mt-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
