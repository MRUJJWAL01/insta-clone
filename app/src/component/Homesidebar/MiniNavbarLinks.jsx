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
import NavbarLinks from "./NavbarLinks";

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
  { icon: Menu, key: "menu", to: "/home/more"  },
  { icon: LayoutGrid, key: "users", to: "/home/meta" },
];

export default function MiniNavbarLinksMapped() {
  return (
    <div className="bg-black  h-screen w-16 flex flex-col items-center py-4 justify-between">
      {/* Instagram Logo as header */}
      <aside className="flex flex-col items-center">
        <div className="flex justify-center items-center mt-4 p-2 rounded-xl cursor-pointer hover:bg-[#1A1A1A] ">
          <Instagram size={28} className="text-white " />
        </div>
        <div className="mt-13 ">
          <div className=" flex flex-col gap-2 ">
            {sidebarIcons.map(({ icon: Icon, key, to }, idx) => (
              <NavLink
                key={key}
                to={to}
                className={({ isActive }) =>
                  `group flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? " font-bold text-white"
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
      {/* Bottom menu icons, mapped for consistency */}
      <div className="flex flex-col gap-2    ">
        {sidebarBottom.map(({ icon: Icon, key, to },idx) => (
           <NavLink
              to={to}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? " font-bold text-white"
                    : "text-zinc-200 font-medium hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
          
          <Icon
            size={22}
            strokeWidth={2}
            className={`transition-colors ${
              idx === 0 ? "text-white" : "text-zinc-400 group-hover:text-white"
            }`}
          />
        </NavLink>
        ))}
      </div>
    </div>
  );
}
