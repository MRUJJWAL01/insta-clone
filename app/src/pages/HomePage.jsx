import React, { useState, useRef } from "react";
import FeedPost from "../component/HomeComponent/FeedPost"
import StoriesBar from "../component/HomeComponent/StoriesBar";

// UserProfile Component
const UserProfile = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=ujjwalchouhan"
          alt="ujjwalchouhan"
          className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-500"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">ujjwalchouhan</span>
          <span className="text-sm text-zinc-500">Ujjwal Rajput</span>
        </div>
      </div>
      <button className="text-blue-500 text-xs font-semibold hover:text-blue-400 transition-colors">
        Switch
      </button>
    </div>
  );
};

// Suggestions Component
const Suggestions = ({ suggestions }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <span className="text-sm font-semibold text-zinc-500">Suggested for you</span>
        <button className="text-xs font-semibold hover:text-zinc-300 transition-colors">
          See All
        </button>
      </div>

      <div className="space-y-3">
        {suggestions.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{user.username}</span>
                <span className="text-xs text-zinc-500 max-w-[180px] truncate">
                  {user.fullName}
                </span>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-semibold hover:text-blue-400 transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="lg:hidden sticky top-0 bg-[#0C1014] z-20 px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Instagram
        </h1>

        <div className="flex items-center gap-4">
          <button className="relative hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-semibold">
              3
            </span>
          </button>

          <button className="relative hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-semibold">
              7
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};



// Main HomePage Component
export default function HomePage() {
  const posts = [
    {
      id: 1,
      username: "gdgindore",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gdgindore",
      location: "Marriott Hotel",
      timeAgo: "20h",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop",
      likes: 12,
      caption: "Stop watching tutorials. Start building. 💻",
      comments: 5
    },
    {
      id: 2,
      username: "techdevs",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=techdevs",
      location: "Tech Hub",
      timeAgo: "5h",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
      likes: 234,
      caption: "New project launch 🚀 #webdev #coding",
      comments: 18
    },
    {
      id: 3,
      username: "designsphere",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=designsphere",
      location: "Creative Studio",
      timeAgo: "12h",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop",
      likes: 567,
      caption: "Minimalism meets functionality ✨",
      comments: 42
    }
  ];

  const suggestions = [
    {
      username: "7590anu",
      fullName: "Followed by sudhanshusingh7110",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=7590anu"
    },
    {
      username: "__abhit",
      fullName: "Followed by saurav__ + 17 more",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=abhit"
    },
    {
      username: "akshayys.07",
      fullName: "Followed by hellblaze_mohitd + ...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=akshayys"
    },
    {
      username: "ayush_bende",
      fullName: "Followed by abhay_thakur_ + 1...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ayush"
    },
    {
      username: "__k.r.i.s.h.n.a__",
      fullName: "Followed by saurav__ + 15 more",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=krishna"
    }
  ];

  return (
    <div className="min-h-screen lg:ml-60 bg-[#0C1014] text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 pt-0 lg:pt-6 pb-20 lg:pb-6">
          <div className="flex-1 max-w-[670px] mx-auto lg:mx-0 w-full">
            <div className="mb-6">
              <StoriesBar />
            </div>

            <div className=" lg:px-20">
              {posts.map((post) => (
                <FeedPost key={post.id} post={post} />
              ))}
            </div>

            <div className="flex justify-center items-center py-8">
              <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>  
          {/* right sidebar */}

          <div className="hidden lg:block  lg:ml-12 w-[320px] flex-shrink-0">
            <div className=" w-[320px] space-y-6">
              <UserProfile />
              <Suggestions suggestions={suggestions} />

              <div className="text-xs text-zinc-500 space-y-3 px-1">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="#" className="hover:text-zinc-300 transition-colors">About</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Help</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Press</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">API</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Jobs</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="#" className="hover:text-zinc-300 transition-colors">Locations</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Language</a>
                  <a href="#" className="hover:text-zinc-300 transition-colors">Meta Verified</a>
                </div>
                <p className="text-zinc-600">© 2025 INSTAGRAM FROM META</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes heartPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style> */}
    </div>
  );
}