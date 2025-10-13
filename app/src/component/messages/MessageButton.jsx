import React from "react";
import { useNavigate } from "react-router";

const MessageButton = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate("/home/message")} className="fixed bottom-8 right-10">
      <button className="flex cursor-pointer items-center gap-3 bg-[#1D1C21] hover:bg-[#38393E] text-white px-6 py-3 rounded-full shadow-lg transition-colors relative">
        <div className="relative">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            1
          </div>
        </div>
        <span className="font-semibold">Messages</span>
      </button>
    </div>
  );
};

export default MessageButton;
