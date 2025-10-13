import MessagesSidebar from "../component/messages/MessagesSidebar";
import { Outlet } from "react-router";
import MainSideBar from "../component/HomeComponent/SideBar";
const MessageLayout = () => {
 
  return (
    <div className="h-full  ml-20 flex  ">
      <div className="h-full w-[25.5vw] ">
        <MessagesSidebar />
      </div>
      <div className="w-[69.2vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default MessageLayout;
