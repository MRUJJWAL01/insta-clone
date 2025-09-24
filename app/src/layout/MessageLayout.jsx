import React from "react";
import MessagesSidebar from "../component/messages/MessagesSidebar";
import { Outlet } from "react-router";
import MinimalSidebar from "../component/Homesidebar/MinimalSidebar";

const MessageLayout = () => {
  return (
    <div className=" h-full flex absolute top-[0%] left-[0%] w-full ">
     <MinimalSidebar />
      <div className="h-full w-[30%] bg-amber-300">
        <MessagesSidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MessageLayout;
