import { MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Phone, Video, Info, Smile, Image, Heart, Mic } from "lucide-react";
import { useLocation, useParams } from "react-router";
import { io } from "socket.io-client";

export default function MessagePage() {
  const socket = io("http://localhost:5000");
  const [message, setMessage] = useState("");
  const [sendMsg, setSendMsg] = useState(null);
  const { state } = useLocation();
  const userData = state?.user;
  // console.log(userData);
  // console.log("socket-------->", socket);
  useEffect(()=>{
    if(message.trim()!== ""){
      socket.emit("chat",message);
      console.log(message);
      
    }
  },[sendMsg])

  return (
    <>
      <div className="h-screen bg-black flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <img
              src={
                userData.dp ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-white font-semibold text-sm">
                {userData.fullName}
              </h2>
              <p className="text-gray-400 text-xs">{userData.username}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Phone size={22} />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Video size={24} />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Info size={24} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 relative">
          {/* Profile Card - Moved up */}
          <div className="flex flex-col items-center text-center mb-8 -mt-32">
            <img
              src={
                userData.dp ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-white font-semibold text-xl mb-1">
              {userData.fullName}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {userData.username} · Instagram
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-2 rounded-lg font-semibold transition-colors">
              View profile
            </button>
          </div>

          {/* Centered Timestamp */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32">
            <div className="text-gray-500 text-xs text-center">
              Sep 11, 2025, 6:18 PM
            </div>
          </div>

          {/* Story Reaction - Bottom Left Corner */}
          <div className="absolute bottom-8 left-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
                alt="Small profile"
                className="w-6 h-6 rounded-full object-cover"
              />
              <Heart size={14} className="fill-red-500 text-red-500" />
              <span>Reacted to @Ujjwal Rajput's story</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="px-4 py-3 border-t border-gray-800">
          <div className="flex items-center gap-3 bg-black rounded-full px-4 py-2.5 border border-gray-700">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Smile size={24} />
            </button>

            <input
              type="text"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-#000000 text-white text-sm placeholder-[gray-500] outline-none"
            />

            {message.length > 0 ? (
              <button onClick={()=> setSendMsg(message)} className="text-blue-500 font-semibold text-sm hover:text-blue-400 transition-colors">
                Send
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Mic size={24} />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Image size={24} />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Heart size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
