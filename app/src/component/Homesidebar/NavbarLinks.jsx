import React, { useState, useRef, useEffect } from "react";
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
  Settings,
  Clock,
  Bookmark,
  Moon,
  AlertTriangle,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logOutUserApi } from "../../features/actions/AuthAction";

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

const NavbarLinks = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggedOut, setLoggedOut] = useState(false);

  // Bottom menu items with logout functionality
  const bottomMenuItems = [
    {
      label: "Switch accounts",
      divider: true,
      action: () => console.log("Switch accounts clicked"),
    },
    {
      label: "Log out",
      divider: false,
      action: () => setLoggedOut(true), // This triggers the logout
    },
  ];

  const logOutUser = async () => {
    try {
      dispatch(logOutUserApi());
      alert("User logged Out!");
    } catch (error) {
      console.log("error while user logout", error);
    }
  };

  // Close menu when clicking outside and handle logout
  useEffect(() => {
    if (loggedOut) {
      navigate("/");
      logOutUser();
    }

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
  }, [isMenuOpen, loggedOut]);

  const handleMoreClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="bg-black w-56 h-full relative">
        <div className="flex flex-col gap-2">
          {navLinks.map(({ label, icon: Icon, to }, idx) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `group flex cursor-pointer items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                  to === location.pathname
                    ? "font-bold text-white hover:bg-[#1A1A1A]"
                    : "text-zinc-200 font-medium hover:bg-[#1A1A1A] hover:text-white"
                }`
              }
            >
              <Icon
                size={28}
                strokeWidth={2}
                className={`transition-colors ${
                  idx === 0
                    ? "text-white font-bold"
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

        <div className="flex flex-col gap-2 mt-[10vw]" ref={menuRef}>
          {bottom.map(({ label, icon: Icon }, idx) => (
            <div key={label} className="relative">
              {label === "More" ? (
                <button
                  onClick={handleMoreClick}
                  className={`w-full group flex cursor-pointer items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                    isMenuOpen
                      ? "font-bold text-white bg-[#1A1A1A]"
                      : "text-zinc-200 font-medium hover:bg-[#1A1A1A] hover:text-white"
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="transition-colors text-white"
                  />
                  <span>{label}</span>
                </button>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    `group flex items-center cursor-pointer gap-4 px-4 py-2 rounded-lg transition-all ${
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
                  <span>{label}</span>
                </NavLink>
              )}

              {/* Dropdown Menu */}
              {label === "More" && isMenuOpen && (
                <div className="absolute bottom-full left-2 right-0 w-67 mb-2 py-5 bg-[#262626] rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
                  {/* Main menu items */}
                  <div className="py-1">
                    {menuItems.map((item, index) => (
                      <React.Fragment key={index}>
                        <button
                          onClick={() => handleMenuItemClick(item.action)}
                          className="w-full flex items-center cursor-pointer gap-3 px-6 py-3 hover:bg-[#3C3C3C] transition-colors text-left"
                        >
                          <item.icon className="text-white w-6 h-6" />
                          <span className="text-white text-sm">
                            {item.label}
                          </span>
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
                          className="w-full flex items-center cursor-pointer px-4 py-3 hover:bg-gray-800 transition-colors text-left"
                        >
                          <span className="text-white text-sm">
                            {item.label}
                          </span>
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
      </div>

      <style jsx="true">{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default NavbarLinks;