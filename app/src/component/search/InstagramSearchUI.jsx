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
  X
} from "lucide-react";

const InstagramSearchUI = ({ isOpen, onClose }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`${
        isOpen ? "w-107" : "w-0"
      } bg-[#0C1014] rounded-2xl border-r border-[#363636] overflow-hidden transition-all duration-300`}
    >
      <div className="">
        <div className="border-b border-[#222222] ">
        <h2 className="text-2xl p-6 font-semibold mb-3 text-white">Search</h2>

        {/* Search Input */}
        <div className="relative mb-6 px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#363636] rounded-[8px]  py-2.5 pl-4  text-sm text-white placeholder-[#A8A8A8] outline-none"
          />
          <div className="absolute left-96 top-3 flex justify-center items-center rounded-full w-4 h-4  bg-[#C7C7C7]">
            <button
              onClick={() => setSearchQuery("")}
              className=" cursor-pointer text-black hover:text-white"
            >
              <X size={10} />
            </button>
            </div>
        
        </div>
        </div>

        {/* Recent Section */}
        <div className="p-6"> 
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Recent</h3>
          </div>

          <div className="flex items-center justify-center pt-60">
            <p className="text-[#A8A8A8] font-bold text-sm">No recent searches.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstagramSearchUI;