import React, { useState } from "react";
import {
  Home,
  Search,
  Compass,
  SquareStack,
  MessageCircle,
  Heart,
  Plus,
  User,
  Menu,
  LayoutGrid,
} from "lucide-react";
import NavigationItem from "./NavigationItem";

const HomeSidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  // Navigation items data
  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      hasNotification: false,
    },
    {
      id: "search",
      label: "Search",
      icon: Search,
      hasNotification: false,
    },
    {
      id: "explore",
      label: "Explore",
      icon: Compass,
      hasNotification: false,
    },
    {
      id: "reels",
      label: "Reels",
      icon: SquareStack,
      hasNotification: false,
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageCircle,
      hasNotification: true,
      notificationCount: 0,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Heart,
      hasNotification: false,
      notificationCount: 0,

    },
    {
      id: "create",
      label: "Create",
      icon: Plus,
      hasNotification: false,
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
      hasNotification: false,
    },
  ];

  const bottomItems = [
    {
      id: "more",
      label: "More",
      icon: Menu,
      hasNotification: false,
    },
    {
      id: "also-from-meta",
      label: "Also from Meta",
      icon: LayoutGrid,
      hasNotification: false,
      
    },
  ];

  // Reusable Navigation Item Component

  return (
    <>
      <div className="bg-black flex flex-col h-full justify-between ">
        {/* Main Navigation */}
        <nav className="flex-1 px-3">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                isActive={activeItem === item.label}
                onClick={setActiveItem}
              />
            ))}
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="px-3 pt-35">
          <div className="space-y-1">
            {bottomItems.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                isActive={activeItem === item.label}
                onClick={setActiveItem}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSidebar;
