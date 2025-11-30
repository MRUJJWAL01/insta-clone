import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../apis/UserApis';
import { useNavigate } from 'react-router';
import { AxiosIntance } from '../../config/Axios.Intance';
import { VerifiedIcon } from '../../assets/Icons';

const RightSideBar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [followedUsers, setFollowedUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [open, setOpen] = useState(false); // drawer state

  const fetchAllUsers = async () => {
    try {
      let res = await getAllUsers();
      if (res) setAllUsers(res.allUsers);
    } catch (err) {
      console.log('error in home all users Api', err);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleFollow = async (userId) => {
    try {
      await AxiosIntance.get(`/user/follow/${userId}`);
    } catch (err) {
      console.log('error while following user', err);
    }
    setFollowedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  return (
    <>
      {/* Mobile toggle button - visible on small screens only */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open suggestions"
      >
        Suggestions
      </button>

      {/* Desktop / large screens: normal sidebar */}
      <aside className={`hidden lg:block bg-black min-h-screen text-white py-9 px-6 pr-35 max-w-md`}>
        {/* ... your original sidebar content here (same as before) ... */}
      </aside>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* backdrop */}
          <div className="fixed inset-0 bg-black/60" onClick={() => setOpen(false)} />
          {/* drawer */}
          <div className="relative ml-auto w-[90vw] max-w-sm bg-black text-white p-6 overflow-auto">
            <button className="mb-4 text-sm text-gray-300" onClick={() => setOpen(false)}>
              Close
            </button>

            {/* replicate the same content as desktop */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img src={user.dp} alt={user.username} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 onClick={() => { navigate('/home/profile'); setOpen(false); }} className="text-sm font-semibold cursor-pointer">
                    {user.username}
                  </h3>
                  <p className="text-sm text-[#A8A8A8]">{user.fullName}</p>
                </div>
              </div>
            </div>

            <h2 className="text-sm font-semibold text-[#A3A3A3] mb-4">Suggested for you</h2>

            <div className="space-y-3">
              {allUsers.map((u) => (
                <div key={u._id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={u.dp || 'https://plus.unsplash.com/premium_photo-1728014306715-d0d06ce95155?auto=format&fit=crop&q=60&w=600'}
                      alt={u.username}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-semibold">{u.username}</h3>
                        {u.verified && <VerifiedIcon />}
                      </div>
                      <p className="text-xs text-gray-400 truncate">{u.followedBy}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleFollow(u._id)}
                    className={`text-xs font-semibold py-1.5 rounded transition-colors ${
                      followedUsers.includes(u._id) ? 'text-white' : 'text-blue-500 hover:text-blue-400'
                    }`}
                  >
                    {followedUsers.includes(u._id) ? 'Following' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 space-y-3 text-xs text-gray-500">
              {/* links... */}
              <p>© 2025 INSTAGRAM FROM META</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSideBar;
