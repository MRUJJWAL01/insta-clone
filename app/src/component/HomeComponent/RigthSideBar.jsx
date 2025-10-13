import React, { useState } from 'react';

const RigthSideBar = () => {
  const [followedUsers, setFollowedUsers] = useState([]);

  const currentUser = {
    username: 'ujwalxchouhan',
    fullName: 'Ujjwal Rajput',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  };

  const suggestions = [
    {
      id: 1,
      username: 'suyesh3766',
      followedBy: 'Followed by aayush93767 + 2 ...',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      username: 'instagram',
      followedBy: 'Followed by hedayatkhan13f28 ...',
      avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop',
      verified: true
    },
    {
      id: 3,
      username: 'suyesh087',
      followedBy: 'Followed by aayush93767 + 8 ...',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      username: 'manisharather95',
      followedBy: 'Followed by neerajyadav1733',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      username: 'mathankar511',
      followedBy: 'Followed by surendra_jhapate0...',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  ];

  const handleFollow = (userId) => {
    if (followedUsers.includes(userId)) {
      setFollowedUsers(followedUsers.filter(id => id !== userId));
    } else {
      setFollowedUsers([...followedUsers, userId]);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white  py-9 px-6  pr-35 max-w-md">
      {/* Current User Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{currentUser.username}</h3>
            <p className="text-sm text-gray-400">{currentUser.fullName}</p>
          </div>
        </div>
        <button className="text-blue-500 text-xs cursor-pointer font-semibold hover:text-blue-400">
          Switch
        </button>
      </div>

      {/* Suggested for you Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-400">Suggested for you</h2>
        <button className="text-white text-xs font-semibold cursor-pointer hover:text-gray-300">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold">{user.username}</h3>
                  {user.verified && (
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                </div>
                <p className="text-xs text-gray-400 truncate">{user.followedBy}</p>
              </div>
            </div>
            <button
              onClick={() => handleFollow(user.id)}
              className={`text-xs font-semibold cursor-pointer  py-1.5 rounded transition-colors ${
                followedUsers.includes(user.id)
                  ? 'text-white'
                  : 'text-blue-500 hover:text-blue-400'
              }`}
            >
              {followedUsers.includes(user.id) ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-8 space-y-3">
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-500">
          <a href="#" className="hover:underline">About</a>
          <span>·</span>
          <a href="#" className="hover:underline">Help</a>
          <span>·</span>
          <a href="#" className="hover:underline">Press</a>
          <span>·</span>
          <a href="#" className="hover:underline">API</a>
          <span>·</span>
          <a href="#" className="hover:underline">Jobs</a>
          <span>·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-500">
          <a href="#" className="hover:underline">Locations</a>
          <span>·</span>
          <a href="#" className="hover:underline">Language</a>
          <span>·</span>
          <a href="#" className="hover:underline">Meta Verified</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">© 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default RigthSideBar;











// import React, { useState } from 'react'
// import { AxiosIntance } from '../../config/Axios.Intance';

// const FollowCard = ({elem}) => {
//   const [follow, setFollow] = useState(false);
//   const hendleFollow = async ()=>{
//     try {
//       let res = await AxiosIntance.get(`/user/follow/${elem._id}`)
//       if(res){
//         // console.log("followed");
//         setFollow(true);
//       }
//     } catch (error) {
//       console.log("error while following user",error);
      
//     }
//   }
//    const hendleUnFollow = async ()=>{
//     try {
//       let res = await AxiosIntance.get(`/user/unfollow/${elem._id}`)
//       if(res){
//         // console.log("unfollowed");
//         setFollow(false);
//       }
//     } catch (error) {
//       console.log("error while unfollowing user",error);
      
//     }
//   }
//   return (
//     <div className="flex justify-between items-center gap-4">
//       <div className="h-11 w-11 rounded-full border border-white overflow-hidden">
//         <img
//           className="h-full w-full object-cover"
//           src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//       </div>
//       <div>
//         <h1>{elem.username}</h1>
//         <p>{elem.fullName}</p>
//       </div>

//       <div>
//         { follow?(
//         <button onClick={hendleUnFollow} className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-400 transition">
          
//           UnFollow
//         </button>):(
//         <button onClick={hendleFollow} className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer hover:bg-blue-600 transition">
//           Follow
//         </button>)}
//       </div>
//     </div>
//   );
// }

// export default FollowCard