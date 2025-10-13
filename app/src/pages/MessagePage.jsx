import { MessageCircle } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Phone, Video, Info, Smile, Image, Heart, Mic } from "lucide-react";
import { useLocation, useParams } from "react-router";
import { io } from "socket.io-client";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function MessagePage() {
  const { user } = useSelector((state) => state.auth);
  const { state } = useLocation();
  const chatUserData = state?.user;
  const [allMessage, setAllMessage] = useState([]);
  const [message, setMessage] = useState("");
  const [socket_id, setSocket_id] = useState(null);
  const messagesEndRef = useRef(null);
  const socket = useMemo(() => io("http://localhost:5000"), [chatUserData.id]);

  let chatUsers = {
    roomId: [user._id, chatUserData._id].sort().join("_"),
    sender_id: user._id,
    receiver_id: chatUserData._id,
    socket_id,
  };

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessage]);

  useEffect(() => {
    const hendleConnect = () => {
      console.log("connceted with the socket");
    };
    const hendleTakeSID = (SID) => {
      setSocket_id(SID);
    };

    socket.on("connect", hendleConnect);
    socket.on("teke_SID", hendleTakeSID);
    console.log(allMessage);

    return () => {
      socket.off("connect", hendleConnect);
      socket.off("take_SID", hendleTakeSID);
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    const handleReceivingMsg = (msg) => {
      setAllMessage((prev) => [...prev, msg]);
    };
    const hendleLoadOldMsg = (message) => {
      setAllMessage(message);
    };
    socket.on("receive-msg", handleReceivingMsg);
    socket.on("load-old-messages", hendleLoadOldMsg);

    return () => {
      socket.off("receive-msg", handleReceivingMsg);
      socket.off("load-old-messages", hendleLoadOldMsg);
    };
  }, [socket]);

  useEffect(() => {
    if (!socket_id) return;
    socket.emit("join-room", chatUsers);
  }, [socket, socket_id]);

  const hendleSendMsg = () => {
    if (message.trim() === "") return;
    let newMsg = {
      sender_id: user._id,
      receiver_id: chatUserData._id,
      text: message,
      roomId: chatUsers.roomId,
    };

    socket.emit("send-msg", newMsg);
    setMessage("");
  };

  // Check if message is sent by current user
  const isMessageFromCurrentUser = (msg) => {
    return msg.sender_id === user._id;
  };

  return (
    <>
      <div className="h-screen bg-black flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <img
              src={
                chatUserData.dp ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-white font-semibold text-sm">
                {chatUserData.fullName}
              </h2>
              <p className="text-gray-400 text-xs">{chatUserData.username}</p>
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
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* Profile Card - Always visible at top */}
          <div className="flex flex-col items-center text-center mb-6 pt-4">
            <img
              src={
                chatUserData.dp ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
              }
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover mb-3"
            />
            <h3 className="text-white font-semibold text-lg mb-1">
              {chatUserData.fullName}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {chatUserData.username} · Instagram
            </p>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-1.5 rounded-lg text-sm font-semibold transition-colors">
              View profile
            </button>
          </div>

          {/* Centered Timestamp */}
          <div className="text-gray-500 text-xs text-center mb-6">
            Sep 11, 2025, 6:18 PM
          </div>

          {/* Messages */}
          {allMessage.length > 0 && (
            <div className="flex flex-col space-y-3">
              {allMessage.map((msg, index) => {
                const isCurrentUser = isMessageFromCurrentUser(msg);
                return (
                  <div
                    key={index}
                    className={`flex ${
                      isCurrentUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        isCurrentUser
                          ? "bg-blue-600 text-white"
                          : "bg-gray-800 text-white"
                      } px-4 py-2 rounded-2xl`}
                    >
                      <p className="text-sm break-words">{msg.text}</p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
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
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  hendleSendMsg();
                }
              }}
              className="flex-1 bg-black text-white text-sm placeholder-gray-500 outline-none"
            />

            {message.length > 0 ? (
              <button
                onClick={hendleSendMsg}
                className="text-blue-500 font-semibold text-sm hover:text-blue-400 transition-colors"
              >
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