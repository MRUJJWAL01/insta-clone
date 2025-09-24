import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import HomeLayout from '../layout/HomeLayout'
import HomePage from '../pages/HomePage'
import Explore from '../pages/Explore'
import Message from '../pages/Message'
import MessageLayout from '../layout/MessageLayout'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/auth",
            element:<AuthLayout />
        },
        {
            path:"/home",
            element:<HomeLayout />,
            children:[
                {
                    path:"homepage",
                    element:<HomePage />
                },
                {
                    path:"explore",
                    element:<Explore />
                },
                 {
                    path:"message",
                    element:<MessageLayout />
                }

            ]
        }

    ])
  return <RouterProvider router={router} />
}

export default AppRouter