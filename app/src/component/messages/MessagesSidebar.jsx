import { useState } from "react";
import { Search, Edit2 } from "lucide-react";

// Dummy message data
const messages = [
  {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "salonii 💜🕊️",
    message: "salonii sent an attachment.",
    time: "5h",
    unread: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "neha.yadav1251",
    message: "neha.yadav1251 sent an attachment.",
    time: "2d",
    unread: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "pooja ydv",
    message: "pooja sent an attachment.",
    time: "5d",
    unread: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "MR DHURV ××",
    message: "MR sent an attachment.",
    time: "1w",
    unread: false,
  },
  {
    avatar: "",
    name: "Nandani yadav",
    message: "You sent an attachment.",
    time: "1w",
    unread: false,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Tanisaa....🌑✨",
    message: "",
    time: "",
    unread: false,
  },
   {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  }, {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  }, {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  }, {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  }, {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  }, {
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Ujjwal Rajput",
    message: "You sent an attachment.",
    time: "1h",
    unread: false,
  }, {
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
    <div className="bg-black text-white w-full min-h-screen h-screen scroll-m-0.5 border-r border-l border-zinc-800 px-4 py-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-xl">nandani_yadav08</span>
        <button className="p-2 rounded hover:bg-gray-800">
          <Edit2 size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="flex bg-gray-900 rounded px-2 py-2 items-center">
          <Search size={18} strokeWidth={2} className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 text-white placeholder-gray-400 text-sm w-full outline-none"
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="flex items-center gap-4 mb-3">
        {/* Your note */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center text-3xl">
            {/* Placeholder Avatar */}
            <span>👤</span>
          </div>
          <span className="mt-1 text-xs text-gray-400">Your note</span>
        </div>
        {/* Story Example */}
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <img
              className="rounded-full w-14 h-14 object-cover"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="AAYU"
            />
            {/* Status/Story indicator, e.g. pink heart and apple emoji */}
          </div>
          <span className="mt-1 text-xs text-gray-400">💖AAYU🍏</span>
        </div>
      </div>

      {/* Messages Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">Messages</span>
        <button className="text-blue-500 text-sm">Requests</button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-x-auto overflow-scroll ">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition
            ${msg.unread ? 'bg-gray-900' : 'hover:bg-gray-800'}`}>
            {/* Avatar */}
            <div className="relative">
              {msg.avatar ? (
                <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-2xl">👤</div>
              )}
              {/* Unread dot */}
              {msg.unread && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border border-black"></span>
              )}
            </div>
            {/* Message body */}
            <div className="ml-3 flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{msg.name}</div>
              <div className="text-xs text-gray-400 truncate">{msg.message}</div>
            </div>
            {/* Time */}
            <div className="ml-2 text-xs text-gray-500 whitespace-nowrap">{msg.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
