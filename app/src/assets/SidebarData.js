import {
  Bookmark,
  Moon,
  AlertCircle,
} from "lucide-react";
import {
  ActivityIcon,
  AIStudioIcon,
  exp,
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
  profile
} from "./Icons";



export const NavLinks = [
  { label: "Home", icon: home, to: "/home" },
  { label: "Search", icon: SearchIcon },
  { label: "Explore", icon: exp, to: "/home/explore" },
  { label: "Reels", icon: reel, to: "/home/reels" },
  { label: "Messages", icon: msg, to: "/home/message" },
  { label: "Notifications", icon: Heart },
  { label: "Create", icon: Plus },
  { label: "Profile", icon: profile, to: "/home/profile" },
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
