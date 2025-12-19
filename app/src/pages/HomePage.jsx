import React, { useState, useRef } from "react";
import FeedPost from "../component/HomeComponent/FeedPost"
// StoriesBar Component
const StoriesBar = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const stories = [
    { id: 1, username: "iittechnoc...", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=iittech", hasStory: true },
    { id: 2, username: "fitparul", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fitparul", hasStory: true },
    { id: 3, username: "swatirojha", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=swatirojha", hasStory: true },
    { id: 4, username: "abhisheksi...", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=abhishek", hasStory: true },
    { id: 5, username: "ezsnippet", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ezsnippet", hasStory: true },
    { id: 6, username: "rajput_pus...", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajput", hasStory: true },
    { id: 7, username: "codemaster", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=codemaster", hasStory: true },
    { id: 8, username: "devlife", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=devlife", hasStory: true },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="relative pl-6 lg:ml-3  py-2 overflow-hidden">
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-7 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-22 h-22 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]  transition-transform">
                <div className="w-full h-full rounded-full bg-zinc-900 p-[3px]">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-zinc-300 max-w-[70px] truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

// FeedPost Component


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

// BottomNavigation Component
const BottomNavigation = () => {
  const navItems = [
    {
      id: "home",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
      active: true
    },
    {
      id: "search",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      active: false
    },
    {
      id: "create",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      active: false
    },
    {
      id: "reels",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      active: false
    },
    {
      id: "profile",
      icon: (
        <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      active: false
    }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 z-50">
      <div className="flex items-center justify-around px-2 py-1 max-w-2xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`
              flex flex-col items-center justify-center p-2 rounded-lg
              transition-all duration-200
              ${item.active ? "text-white" : "text-zinc-400 hover:text-white"}
            `}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
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

            <div className="space-y-6">
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
      `}</style>
    </div>
  );
}