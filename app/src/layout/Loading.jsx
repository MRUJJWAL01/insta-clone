import React from "react";
import { InstaMiniLogo, MetaAIIcon } from "../assets/Icons";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center relative">
      
      {/* Center Logo */}
     <InstaMiniLogo />
      {/* Bottom Meta Text */}
      <div className="absolute bottom-8 flex flex-col items-center text-gray-400 text-sm">
        <span>from</span>
        <span className="flex items-center gap-1 text-pink-500 font-semibold">
          <MetaAIIcon />
          Meta
        </span>
      </div>
    </div>
  );
};

export default Loading;
