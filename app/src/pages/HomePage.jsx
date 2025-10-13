import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../apis/UserApis'
import FollowCard from '../component/HomeComponent/RigthSideBar'
import StoriesUI from '../component/HomeComponent/StoriesUI'
import RigthSideBar from '../component/HomeComponent/RigthSideBar'
import PostUI from '../component/HomeComponent/PostUi'

const HomePage = () => {
  const [allUsers, setAllUsers] = useState(null)  
  const fetchAllUsers = async()=>{
    try {
      let res = await getAllUsers();
      if(res){
        setAllUsers(res.allUsers);
      }
    } catch (error) {
      console.log("error in home all users Api",error);
    } 
  }
   useEffect(()=>{
      fetchAllUsers();
    },[])
  return (
    <div className="text-white flex ml-[24.5vw]  ">
      <div className="w-[60%] h-[100%]"> 
        <StoriesUI />
        <div className='bg-black  ml-20  '>
          <PostUI />
        </div>
      </div>

      <div className="w-[40%]">
          <RigthSideBar />    
      </div>
    </div>
  );
}

export default HomePage;