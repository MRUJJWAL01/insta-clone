import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';

const PostContainer = () => {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [bookmarked1, setBookmarked1] = useState(false);
  const [bookmarked2, setBookmarked2] = useState(false);

  const posts = [
    {
      id: 1,
      username: 'ltgengurmitsingh',
      verified: true,
      location: 'Dehradun, Uttarakhand',
      timeAgo: '16h',
      image: '/api/placeholder/800/1000',
      likes: 31,
      caption: 'मातृभूमि की रक्षा हेतु सर्वोच्च बलिदान देने वाले वीर शहीदों को नमन..',
      comments: 1,
      liked: liked1,
      bookmarked: bookmarked1,
      type: 'news'
    },
    {
      id: 2,
      username: 'its.souravified',
      verified: false,
      location: null,
      timeAgo: '2 min',
      image: '/api/placeholder/600/800',
      likes: 34,
      caption: 'Base',
      comments: 0,
      liked: liked2,
      bookmarked: bookmarked2,
      type: 'photo'
    }
  ];

  const toggleLike = (postId) => {
    if (postId === 1) setLiked1(!liked1);
    if (postId === 2) setLiked2(!liked2);
  };

  const toggleBookmark = (postId) => {
    if (postId === 1) setBookmarked1(!bookmarked1);
    if (postId === 2) setBookmarked2(!bookmarked2);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center flex-col gap-8 p-8 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-black border border-gray-800 rounded-lg overflow-hidden max-w-md w-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {post.username[0].toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold text-sm">{post.username}</span>
                    {post.verified && (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1.5 14.5l-4-4 1.41-1.41L8.5 11.67l5.09-5.09L15 8l-6.5 6.5z"/>
                      </svg>
                    )}
                    <span className="text-gray-400 text-sm ml-1">• {post.timeAgo}</span>
                  </div>
                  {post.location && (
                    <span className="text-gray-400 text-xs">{post.location}</span>
                  )}
                </div>
              </div>
              <button className="text-white">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Image */}
            <div className="relative bg-gray-900 aspect-[4/5]">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Actions */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="hover:opacity-60 transition-opacity"
                  >
                    <Heart 
                      size={24} 
                      className={post.liked ? "fill-red-500 text-red-500" : "text-white"} 
                    />
                  </button>
                  <button className="text-white hover:opacity-60 transition-opacity">
                    <MessageCircle size={24} />
                  </button>
                  <button className="text-white hover:opacity-60 transition-opacity">
                    <Send size={24} />
                  </button>
                </div>
                <button 
                  onClick={() => toggleBookmark(post.id)}
                  className="hover:opacity-60 transition-opacity"
                >
                  <Bookmark 
                    size={24} 
                    className={post.bookmarked ? "fill-white text-white" : "text-white"} 
                  />
                </button>
              </div>

              {/* Likes */}
              <div className="mb-2">
                <span className="text-white font-semibold text-sm">{post.likes} likes</span>
              </div>

              {/* Caption */}
              <div className="mb-2">
                <span className="text-white font-semibold text-sm mr-2">{post.username}</span>
                <span className="text-white text-sm">{post.caption}</span>
              </div>

              {/* Comments */}
              {post.comments > 0 && (
                <button className="text-gray-400 text-sm mb-2 hover:text-gray-300">
                  View {post.comments} comment{post.comments !== 1 ? 's' : ''}
                </button>
              )}

              {/* Add Comment */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-800">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
                />
                <button className="text-gray-500 hover:text-gray-400">
                  <Smile size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        {posts.map((post) => (
          <div key={post.id} className="bg-black border-b overflow-auto border-gray-800 mb-4">
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">
                      {post.username[0].toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold text-xs">{post.username}</span>
                    {post.verified && (
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1.5 14.5l-4-4 1.41-1.41L8.5 11.67l5.09-5.09L15 8l-6.5 6.5z"/>
                      </svg>
                    )}
                  </div>
                  {post.location && (
                    <span className="text-gray-400 text-xs">{post.location}</span>
                  )}
                </div>
              </div>
              <button className="text-white">
                <MoreHorizontal size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="relative bg-gray-900 w-full" style={{ aspectRatio: '1/1' }}>
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Actions */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="hover:opacity-60 transition-opacity"
                  >
                    <Heart 
                      size={22} 
                      className={post.liked ? "fill-red-500 text-red-500" : "text-white"} 
                    />
                  </button>
                  <button className="text-white hover:opacity-60 transition-opacity">
                    <MessageCircle size={22} />
                  </button>
                  <button className="text-white hover:opacity-60 transition-opacity">
                    <Send size={22} />
                  </button>
                </div>
                <button 
                  onClick={() => toggleBookmark(post.id)}
                  className="hover:opacity-60 transition-opacity"
                >
                  <Bookmark 
                    size={22} 
                    className={post.bookmarked ? "fill-white text-white" : "text-white"} 
                  />
                </button>
              </div>

              {/* Likes */}
              <div className="mb-1">
                <span className="text-white font-semibold text-xs">{post.likes} likes</span>
              </div>

              {/* Caption */}
              <div className="mb-1">
                <span className="text-white font-semibold text-xs mr-1">{post.username}</span>
                <span className="text-white text-xs">{post.caption}</span>
              </div>

              {/* Time */}
              <div className="mb-2">
                <span className="text-gray-500 text-xs uppercase">{post.timeAgo} ago</span>
              </div>

              {/* Comments */}
              {post.comments > 0 && (
                <button className="text-gray-400 text-xs mb-2 hover:text-gray-300">
                  View {post.comments} comment{post.comments !== 1 ? 's' : ''}
                </button>
              )}

              {/* Add Comment */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-800">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="flex-1 bg-transparent text-white text-xs outline-none placeholder-gray-500"
                />
                <button className="text-gray-500 hover:text-gray-400">
                  <Smile size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;