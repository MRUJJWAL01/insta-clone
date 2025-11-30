import React, { useState } from "react";

export default function Notifications({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState({
    thisWeek: [
      {
        id: 1,
        username: "bhilgoan_live_",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "4d",
        hasStory: false,
      },
    ],
    thisMonth: [
      {
        id: 2,
        username: "nikhil.devhere",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Oct 06",
        hasStory: false,
      },
      {
        id: 3,
        username: "aayush93767",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Oct 04",
        hasStory: false,
      },
      {
        id: 4,
        username: "mannat__solanki_76",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Sep 21",
        hasStory: false,
      },
    ],
    earlier: [
      {
        id: 5,
        username: "mr__manjeet___",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        action: "lastminute01_ and 92 others liked your photo.",
        time: "Sep 13",
        hasStory: false,
        type: "like",
      },
      {
        id: 6,
        username: "mr__manjeet___",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Sep 13",
        hasStory: false,
      },
      {
        id: 7,
        username: "hetrajput643",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Sep 10",
        hasStory: false,
      },
      {
        id: 8,
        username: "ash.okrathod",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Sep 10",
        hasStory: true,
      },
      {
        id: 9,
        username: "_aalok_singh_",
        avatar:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
        action: "started following you.",
        time: "Sep 09",
        hasStory: false,
      },
    ],
  });

  const NotificationItem = ({ notification }) => (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 transition-colors cursor-pointer">
      {/* Avatar */}
      <div
        className={`${
          notification.hasStory
            ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-0.5 rounded-full"
            : ""
        }`}
      >
        <img
          src={notification.avatar}
          alt={notification.username}
          className="w-11 h-11 rounded-full object-cover border-2 border-black"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm">
          <span className="font-semibold">{notification.username}</span>{" "}
          <span className="text-gray-300">{notification.action}</span>{" "}
          <span className="text-gray-500">{notification.time}</span>
        </p>
      </div>

      {/* Follow Button (for follow notifications) */}
      {notification.action.includes("following") && (
        <button className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors flex-shrink-0">
          Follow
        </button>
      )}
    </div>
  );

  return (
    <div    className={`${
        isOpen ? "w-106" : "w-0"
      } bg-black rounded-2xl h-screen overflow-y-auto  overflow-hidden transition-all duration-300`} 
     >
      {/* Header */}
      <div className="sticky top-0 bg-black border-b border-gray-800 px-4 py-4 z-10">
        <h1 className="text-2xl font-semibold">Notifications</h1>
      </div>

      {/* Notifications List */}
      <div className="pb-4">
        {/* This Week */}
        {notifications.thisWeek.length > 0 && (
          <div className="mb-6">
            <h2 className="text-white font-semibold px-4 py-3 text-base">
              This week
            </h2>
            <div>
              {notifications.thisWeek.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </div>
        )}

        {/* This Month */}
        {notifications.thisMonth.length > 0 && (
          <div className="mb-6">
            <h2 className="text-white font-semibold px-4 py-3 text-base">
              This month
            </h2>
            <div>
              {notifications.thisMonth.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </div>
        )}

        {/* Earlier */}
        {notifications.earlier.length > 0 && (
          <div className="mb-6">
            <h2 className="text-white font-semibold px-4 py-3 text-base">
              Earlier
            </h2>
            <div>
              {notifications.earlier.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Link */}
      <div className="px-4 py-4 border-t border-gray-800">
        <a
          href="#"
          className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
        >
          w.instagram.com/bhilgoan_live_/
        </a>
      </div>
    </div>
  );
}
