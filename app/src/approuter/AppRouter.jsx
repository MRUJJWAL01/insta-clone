import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import HomeLayout from '../layout/HomeLayout'
import HomePage from '../pages/HomePage'
import Explore from '../pages/Explore'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout />
        },
        {
            path:"/home",
            element:<HomeLayout />,
            children:[
                {
                    path:"",
                    element:<HomePage />
                },
                {
                    path:"explore",
                    element:<Explore />
                }

            ]
        }

    ])
  return <RouterProvider router={router} />
}

export default AppRouter