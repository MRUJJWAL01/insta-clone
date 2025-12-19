import React, { useState, useEffect } from 'react';
import { Search, Home, Compass, Film, Send, Heart, PlusSquare, User, Menu, Play, MessageCircle, Bookmark } from 'lucide-react';

export default function Explore() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('explore');
  const [hoveredPost, setHoveredPost] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample data for posts
  const posts = [
    { id: 1, type: 'image', likes: '41.8K', comments: 188, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', size: 'large' },
    { id: 2, type: 'video', likes: '232K', comments: '1,821', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop', text: 'Algorithm?', size: 'medium' },
    { id: 3, type: 'image', likes: '89.2K', comments: 456, image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&h=500&fit=crop', size: 'tall' },
    { id: 4, type: 'video', likes: '156K', comments: 892, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop', text: "I'm bad at LeetCode", size: 'medium' },
    { id: 5, type: 'video', likes: '203K', comments: 1203, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop', text: '51gm Hi-Protein Veg Meal', size: 'large' },
    { id: 6, type: 'image', likes: '67.5K', comments: 234, image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop', size: 'tall' },
    { id: 7, type: 'video', likes: '445K', comments: 2341, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop', size: 'medium' },
    { id: 8, type: 'image', likes: '92.1K', comments: 567, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', size: 'medium' },
    { id: 9, type: 'video', likes: '178K', comments: 934, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop', size: 'medium' },
    { id: 10, type: 'image', likes: '234K', comments: 1456, image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=500&fit=crop', size: 'tall' },
    { id: 11, type: 'video', likes: '389K', comments: 2089, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop', size: 'large' },
    { id: 12, type: 'image', likes: '123K', comments: 678, image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop', size: 'medium' },
  ];

  return (
    <div className="min-h-screen bg-[#0C1014] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Bebas+Neue&display=swap');
        
        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }

        .grid-item {
          animation: fadeInUp 0.5s ease-out forwards;
          animation-delay: calc(var(--index) * 0.05s);
          opacity: 0;
        }

        .hover-scale {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hover-scale:hover {
          transform: scale(1.02);
        }

        .post-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          transition: transform 0.3s ease;
        }

        .nav-item.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .search-bar {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .search-bar:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(240, 148, 51, 0.2);
        }

        .gradient-text {
          background: linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-nav-bar {
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 4px;
          grid-auto-rows: 300px;
        }

        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
            grid-auto-rows: minmax(120px, auto);
          }
        }

        .grid-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .grid-item.tall {
          grid-row: span 2;
        }

        @media (max-width: 768px) {
          .grid-item.large {
            grid-column: span 2;
            grid-row: span 2;
          }
          
          .grid-item.tall {
            grid-row: span 2;
          }
        }

        .post-stats {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .grid-item:hover .post-stats {
          opacity: 1;
        }
      `}</style>

     
      {/* Main Content */}
      <div className={`${!isMobile ? 'ml-64' : ''} ${isMobile ? 'pb-16' : ''}`}>

          <div className="max-w-7xl mx-auto flex items-center gap-4">
            {isMobile && (
              <h1 className="text-2xl font-bold gradient-text flex-shrink-0" style={{ fontFamily: 'Bebas Neue' }}>Instagram</h1>
            )}
           <div className='w-full'></div>
            {isMobile && (
              <Heart size={28} className="flex-shrink-0" />
            )}
          </div>
      
        {/* Explore Grid */}
        <div className="max-w-7xl lg:pt-13 lg:pl-40 lg:pr-40 mx-auto p-2">
          <div className="masonry-grid">
            {posts.map((post, index) => (
              <div 
                key={post.id} 
                className={`grid-item ${post.size} relative cursor-pointer overflow-hidden bg-gray-900 hover-scale`}
                style={{ '--index': index }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img 
                  src={post.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                
                {/* Video indicator */}
                {post.type === 'video' && (
                  <div className="absolute top-3 right-3">
                    <Play size={20} fill="white" className="text-white drop-shadow-lg" />
                  </div>
                )}

                {/* Text overlay for some posts */}
                {post.text && (
                  <div className="absolute bottom-0 left-0 right-0 post-overlay p-4">
                    <p className="text-white font-bold text-lg">{post.text}</p>
                  </div>
                )}

                {/* Hover overlay with stats */}
                {!isMobile && hoveredPost === post.id && (
                  <div className="post-stats absolute inset-0 hover:bg-black/50 bg-opacity-50 flex items-center justify-center gap-8">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Heart size={24} fill="white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold">
                      <MessageCircle size={24} fill="white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </div>
  );
}