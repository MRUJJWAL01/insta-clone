import React, { useState } from 'react';
import InstagramFooter from '../component/footer/InstagramFooter';
import MessageButton from '../component/messages/MessageButton';
import { useSelector } from 'react-redux';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');



  const stories = [
    // { id: 1, label: 'old memories', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    // { id: 2, label: 'enjoyment', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    // { id: 3, label: 'Highlights', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    // { id: 4, label: 'Highlights', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
    { id: 5, label: 'brother', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' },
    { id: 6, label: 'New', isNew: true }
  ];

  const posts = [
    // { id: 1, image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' },
    // { id: 2, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
    // { id: 3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop' }
  ];

    const { user, isLoggedin } = useSelector((state) => state.auth);
    // console.log(user);
    
    

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-start gap-8 mb-12">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={user.dp}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-2 border-gray-700"
            />
            <button className="absolute bottom-0 right-0 bg-gray-800 text-gray-400 rounded-full p-1 text-xs border border-gray-600">
              Note...
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-xl font-light">{user?.username}</h1>
              <button className="px-4 py-1.5 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                Edit profile
              </button>
              <button className="px-4 py-1.5 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                View archive
              </button>
              <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1"/>
                  <circle cx="19" cy="12" r="1"/>
                  <circle cx="5" cy="12" r="1"/>
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mb-6">
              <div className="text-sm">
                <span className="font-semibold">0</span> posts
              </div>
              <div className="text-sm cursor-pointer hover:text-gray-300">
                <span className="font-semibold">{user?.followers.length}</span> followers
              </div>
              <div className="text-sm cursor-pointer hover:text-gray-300">
                <span className="font-semibold">{user?.following.length}</span> following
              </div>
            </div>

            {/* Bio */}
            <div className="text-lg">
              <p className="font-semibold mb-1">{user?.fullName}</p>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="bg-gray-700 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  {/* ujjwalxchouhan */}
                </div>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">
                {/* ujjwals-portfolio.vercel.app */}
              </a>
            </div>
          </div>
        </div>

        {/* Stories/Highlights */}
        <div className="flex gap-6 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0">
              {story.isNew ? (
                <div className="w-20 h-20 rounded-full border-2 border-gray-700 flex items-center justify-center bg-black cursor-pointer hover:bg-gray-900 transition-colors">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              ) : (
                <img
                  src={story.image}
                  alt={story.label}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-700 cursor-pointer hover:scale-105 transition-transform"
                />
              )}
              <span className="text-xs text-white text-center max-w-[80px] truncate">
                {story.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-800">
          <div className="flex justify-center gap-16">
            <button
              onClick={() => setActiveTab('posts')}
              className={`flex items-center gap-2 py-3 text-xs font-semibold tracking-wider border-t-2 -mt-px transition-colors ${
                activeTab === 'posts'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="13" y="3" width="7" height="7"/>
                <rect x="3" y="13" width="7" height="7"/>
                <rect x="13" y="13" width="7" height="7"/>
              </svg>
              POSTS
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 py-3 text-xs font-semibold tracking-wider border-t-2 -mt-px transition-colors ${
                activeTab === 'saved'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
              </svg>
              SAVED
            </button>
            <button
              onClick={() => setActiveTab('tagged')}
              className={`flex items-center gap-2 py-3 text-xs font-semibold tracking-wider border-t-2 -mt-px transition-colors ${
                activeTab === 'tagged'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              TAGGED
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 mt-1">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square cursor-pointer group overflow-hidden"
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Messages Button */}
      <div>
        <MessageButton />
      </div>
      <InstagramFooter />
    </div>
  );
}