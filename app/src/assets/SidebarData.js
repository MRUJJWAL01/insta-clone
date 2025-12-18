import {
  Bookmark,
  Moon,
  AlertCircle,
  PlusSquare,
  User,
  Menu,
  Grid3x3,
} from "lucide-react";
import {
  ActivityIcon,
  AIStudioIcon,
  explore,
  Heart,
  home,
  MetaAIIcon,
  msg,
  Plus,
  reel,
  SearchIcon,
  SettingsSvg,
  ThreadsIcon,
  WhatsAppIcon,
  profile,
} from "./Icons";
export const navItems = {
  main: [
    {
      id: "home",
      label: "Home",
      icon: home,
      showInHorizontal: true,
      to: "/home",
     
    },
    { id: "explore", label: "Explore", icon: explore, showInHorizontal: true, to: "/home/explore", },
    {
      id: "reels",
      label: "Reels",
      icon: reel,
      showInHorizontal: true,
      to: "/home/reels",
    },
    { id: "create", label: "Create", icon: PlusSquare, showInHorizontal: true },
    {
      id: "search",
      label: "Search",
      icon: SearchIcon,
      showInHorizontal: false,
    },
    {
      id: "messages",
      label: "Messages",
      icon: msg,
      badge: 0,
      showInHorizontal: true,
      to: "/home/message",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Heart,
      badge: 0,
      showInHorizontal: false,
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
      showInHorizontal: true,
      isProfile: true,
      to: "/home/profile",
    },
  ],
  bottom: [
    { id: "more", label: "More", icon: Menu },
    { id: "meta", label: "Also from Meta", icon: Grid3x3 },
  ],
};

export const SideItem = [
  { id: "home", label: "Home", icon: home, showInHorizontal: true, to: "/home" },
  {
    id: "search",
    label: "Search",
    icon: SearchIcon,
    showInHorizontal: false,
  },
  {
    id: "explore",
    label: "Explore",
    icon: explore,
    showInHorizontal: true,
    to: "/home/explore",
  },
  {
    id: "reels",
    label: "Reels",
    icon: reel,
    showInHorizontal: true,
    to: "/home/reels",
  },
  {
    id: "messages",
    label: "Messages",
    icon: msg,
    badge: 0,
    showInHorizontal: true,
    to: "/home/message",
  },
  { id: "create", label: "Create", icon: PlusSquare, showInHorizontal: true },
  {
    id: "notifications",
    label: "Notifications",
    icon: Heart,
    badge: 0,
    showInHorizontal: false,
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    showInHorizontal: true,
    isProfile: true,
    to: "/home/profile",
  },
];

export const MoreMenuItems = [
  { label: "Settings", icon: SettingsSvg },
  { label: "Your activity", icon: ActivityIcon },
  { label: "Saved", icon: Bookmark },
  { label: "Switch appearance", icon: Moon },
  { label: "Report a problem", icon: AlertCircle },
  { type: "separator" },
  { label: "Switch accounts", icon: null },
  { type: "separator" },
  { label: "Log out", icon: null },
];
export const MetaMenuItems = [
  {
    label: "Meta AI",
    icon: MetaAIIcon,
    onClick: () => console.log("Meta AI"),
  },
  {
    label: "AI Studio",
    icon: AIStudioIcon,
    onClick: () => console.log("AI Studio"),
  },
  {
    label: "Threads",
    icon: ThreadsIcon,
    onClick: () => console.log("Threads"),
  },
  {
    label: "WhatsApp",
    icon: WhatsAppIcon,
    onClick: () => console.log("WhatsApp"),
  },
];
