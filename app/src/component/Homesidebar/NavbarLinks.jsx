import React, { useState } from "react";
import {
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
import { NavLink, useLocation } from "react-router";

const navLinks = [
  { label: "Home", icon: Home, to: "/home/homepage" },
  { label: "Search", icon: Search, to: "/home/search" },
  { label: "Explore", icon: Compass, to: "/home/explore" },
  { label: "Reels", icon: SquareStack, to: "/home/reels" },
  { label: "Messages", icon: Send, to: "/home/message" },
  { label: "Notifications", icon: Heart, to: "/home/notifications" },
  { label: "Create", icon: Plus, to: "/home/create" },
  { label: "Profile", icon: User, to: "/home/profile" },
];
const bottom = [
  { label: "More", icon: Menu, to: "/home/more" },
  { label: "Also from Meta", icon: LayoutGrid, to: "/home/meta" },
];

const NavbarLinks = () => {
   const location = useLocation();

 
  return (
    <>
      <div className="bg-black  w-56 h-full">
        <div className=" flex flex-col gap-2">
          {navLinks.map(({ label, icon: Icon, to,click }, idx) => (
            <NavLink 
              key={label}
              to={to}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-4 py-2  rounded-lg transition-all ${
                  to == location.pathname
                    ? " font-bold text-white  hover:bg-[#1A1A1A]"
                    : "text-zinc-200 font-medium hover:bg-[#1A1A1A] hover:text-white"
                }`
              }
            >
              <Icon
                size={28}
                strokeWidth={2}
                className={`transition-colors ${
                  idx === 0
                    ? "text-white font-bold "
                    : "text-white font-bold group-hover:text-white"
                }`}
              />
              <span>{label}</span>
              {label === "Notifications" && (
                <span className="ml-1 h-2 w-2 rounded-full bg-pink-500 inline-block" />
              )}
            </NavLink>
          ))}
        </div>
        <div className=" flex flex-col gap-2 mt-[10vw]">
          {bottom.map(({ label, icon: Icon}, idx) => (
            <NavLink
              key={label}
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
                  idx === 0
                    ? "text-white"
                    : "text-zinc-400 group-hover:text-white"
                }`}
              />
              <span>{label}</span>
              {label === "Notifications" && (
                <span className="ml-1 h-2 w-2 rounded-full bg-pink-500 inline-block" />
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarLinks;
