import React, { useState } from 'react';
import { Search, Edit, Phone, Video, Info, Image, Mic, Smile, ChevronLeft } from 'lucide-react';

const MessageLayout = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Sample chat data
  const chats = [
    { id: 1, name: "Nandani yadav", message: "You: baby", time: "2h", avatar: "🌸", unread: false },
    { id: 2, name: "Nirmal Patel", message: "Nirmal sent an attachment.", time: "9h", avatar: "🎯", unread: false },
    { id: 3, name: "baapu hi khede...🎄🎄", message: "Prajival sent an attachment.", time: "13h", avatar: "🎄", unread: false },
    { id: 4, name: "Aditya Chouhan", message: "Acha 😊", time: "1d", avatar: "👔", unread: false },
    { id: 5, name: "Alok Singh", message: "You took a screenshot.", time: "4w", avatar: "👨", unread: false },
    { id: 6, name: "MOHIT YADAV", message: "You: 😊", time: "1d", avatar: "🎮", unread: false },
  ];

  const stories = [
    { name: "Your note", avatar: "📝" },
    { name: "Ankit Verma", song: "Dil Se Teri...", avatar: "👨‍💼" },
    { name: "😊💀💀💀💀💀...", person: "Jaymes Young", avatar: "🎵" },
    { name: "Iktara (Ur...", person: "Stone Boy M", avatar: "❤️" },
  ];

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  return (
    <div className="flex lg:ml-22 h-screen bg-black text-white">
      {/* Left Sidebar - Chat List */}
      <div className={`${isMobile && selectedChat ? 'hidden' : 'flex'} ${isMobile ? 'w-full' : 'w-96'} flex-col border-r border-gray-800`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">ujjwalxchouhan</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Edit size={24} />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-900 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Stories */}
        <div className="flex gap-3 p-4 overflow-x-auto border-b border-gray-800">
          {stories.map((story, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[64px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-2xl">
                  {story.avatar}
                </div>
              </div>
              <span className="text-xs mt-1 truncate w-16 text-center">{story.name}</span>
            </div>
          ))}
        </div>

        {/* Messages/Requests Tabs */}
        <div className="flex border-b border-gray-800">
          <button className="flex-1 py-3 text-sm font-semibold border-b border-white">
            Messages
          </button>
          <button className="flex-1 py-3 text-sm font-semibold text-gray-400">
            Requests
          </button>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-900 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0">
                {chat.avatar}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-400 ml-2">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.message}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Chat View */}
      <div className={`${isMobile && !selectedChat ? 'hidden' : 'flex'} flex-1 flex-col`}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                {isMobile && (
                  <button onClick={handleBackClick} className="mr-2">
                    <ChevronLeft size={24} />
                  </button>
                )}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                  {selectedChat.avatar}
                </div>
                <div>
                  <h2 className="font-semibold">{selectedChat.name}</h2>
                  <p className="text-xs text-gray-400">thakrekesariprasad · Instagram</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="hover:text-gray-400">
                  <Phone size={24} />
                </button>
                <button className="hover:text-gray-400">
                  <Video size={24} />
                </button>
                <button className="hover:text-gray-400">
                  <Info size={24} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-4xl mb-4">
                {selectedChat.avatar}
              </div>
              <h2 className="text-xl font-semibold mb-1">{selectedChat.name}</h2>
              <p className="text-sm text-gray-400 mb-8">thakrekesariprasad · Instagram</p>
              <p className="text-gray-400 text-sm">You're now friends. Say hi!</p>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-3 bg-gray-900 rounded-full px-4 py-2">
                <button className="hover:text-gray-400">
                  <Smile size={24} />
                </button>
                <input
                  type="text"
                  placeholder="Message..."
                  className="flex-1 bg-transparent outline-none"
                />
                <button className="hover:text-gray-400">
                  <Mic size={24} />
                </button>
                <button className="hover:text-gray-400">
                  <Image size={24} />
                </button>
                <button className="hover:text-gray-400">
                  <Smile size={24} />
                </button>
              </div>
            </div>
          </>
        ) : (
          // Empty state
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h2 className="text-2xl font-light mb-2">Your messages</h2>
            <p className="text-gray-400 text-sm mb-6">Send a message to start a chat.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
              Send message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageLayout;