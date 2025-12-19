import { Outlet } from "react-router";
import SideBar from "../component/HomeComponent/Sidebar";
import MessageButton from "../component/messages/MessageButton";

const HomeLayout = () => {

  return (
    <div className="min-h-screen w-full bg-black text-white flex">
{/* Sidebar */}
      <aside className="fixed   h-screen z-40"
      >
        <SideBar />
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-[#0C1014] w-full lg:ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
