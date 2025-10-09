import React, { useState, useRef, useEffect } from "react";
import {
  Instagram,
  Home,
  Search,
  Compass,
  SquareStack,
  Send,
  Heart,
  Plus,
  User,
  Menu,
  LayoutGrid,
  Settings,
  Clock,
  Bookmark,
  Moon,
  AlertTriangle,
} from "lucide-react";
import { NavLink } from "react-router";

const sidebarIcons = [
  { icon: Home, key: "home", to: "/home/homepage" },
  { icon: Search, key: "search", to: "/home/search" },
  { icon: Compass, key: "explore", to: "/home/explore" },
  { icon: SquareStack, key: "reels", to: "/home/reels" },
  { icon: Send, key: "messages", notification: 1, to: "/home/message" },
  { icon: Heart, key: "likes", to: "/home/notifications" },
  { icon: Plus, key: "create", to: "/home/create" },
  { icon: User, key: "profile", to: "/home/profile" },
];

const sidebarBottom = [
  { icon: Menu, key: "menu", to: "/home/more" },
  { icon: LayoutGrid, key: "users", to: "/home/meta" },
];

// Menu items for the dropdown
const menuItems = [
  {
    icon: Settings,
    label: "Settings",
    divider: false,
    action: () => console.log("Settings clicked"),
  },
  {
    icon: Clock,
    label: "Your activity",
    divider: false,
    action: () => console.log("Your activity clicked"),
  },
  {
    icon: Bookmark,
    label: "Saved",
    divider: false,
    action: () => console.log("Saved clicked"),
  },
  {
    icon: Moon,
    label: "Switch appearance",
    divider: false,
    action: () => console.log("Switch appearance clicked"),
  },
  {
    icon: AlertTriangle,
    label: "Report a problem",
    divider: true,
    action: () => console.log("Report a problem clicked"),
  },
];

const bottomMenuItems = [
  {
    label: "Switch accounts",
    divider: true,
    action: () => console.log("Switch accounts clicked"),
  },
  {
    label: "Log out",
    divider: false,
    action: () => console.log("Log out clicked"),
  },
];

export default function MiniNavbarLinksMapped() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMoreClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black h-screen w-16 flex flex-col items-center py-4 justify-between relative">
      {/* Instagram Logo as header */}
      <aside className="flex flex-col items-center">
        <div className="flex justify-center items-center mt-4 p-2 rounded-xl cursor-pointer hover:bg-[#1A1A1A]">
          <Instagram size={28} className="text-white" />
        </div>
        <div className="mt-13">
          <div className="flex flex-col gap-2">
            {sidebarIcons.map(({ icon: Icon, key, to }, idx) => (
              <NavLink
                key={key}
                to={to}
                className={({ isActive }) =>
                  `group flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "font-bold text-white"
                      : "text-zinc-200 font-medium hover:bg-zinc-800 hover:text-white"
                  }`
                }
              >
                <Icon
                  size={28}
                  strokeWidth={2}
                  className={`transition-colors ${
                    idx === 0
                      ? "text-white"
                      : "text-white font-bold hover:bg-[#1A1A1A] group-hover:text-white"
                  }`}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </aside>

      {/* Bottom menu icons */}
      <div className="flex flex-col gap-2" ref={menuRef}>
        {sidebarBottom.map(({ icon: Icon, key, to }, idx) => (
          <div key={key} className="relative">
            {key === "menu" ? (
              <button
                onClick={handleMoreClick}
                className={`group flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                  isMenuOpen
                    ? "font-bold text-white bg-zinc-800"
                    : "text-zinc-200 font-medium hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  className="transition-colors text-white"
                />
              </button>
            ) : (
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `group flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "font-bold text-white"
                      : "text-zinc-200 font-medium hover:bg-zinc-800 hover:text-white"
                  }`
                }
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  className={`transition-colors ${
                    idx === 0
                      ? "text-white"
                      : "text-zinc-400 group-hover:text-white"
                  }`}
                />
              </NavLink>
            )}

            {/* Dropdown Menu - appears to the right of the icon */}
            {key === "menu" && isMenuOpen && (
              <div className="fixed left-3 bottom-30 w-64 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 animate-slideIn z-50">
                {/* Main menu items */}
                <div className="py-1">
                  {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <button
                        onClick={() => handleMenuItemClick(item.action)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
                      >
                        <item.icon className="text-white w-6 h-6" />
                        <span className="text-white text-sm">{item.label}</span>
                      </button>
                      {item.divider && (
                        <div className="border-t border-gray-700 my-1"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Bottom items without icons */}
                <div className="py-1">
                  {bottomMenuItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <button
                        onClick={() => handleMenuItemClick(item.action)}
                        className="w-full flex items-center px-4 py-3 hover:bg-gray-800 transition-colors text-left"
                      >
                        <span className="text-white text-sm">{item.label}</span>
                      </button>
                      {item.divider && (
                        <div className="border-t border-gray-700 my-1"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}