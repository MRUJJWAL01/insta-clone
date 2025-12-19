import { Outlet } from "react-router";
import Side from "../component/HomeComponent/Side";


const HomeLayout = () => {

  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      <aside className="fixed   h-screen z-40"
      >
        <Side />
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-[#0C1014] w-full lg:ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
