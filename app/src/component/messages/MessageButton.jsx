import React from "react";
import { useNavigate } from "react-router";
import { MessageSVG } from "../../assets/Icons";

const MessageButton = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate("/home/message")} className="fixed bottom-8 right-10">
      <button className="flex cursor-pointer items-center gap-3 bg-[#1D1C21] hover:bg-[#38393E] text-white px-6 py-3 rounded-full shadow-lg transition-colors relative">
        <div className="relative">
       <MessageSVG />
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
