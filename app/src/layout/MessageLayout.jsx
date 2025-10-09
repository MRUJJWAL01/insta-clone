import MessagesSidebar from "../component/messages/MessagesSidebar";
import { Outlet } from "react-router";
import MiniNavbarLinks from "../component/Homesidebar/MiniNavbarLinks";
const MessageLayout = () => {
 
  return (
    <div className=" h-full flex absolute  top-[0%] left-[0%] w-full ">
      <div className="w-[4.8%] border-r  border-zinc-800  bg-black">
        <MiniNavbarLinks />
      </div>
      <div className="h-full w-[25.9%] ">
        <MessagesSidebar />
      </div>
      <div className="w-[69.3%]">
        <Outlet />
      </div>
    </div>
  );
};

export default MessageLayout;
