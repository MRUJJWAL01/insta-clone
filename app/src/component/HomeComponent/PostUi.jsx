import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

export default function PostUI() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const post = {
    username: 'monty_lavesh_rajput',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    timeAgo: '1h',
    image: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&h=1000&fit=crop',
    likes: 'tiwariekaansh and others',
    caption: '"अदम्य, अविजित, आजीवन स्वतंत्र।"',
    hasStory: true
  };

  return (
    <div className=" flex flex-col">
      <div className="w-full lg:max-w-[30.5vw]">
        {/* Post Header */}
        <div className="flex items-center  justify-between  py-2 ">
          <div className="flex items-center gap-3">
            <div className={`${post.hasStory ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-0.5 rounded-full' : ''}`}>
              <img
                src={post.userAvatar}
                alt={post.username}
                className="w-9 h-9 rounded-full object-cover border-2 border-black"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white text-sm font-semibold">{post.username}</span>
              <span className="text-gray-400 text-sm">• {post.timeAgo}</span>
            </div>
          </div>
          <button className="text-white hover:text-gray-300 transition-colors">
            <MoreHorizontal size={24} />
          </button>
        </div>

        {/* Post Image */}
        <div className=" w-full border z-0 border-zinc-700 rounded-xs overflow-hidden  bg-gray-900">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-full object-cover"
          />
        
          {/* Carousel indicator */}
          <div className="absolute bottom-5 right-[50%] -translate-[-50%] bg-black bg-opacity-60 px-2 py-1 rounded-full">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="transition-transform active:scale-125"
            >
              <Heart 
                size={28} 
                className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
                strokeWidth={2}
              />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <MessageCircle size={28} strokeWidth={2} />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Send size={28} strokeWidth={2} />
            </button>
          </div>
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className="transition-transform active:scale-125"
          >
            <Bookmark 
              size={28} 
              className={isSaved ? 'fill-white text-white' : 'text-white'}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Likes Count */}
        <div className=" pb-2">
          <p className="text-white text-sm">
            Liked by <span className="font-semibold">{post.likes}</span>
          </p>
        </div>

        {/* Caption */}
        <div className=" pb-3">
          <p className="text-white text-sm">
            <span className="font-semibold">{post.username}</span>{' '}
            <span className="text-white">{post.caption}</span>
          </p>
        </div>

        {/* View Comments */}
        <div className=" pb-2">
          <button className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
            View all comments
          </button>
        </div>

        {/* Add Comment */}
        <div className="flex items-center gap-2 pb-3 border-b border-gray-800">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Your avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
          />
          <button className="text-blue-500 text-sm pr-2 font-semibold hover:text-blue-400 transition-colors">
            ☺️
          </button>
        </div>
      </div>
      
    </div>
  );
}