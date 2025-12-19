import { useRef, useState } from "react";

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
    <div className="relative pl-6 lg:ml-5  pb-2 overflow-hidden">
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-9 top-[40%] cursor-pointer -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
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
            className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-22.25 h-22.25 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.75  transition-transform">
                <div className="w-full h-full rounded-full bg-zinc-900 p-0.75">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-zinc-300 max-w-17.5 truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-5 top-[40%] cursor-pointer -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
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
};

export default StoriesBar;