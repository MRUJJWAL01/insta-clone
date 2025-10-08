import React, { useState } from 'react'
import RegisterPage from '../component/authComponent/RegisterPage';
import LoginPage from '../component/authComponent/LoginPage';
import InstagramFooter from '../component/footer/InstagramFooter';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthLayout = () => {
    const [toggle, setToggle] = useState(true);
   const { user, isLoggedIn } = useSelector((state) => state.auth);
    const navigate  =useNavigate();
    useEffect(()=>{
      if(user !== null && isLoggedIn ){
        navigate("/home");
      }

    },[user,isLoggedIn])
    
  return (
    <div className=' h-screen bg-black'>
        {toggle? <LoginPage setToggle={setToggle} /> : <RegisterPage setToggle={setToggle} />}
        <InstagramFooter />
        
    </div>
  )
}

export default AuthLayout