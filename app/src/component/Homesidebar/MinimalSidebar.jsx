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
} from "lucide-react";
import { NavLink } from "react-router";

const sidebarIcons = [
  { icon: Home, key: "home", to: "/home/homepage" },
  { icon: Search, key: "search", to: "/home/search" },
  { icon: Compass, key: "explore", to: "/home/explore" },
  { icon: SquareStack, key: "reels", to: "/home/reels" },
  { icon: Send, key: "messages", notification: 1, to: "/home/message" }, // example notification
  { icon: Heart, key: "likes", to: "/home/notifications" },
  { icon: Plus, key: "create", to: "/home/create" },
  { icon: User, key: "profile", to: "/home/profile" },
];

const sidebarBottom = [
  { icon: Menu, key: "menu" },
  { icon: LayoutGrid, key: "users" },
];

export default function MinimalSidebarMapped() {
  return (
    <div className="bg-black min-h-screen w-16 flex flex-col items-center py-4 justify-between">
      {/* Instagram Logo as header */}
      <div className="flex flex-col items-center">
        <div className="mb-25">
          <Instagram size={28} className="text-white" />
        </div>
        <div className="flex flex-col gap-6">
          {sidebarIcons.map(({ icon: Icon, key, notification, to },idx) => (
            <NavLink
              key={key}
              to={to}
              className="relative flex items-center justify-center"
            >
              <Icon
                size={28}
                className={`transition-colors ${
                  idx === 0
                    ? "text-white"
                    : "text-zinc-400 group-hover:text-white"
                }`}
              />
              {notification && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
                  {notification}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Bottom menu icons, mapped for consistency */}
      <div className="flex flex-col gap-6 pb-2">
        {sidebarBottom.map(({ icon: Icon, key }) => (
          <Icon key={key} size={26} className="text-white" />
        ))}
      </div>
    </div>
  );
}
