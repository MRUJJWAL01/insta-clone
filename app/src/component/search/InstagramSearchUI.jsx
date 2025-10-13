import React, { useState } from "react";
import {
  Search,
  Home,
  Compass,
  Video,
  Heart,
  PlusSquare,
  Menu,
  Grid3x3,
} from "lucide-react";

const InstagramSearchUI = ({ isOpen, onClose }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`${
        isOpen ? "w-100" : "w-0"
      } bg-black border-r border-gray-800 overflow-hidden transition-all duration-300`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-white">Search</h2>

        {/* Search Input */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800/50 rounded-lg px-4 py-2.5 pl-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <svg
            className="absolute left-3 top-2.5 text-gray-500 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9l3.5-3.5a.7.7 0 011 1L11 10l3.5 3.5a.7.7 0 01-1 1L10 11l-3.5 3.5a.7.7 0 01-1-1L9 10 5.5 6.5a.7.7 0 011-1L10 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Recent Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Recent</h3>
          </div>

          <div className="flex items-center justify-center py-20">
            <p className="text-gray-500 text-sm">No recent searches.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstagramSearchUI;