import React, { useState } from 'react'
import RegisterPage from '../component/authComponent/RegisterPage';
import LoginPage from '../component/authComponent/LoginPage';
import InstagramFooter from '../component/footer/InstagramFooter';

const AuthLayout = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <div className=' h-screen bg-black'>
        {toggle? <LoginPage setToggle={setToggle} /> : <RegisterPage setToggle={setToggle} />}
        <InstagramFooter />
        
    </div>
  )
}

export default AuthLayout