import { useEffect, useState } from "react";
import { Search, Edit2 } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { AxiosIntance } from "../../config/Axios.Intance";

export default function MessagesSidebar({ setShow }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [followings, setFollowings] = useState([]);
  const getAllFollowings = async () => {
    try {
      let res = await AxiosIntance.get("/chats/all-followings");
      if (res) {
        // console.log(res.data.allFollowing.following);
        setFollowings(res?.data?.allFollowing.following);
      }
    } catch (error) {
      console.log("error while fetching chat user", error);
    }
  };

  useEffect(() => {
    getAllFollowings();
  }, []);

  // console.log(followings);

  return (
    <div className="bg-black text-white w-full min-h-screen h-screen scroll-m-0.5 border-r border-zinc-800 pl-[1vw] py-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 px-2 mt-5">
        <span className="font-bold text-xl cursor-pointer lowercase">
          {user.username}
        </span>
        <button className="p-2 rounded hover:bg-[#121212] cursor-pointer">
          <Edit2 size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="flex bg-[#121212] rounded-md px-6 py-3 items-center">
          <Search size={18} strokeWidth={2} className="mr-5 text-[#9F9F9F]" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#121212] text-white placeholder-[#9F9F9F] text-sm w-full outline-none"
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="flex items-center gap-8 mb-5 px-2 overflow-x-auto overflow-y-auto no-scrollbar overflow-scroll ">
        {/* Your note */}
        <div className="flex flex-col items-center ">
          <div className="bg-[#F2F3F5] rounded-full  cursor-pointer w-18 h-18 flex items-center justify-center text-3xl">
            {/* Placeholder Avatar */}
            <span>👤</span>
          </div>
          <span className="mt-1 text-xs text-gray-400">Your note</span>
        </div>

        {/* Story Example */}
        <div className="flex flex-col cursor-pointer items-center">
          <div className=" w-18 h-18">
            <img
              className="rounded-full w-18 h-18 object-cover"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="AAYU"
            />
            {/* Status/Story indicator, e.g. pink heart and apple emoji */}
          </div>
          <span className="mt-1 text-xs text-white">AAYU</span>
        </div>
      </div>

      {/* Messages Header */}
      <div className="flex justify-between items-center px-2 mb-3">
        <span className="font-bold text-md ">Messages</span>
        <button className="text-[#A8A8A8] cursor-pointer font-bold text-md">
          Requests
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-x-auto overflow-scroll ">
        {followings.map((user, id) => (
          <NavLink
            to={`/home/message/chat/${id}`}
            key={id}
            state={{ user }}
            onClick={() => setShow(true)}
            className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition
            ${user.unread ? "bg-[##121212]" : "hover:bg-[#121212]"}`}
          >
            {/* image */}
            <div className="">
              <img
                src={
                  user.dp || "https://randomuser.me/api/portraits/men/10.jpg"
                }
                alt="img"
                className="w-16 h-16   rounded-full object-cover"
              />

              {/* Unread dot */}
              {user.unread && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border border-black"></span>
              )}
            </div>
            {/* Message body */}
            <div className="ml-3 flex flex-col gap-3 min-w-0">
              <div className="text-sm font-medium text-[#F5F5F5] truncate">
                {user.fullName}
              </div>
              <div className="text-xs  text-[#A8A8A8] truncate">
                {user.message} <span className="text-md">{user.time}</span>{" "}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
