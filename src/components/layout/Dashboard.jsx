import React from 'react';

const Dashboard = () => {
  // Sample data - will replace with real data later
  const featuredPost = {
    title: 'Our Spring Festival is just around the corner',
    author: 'Dr Ronald Jackson',
    time: '3d ago',
    category: 'Student',
    content: 'Hand rib pepperoni thin and rib steak ranch. Pork banana rib cheese sautéed olives buffalo deep pork bell.'
  };

  const events = [
    {
      title: 'Library Room 204',
      time: 'Tomorrow, 6:00 PM',
      type: 'Study Group'
    },
    {
      title: 'Join to welcome our Coding Champions',
      time: 'Friday, 3:00 PM', 
      type: 'Welcome Event'
    }
  ];

  const stats = [
    { label: 'INTERESTED IN', value: '20', subvalue: '240' },
    { label: 'Freshers Orientation...', value: '09', subvalue: '144' },
    { label: 'Programming C...', value: '23', subvalue: '144' },
    { label: 'Seminar on Artif...', value: '15', subvalue: '89' }
  ];

  const quickFilters = ['Department', 'Recent', 'Top'];

  return (
    <div className="min-h-screen bg-[#FAF9FF] lg:ml-64">
      {/* Mobile spacing */}
      <div className="lg:hidden h-20"></div>
      
      <div className="p-6 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-[#533DDE] focus:border-transparent shadow-sm"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#999999] text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* Quick Actions & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <button className="bg-white rounded-xl p-4 shadow-[0px_2px_8px_rgba(100,81,225,0.08)] hover:shadow-[0px_6px_18px_rgba(100,81,225,0.16)] transition-shadow text-left flex items-center space-x-2">
            <span>➕</span>
            <span>Add a new event</span>
          </button>
          
          <div className="flex gap-2">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                className="bg-white rounded-xl px-4 py-2 shadow-[0px_2px_8px_rgba(100,81,225,0.08)] hover:shadow-[0px_6px_18px_rgba(100,81,225,0.16)] transition-shadow text-sm font-medium text-[#333333]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Post */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_18px_rgba(100,81,225,0.16)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#180F57] mb-2">{featuredPost.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-[#999999]">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.time}</span>
                  </div>
                </div>
                <span className="bg-[#ECE9FB] text-[#533DDE] px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
              
              <p className="text-[#4D4D4D] leading-relaxed mb-6">
                {featuredPost.content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-[#999999] hover:text-[#533DDE] transition-colors">
                    <span>👍</span>
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#999999] hover:text-[#533DDE] transition-colors">
                    <span>💬</span>
                    <span>8</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#999999] hover:text-[#533DDE] transition-colors">
                    <span>🔄</span>
                    <span>3</span>
                  </button>
                </div>
                <button className="text-[#533DDE] hover:text-[#311EAE] font-medium">
                  Read More →
                </button>
              </div>
            </div>

            {/* Additional posts would go here */}
            <div className="text-center py-8 text-[#999999]">
              More posts will load here...
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-6">
            {/* Events Section */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_18px_rgba(100,81,225,0.16)]">
              <h3 className="text-lg font-bold text-[#180F57] mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-[#533DDE] transition-colors">
                    <h4 className="font-semibold text-[#333333] mb-2">{event.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#999999]">{event.time}</span>
                      <span className="bg-[#ECE9FB] text-[#533DDE] px-2 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-center text-[#533DDE] hover:text-[#311EAE] font-medium py-2">
                View All Events →
              </button>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_18px_rgba(100,81,225,0.16)]">
              <h3 className="text-lg font-bold text-[#180F57] mb-4">Event Statistics</h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-[#4D4D4D]">{stat.label}</span>
                    <div className="text-right">
                      <div className="font-semibold text-[#333333]">{stat.value}</div>
                      <div className="text-xs text-[#999999]">{stat.subvalue}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;