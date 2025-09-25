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
  { label: "home", icon: Home, to: "/home/homepage" },
  { label: "Search", icon: Search, to: "/home/search" },
  { label: "explore", icon: Compass, to: "/home/explore" },
  { label: "Reels", icon: SquareStack, to: "/home/reels" },
  { label: "messages", icon: Send, to: "/home/message" },
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
          {bottom.map(({ label, icon: Icon, to }, idx) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                  to === location.pathname
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

// import React, { useState } from "react";
// import {
//   Home,
//   Search,
//   Compass,
//   SquareStack,
//   MessageCircle,
//   Heart,
//   Plus,
//   User,
//   Menu,
//   LayoutGrid,
// } from "lucide-react";
// import NavigationItem from "./NavigationItem";

// const NavbarLinks = () => {
//   const [activeItem, setActiveItem] = useState("home");

//   // Navigation items data
//   const navigationItems = [
//     {
//       id: "home",
//       label: "Home",
//       icon: Home,
//       hasNotification: false,
//     },
//     {
//       id: "search",
//       label: "Search",
//       icon: Search,
//       hasNotification: false,
//     },
//     {
//       id: "explore",
//       label: "Explore",
//       icon: Compass,
//       hasNotification: false,
//     },
//     {
//       id: "reels",
//       label: "Reels",
//       icon: SquareStack,
//       hasNotification: false,
//     },
//     {
//       id: "messages",
//       label: "Messages",
//       icon: MessageCircle,
//       hasNotification: true,
//       notificationCount: 0,
//     },
//     {
//       id: "notifications",
//       label: "Notifications",
//       icon: Heart,
//       hasNotification: false,
//       notificationCount: 0,

//     },
//     {
//       id: "create",
//       label: "Create",
//       icon: Plus,
//       hasNotification: false,
//     },
//     {
//       id: "profile",
//       label: "Profile",
//       icon: User,
//       hasNotification: false,
//     },
//   ];

//   const bottomItems = [
//     {
//       id: "more",
//       label: "More",
//       icon: Menu,
//       hasNotification: false,
//     },
//     {
//       id: "also-from-meta",
//       label: "Also from Meta",
//       icon: LayoutGrid,
//       hasNotification: false,

//     },
//   ];

//   // Reusable Navigation Item Component

//   return (
//     <>
//       <div className="bg-black flex flex-col h-full justify-between ">
//         {/* Main Navigation */}
//         <nav className="flex-1 px-3">
//           <div className="space-y-1">
//             {navigationItems.map((item) => (
//               <NavigationItem
//                 key={item.id}
//                 item={item}
//                 isActive={activeItem === item.label}
//                 onClick={setActiveItem}
//               />
//             ))}
//           </div>
//         </nav>

//         {/* Bottom Navigation */}
//         <div className="px-3 pt-35">
//           <div className="space-y-1">
//             {bottomItems.map((item) => (
//               <NavigationItem
//                 key={item.id}
//                 item={item}
//                 isActive={activeItem === item.label}
//                 onClick={setActiveItem}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavbarLinks;
