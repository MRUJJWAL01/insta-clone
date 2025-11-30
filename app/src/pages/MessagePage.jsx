import React, { useEffect, useState, useRef, useMemo } from "react";
import { Phone, Video, Info, Smile, Image, Heart, Mic } from "lucide-react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

export default function MessagePage() {
  const { user } = useSelector((state) => state.auth);
  const { state } = useLocation();
  const chatUserData = state?.user;

  const [allMessage, setAllMessage] = useState([]);
  const [message, setMessage] = useState("");
  const [socket_id, setSocket_id] = useState(null);
  const [showNewMsgAlert, setShowNewMsgAlert] = useState(false);
  const messagesEndRef = useRef(null);
  const messageContainerRef = useRef(null);

  const socket = useMemo(() => io("https://insta-clone-d8ef.onrender.com"), [chatUserData?._id]);

  const chatUsers = {
    roomId: [user._id, chatUserData._id].sort().join("_"),
    sender_id: user._id,
    receiver_id: chatUserData._id,
    socket_id,
  };

  // ✅ Auto-scroll helper
  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  };

  // ✅ Detect if user is at bottom
  const isUserAtBottom = () => {
    const container = messageContainerRef.current;
    if (!container) return true;
    return container.scrollHeight - container.scrollTop <= container.clientHeight + 80;
  };

  // ✅ Socket setup
  useEffect(() => {
    const handleConnect = () => console.log("Socket connected");
    const handleTakeSID = (SID) => setSocket_id(SID);

    socket.on("connect", handleConnect);
    socket.on("teke_SID", handleTakeSID);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("teke_SID", handleTakeSID);
      socket.disconnect();
    };
  }, [socket]);

  // ✅ Handle receiving messages
  useEffect(() => {
    const handleReceivingMsg = (msg) => {
      setAllMessage((prev) => [...prev, { ...msg, isNew: true }]);

      // Check if user is not at bottom
      if (!isUserAtBottom()) {
        setShowNewMsgAlert(true);
      } else {
        setTimeout(() => scrollToBottom(true), 100);
      }
    };

    const handleLoadOldMsg = (messages) => {
      setAllMessage(messages);
      scrollToBottom(false);
    };

    socket.on("receive-msg", handleReceivingMsg);
    socket.on("load-old-messages", handleLoadOldMsg);

    return () => {
      socket.off("receive-msg", handleReceivingMsg);
      socket.off("load-old-messages", handleLoadOldMsg);
    };
  }, [socket]);

  // ✅ Join room
  useEffect(() => {
    if (!socket_id) return;
    socket.emit("join-room", chatUsers);
  }, [socket_id]);

  // ✅ Send message
  const handleSendMsg = () => {
    if (message.trim() === "") return;

    const newMsg = {
      sender_id: user._id,
      receiver_id: chatUserData._id,
      text: message,
      roomId: chatUsers.roomId,
    };

    socket.emit("send-msg", newMsg);
    setMessage("");
    scrollToBottom(true);
  };

  const isMessageFromCurrentUser = (msg) => msg.sender_id === user._id;

  return (
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
            <h2 className="text-white font-semibold text-sm">{chatUserData.fullName}</h2>
            <p className="text-gray-400 text-xs">{chatUserData.username}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white hover:text-gray-300">
            <Phone size={22} />
          </button>
          <button className="text-white hover:text-gray-300">
            <Video size={24} />
          </button>
          <button className="text-white hover:text-gray-300">
            <Info size={24} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div
        ref={messageContainerRef}
        onScroll={() => {
          if (isUserAtBottom()) setShowNewMsgAlert(false);
        }}
        className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth"
      >
        {allMessage.length > 0 ? (
          <div className="flex flex-col space-y-3">
            {allMessage.map((msg, index) => {
              const isCurrentUser = isMessageFromCurrentUser(msg);
              return (
                <div
                  key={index}
                  className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                      isCurrentUser ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
                    } ${msg.isNew ? "animate-pulse" : ""}`}
                  >
                    <p className="text-sm break-words">{msg.content || msg.text}</p>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        ) : (
          <p className="text-gray-500 text-center">No messages yet</p>
        )}
      </div>

      {/* 🔔 New Message Alert */}
      {showNewMsgAlert && (
        <div
          onClick={() => {
            scrollToBottom(true);
            setShowNewMsgAlert(false);
          }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm cursor-pointer shadow-lg animate-bounce"
        >
          New message ↓
        </div>
      )}

      {/* Input Area */}
      <div className="px-4 py-3 border-t border-gray-800">
        <div className="flex items-center gap-3 bg-black rounded-full px-4 py-2.5 border border-gray-700">
          <button className="text-white hover:text-gray-300">
            <Smile size={24} />
          </button>
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMsg()}
            className="flex-1 bg-black text-white text-sm placeholder-gray-500 outline-none"
          />
          {message.length > 0 ? (
            <button
              onClick={handleSendMsg}
              className="text-blue-500 font-semibold text-sm hover:text-blue-400"
            >
              Send
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button className="text-white hover:text-gray-300">
                <Mic size={24} />
              </button>
              <button className="text-white hover:text-gray-300">
                <Image size={24} />
              </button>
              <button className="text-white hover:text-gray-300">
                <Heart size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
