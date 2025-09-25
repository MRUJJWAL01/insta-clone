import { useState } from "react";
import { Search, Edit2 } from "lucide-react";
import { NavLink } from "react-router";

// Dummy message data
const messages = [
  {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  },
 
];

export default function MessagesSidebar() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-black text-white w-full min-h-screen h-screen scroll-m-0.5 border-r border-zinc-800 px-[1vw] py-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 px-2 mt-5">
        <span className="font-bold text-xl cursor-pointer lowercase">nandani_yadav08</span>
        <button className="p-2 rounded hover:bg-[#121212] cursor-pointer">
          <Edit2 size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="flex bg-[#121212] rounded-md px-6 py-3 items-center">
          <Search size={18} strokeWidth={2} className="mr-5 text-[#9F9F9F]" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#121212] text-white placeholder-[#9F9F9F] text-sm w-full outline-none"
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="flex items-center gap-8 mb-5 px-2 overflow-x-auto overflow-y-auto no-scrollbar overflow-scroll ">
        {/* Your note */}
        <div className="flex flex-col items-center ">
          <div className="bg-[#F2F3F5] rounded-full  cursor-pointer w-18 h-18 flex items-center justify-center text-3xl">
            {/* Placeholder Avatar */}
            <span>👤</span>
          </div>
          <span className="mt-1 text-xs text-gray-400">Your note</span>
        </div>
        
        {/* Story Example */}
        <div className="flex flex-col cursor-pointer items-center">
          <div className="relative w-18 h-18">
            <img
              className="rounded-full w-18 h-18 object-cover"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="AAYU"
            />
            {/* Status/Story indicator, e.g. pink heart and apple emoji */}
          </div>
          <span className="mt-1 text-xs text-white">AAYU</span>
        </div>
        
       
      </div>

      {/* Messages Header */}
      <div className="flex justify-between items-center px-2 mb-3">
        <span className="font-bold text-md ">Messages</span>
        <button className="text-[#A8A8A8] cursor-pointer font-bold text-md">Requests</button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-x-auto overflow-scroll ">
        {messages.map((msg, idx) => (
          <NavLink key={idx}  className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition
            ${msg.unread ? 'bg-[##121212]' : 'hover:bg-[#121212]'}`}>
            {/* Avatar */}
            <div className="relative">
              {msg.avatar ? (
                <img src={msg.avatar} alt={msg.name} className="w-16 h-16  rounded-full object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl">👤</div>
              )}
              {/* Unread dot */}
              {msg.unread && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border border-black"></span>
              )}
            </div>
            {/* Message body */}
            <div className="ml-3 flex flex-col gap-3 min-w-0">
              <div className="text-sm font-medium text-[#F5F5F5] truncate">{msg.name}</div>
              <div className="text-xs  text-[#A8A8A8] truncate">{msg.message} <span className="text-md">{msg.time}</span> </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
