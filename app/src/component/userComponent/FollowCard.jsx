import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AxiosIntance } from '../../config/Axios.Intance';

const FollowCard = ({elem}) => {
  const navigate = useNavigate();
  let {user} = useSelector((state)=>state.auth);
  const [follow, setFollow] = useState(false);
  const hendleFollow = async ()=>{
    try {
      let res = await AxiosIntance.get(`/user/follow/${elem._id}`)
      if(res){
        // console.log("followed");
        setFollow(true);
      }
    } catch (error) {
      console.log("error while following user",error);
      
    }
  }
   const hendleUnFollow = async ()=>{
    try {
      let res = await AxiosIntance.get(`/user/unfollow/${elem._id}`)
      if(res){
        // console.log("unfollowed");
        setFollow(false);
      }
    } catch (error) {
      console.log("error while unfollowing user",error);
      
    }
  }
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="h-11 w-11 rounded-full border border-white overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <h1>{elem.username}</h1>
        <p>{elem.fullName}</p>
      </div>

      <div>
        { follow?(
        <button onClick={hendleUnFollow} className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-400 transition">
          
          UnFollow
        </button>):(
        <button onClick={hendleFollow} className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer hover:bg-blue-600 transition">
          Follow
        </button>)}
      </div>
    </div>
  );
}

export default FollowCard