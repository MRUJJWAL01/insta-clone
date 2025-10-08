import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    const {user,isLoggedIn} = useSelector((state)=>state.auth);
     if (!isLoggedIn || !user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />
}

export default ProtectedRoute