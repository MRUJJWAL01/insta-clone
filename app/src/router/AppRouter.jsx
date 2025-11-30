import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import Explore from "../pages/Explore";
import MessageLayout from "../layout/MessageLayout";
import MessagePage from "../pages/MessagePage";
import ForgotPass from "../component/authComponent/ForgotPass";
import ReelsPage from "../pages/ReelsPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../component/authComponent/LoginPage";
import ProtectedRoute from "../component/authComponent/ProtectedRoute";

const AppRouter = () => {
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPass />,
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "reels",
              element: <ReelsPage />,
            },
            {
              path: "explore",
              element: <Explore />,
            },
            {
              path: "profile",
              element: <ProfilePage />,
            },
            {
              path: "message",
              element: <MessageLayout />,
              children: [
                {
                  path: "chat/:id",
                  element: <MessagePage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
