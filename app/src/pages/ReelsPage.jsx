import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function ReelsPage() {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likes, setLikes] = useState([false, false, false]);
  const containerRef = useRef(null);

  const reels = [
    {
      id: 1,
      video: '/api/placeholder/400/700',
      username: 'apna_nathdwara_blog',
      displayName: 'Save Aravali 🌱✨',
      caption: 'Save Aravali 🌱✨ ...more',
      location: 'Aravali Hills, Rajasthan',
      audio: 'Original audio',
      likes: '514K',
      comments: '3,042',
      profilePic: '/api/placeholder/40/40'
    },
    {
      id: 2,
      video: '/api/placeholder/400/700',
      username: 'dank_kamediean',
      displayName: 'Love language 😂',
      caption: 'Ladko ko baat krni nhi aati 💔',
      location: null,
      audio: 'dank_kamediean · Original audio',
      likes: '128K',
      comments: '1,023',
      profilePic: '/api/placeholder/40/40'
    },
    {
      id: 3,
      video: '/api/placeholder/400/700',
      username: 'travel_diaries',
      displayName: 'Mountain Views 🏔️',
      caption: 'Best sunrise ever! ...more',
      location: 'Himalayas, India',
      audio: 'Trending audio',
      likes: '892K',
      comments: '5,421',
      profilePic: '/api/placeholder/40/40'
    }
  ];

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const itemHeight = window.innerHeight;
    const newIndex = Math.round(scrollTop / itemHeight);
    if (newIndex !== currentReel && newIndex < reels.length) {
      setCurrentReel(newIndex);
    }
  };

  const toggleLike = () => {
    const newLikes = [...likes];
    newLikes[currentReel] = !newLikes[currentReel];
    setLikes(newLikes);
  };

  const handleDoubleTap = (e) => {
    if (!likes[currentReel]) {
      toggleLike();
      // Create heart animation at tap position
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'absolute';
      heart.style.left = e.clientX + 'px';
      heart.style.top = e.clientY + 'px';
      heart.style.fontSize = '80px';
      heart.style.animation = 'heartPop 1s ease-out forwards';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '100';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes heartPop {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg) translateY(-100px);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .reel-item {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        
        .action-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .action-btn:active {
          transform: scale(0.85);
        }
        
        .gradient-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 20%,
            transparent 70%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
        
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
        }
        
        * {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .space-mono {
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      <div className="flex lg:ml-[42.4vw] overflow-y-scroll no-scrollbar  lg:mr-[31vw] lg:mt-8 h-screen bg-black overflow-hidden">
        

        {/* Main Reels Content */}
        <div 
          ref={containerRef}
          className="flex-1 relative overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={handleScroll}
        >
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="reel-item relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
              onDoubleClick={handleDoubleTap}
            >
              {/* Video Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 gradient-overlay pointer-events-none"></div>

              {/* Top Actions */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
                <div className="flex items-center gap-2 text-white text-shadow">
                  <span className="text-2xl font-bold space-mono">Reels</span>
                </div>
                <button className="action-btn p-2 text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
              </div>

              {/* Content Info - Bottom Left */}
              <div className="absolute bottom-20 left-0 right-20 p-6 z-10 space-y-4 text-white text-shadow">
                <div className="flex items-center gap-3">
                  <img
                    src={reel.profilePic}
                    alt={reel.username}
                    className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-pink-500"
                  />
                  <span className="font-semibold text-sm">{reel.username}</span>
                  <button className="px-4 py-1 border border-white rounded-lg text-xs font-semibold hover:bg-white hover:text-black transition-all">
                    Follow
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-light leading-relaxed">
                    {reel.caption}
                  </p>
                  {reel.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-xs">{reel.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 w-fit">
                  <Music className="w-4 h-4" />
                  <span className="text-xs font-medium">{reel.audio}</span>
                </div>
              </div>

              {/* Right Actions Bar */}
              <div className="absolute bottom-20 right-4 flex flex-col items-center gap-6 z-10">
                <button
                  onClick={toggleLike}
                  className={`action-btn flex flex-col items-center gap-1 ${
                    likes[index] ? 'text-pink-500' : 'text-white'
                  }`}
                >
                  <div className={`p-2 rounded-full ${likes[index] ? 'bg-pink-500/20' : 'bg-black/30'} backdrop-blur-sm`}>
                    <Heart
                      className={`w-7 h-7 ${likes[index] ? 'fill-current' : ''}`}
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-xs font-semibold text-shadow">{reel.likes}</span>
                </button>

                <button className="action-btn flex flex-col items-center gap-1 text-white">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
                    <MessageCircle className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-shadow">{reel.comments}</span>
                </button>

                <button className="action-btn flex flex-col items-center gap-1 text-white">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
                    <Send className="w-7 h-7" strokeWidth={2} />
                  </div>
                </button>

                <button className="action-btn flex flex-col items-center gap-1 text-white">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
                    <Bookmark className="w-7 h-7" strokeWidth={2} />
                  </div>
                </button>

                <button className="action-btn flex flex-col items-center gap-1 text-white">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
                    <MoreHorizontal className="w-7 h-7" strokeWidth={2} />
                  </div>
                </button>

                <button className="mt-4">
                  <img
                    src={reel.profilePic}
                    alt={reel.username}
                    className="w-10 h-10 rounded-lg border-2 border-white shadow-lg"
                  />
                </button>
              </div>

              {/* Playback Controls (Center) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="action-btn p-4 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 hover:opacity-100 transition-opacity"
                >
                  {isPlaying ? (
                    <Pause className="w-12 h-12" strokeWidth={2} />
                  ) : (
                    <Play className="w-12 h-12" strokeWidth={2} />
                  )}
                </button>
              </div>

              {/* Mute Toggle */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-20 right-4 action-btn p-2 rounded-full bg-black/50 backdrop-blur-md text-white z-10"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" strokeWidth={2} />
                ) : (
                  <Volume2 className="w-5 h-5" strokeWidth={2} />
                )}
              </button>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}
