import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import HomeLayout from '../layout/HomeLayout'
import HomePage from '../pages/HomePage'
import Explore from '../pages/Explore'
import Message from '../pages/MessagePage'
import MessageLayout from '../layout/MessageLayout'
import MessagePage from '../pages/MessagePage'

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
                    element:<MessageLayout />,
                    children:[
                        {
                            path:"",
                            element:<MessagePage />
                        }
                    ]
                }

            ]
        }

    ])
  return <RouterProvider router={router} />
}

export default AppRouter