import { Outlet } from "react-router";
import Sidebar from "../component/HomeComponent/Sidebar";


const HomeLayout = () => {

  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      <aside className="fixed   h-screen z-40"
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-[#0C1014] w-full lg:ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
