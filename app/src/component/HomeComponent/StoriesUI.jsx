import React, { useState } from 'react';

const StoriesUI = () => {
  const [viewedStories, setViewedStories] = useState([0]);

  const stories = [
    { id: 0, username: 'adarsh_sin...', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
    { id: 1, username: 'sheryians_...', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { id: 2, username: 'dainikbhas...', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    { id: 3, username: 'jayantpate...', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { id: 4, username: 'nikhil.devh...', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { id: 5, username: 'rajarajput7...', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    { id: 6, username: 'alex_martin', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
    { id: 7, username: 'sam.cooper', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: 8, username: 'sam.cooper', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: 9, username: 'sam.cooper', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: 10, username: 'sam.cooper', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: 11, username: 'sam.cooper', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }
  ];

  const handleStoryClick = (id) => {
    if (!viewedStories.includes(id)) {
      setViewedStories([...viewedStories, id]);
    }
  };

  return (
    <div className="bg-black py-6">
      <div className="flex gap-4 overflow-x-scroll overflow-y-hidden no-scrollbar  mr-15 px-5 ">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => handleStoryClick(story.id)}
            className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer "
          >
            <div
              className={`w-[86px] h-[86px] rounded-full p-[3px] ${
                viewedStories.includes(story.id)
                  ? 'bg-[#3a3a3a]'
                  : 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]'
              }`}
            >
              <div className="w-full h-full rounded-full border-[3px] border-black bg-[#262626] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.username}
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
            <div className="text-white text-xs max-w-[86px] overflow-hidden text-ellipsis whitespace-nowrap text-center">
              {story.username}
            </div>
          </div>
          
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default StoriesUI;