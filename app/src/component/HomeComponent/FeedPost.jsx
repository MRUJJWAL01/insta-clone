import { useState } from "react";

 const FeedPost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  return (
    <article className="rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-3">
        <div className="flex rounded-md items-center gap-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-8 h-8 rounded-full overflow-hidden object-cover ring-2 ring-pink-500"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">{post.username}</span>
              <span className="text-zinc-500 text-xs">• {post.timeAgo}</span>
            </div>
            {post.location && (
              <span className="text-xs text-zinc-400">{post.location}</span>
            )}
          </div>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div 
        className="relative bg-black rounded-2xl cursor-pointer select-none"
        onDoubleClick={handleDoubleClick}
      >
        <img
          src={post.imageUrl}
          alt="Post content"
          className="w-full aspect-square rounded-2xl object-cover"
        />
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-24 h-24 text-white"
              style={{ animation: 'heartPop 0.6s ease-out' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="hover:opacity-70 transition-opacity">
              {liked ? (
                <svg className="w-7 h-7 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <button onClick={() => setSaved(!saved)} className="hover:opacity-70 transition-opacity">
            {saved ? (
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            )}
          </button>
        </div>

        <div className="text-sm font-semibold">
          {likesCount.toLocaleString()} likes
        </div>

        <div className="text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          <span className="text-zinc-200">
            {showFullCaption || post.caption.length <= 100
              ? post.caption
              : `${post.caption.substring(0, 100)}...`}
          </span>
          {post.caption.length > 100 && !showFullCaption && (
            <button
              onClick={() => setShowFullCaption(true)}
              className="text-zinc-500 ml-1 hover:text-zinc-300"
            >
              more
            </button>
          )}
        </div>

        {post.comments > 0 && (
          <button className="text-sm text-zinc-500 hover:text-zinc-300">
            View all {post.comments} comments
          </button>
        )}

        <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
          <button className="text-blue-500 text-sm font-semibold hover:text-blue-400 disabled:opacity-50">
            Post
          </button>
        </div>
      </div>
    </article>
  );
}; 

export default FeedPost;