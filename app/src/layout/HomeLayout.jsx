import React from "react";
import { Outlet } from "react-router";
import SideBar from "../component/HomeComponent/SideBar";
import MessageButton from "../component/messages/MessageButton";

const HomeLayout = () => {
  return (
    <div className="min-h-screen w-full bg-black  text-white flex">
      <aside className=" fixed border-zinc-700  ">
        <SideBar />
      </aside>
      <div className="h-full w-full">
        <Outlet />
      </div>
      
    </div>
  );
};

export default HomeLayout;
