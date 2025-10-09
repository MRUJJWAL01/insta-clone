import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import Explore from "../pages/Explore";
import Message from "../pages/MessagePage";
import MessageLayout from "../layout/MessageLayout";
import MessagePage from "../pages/MessagePage";
import ForgotPass from "../component/authComponent/ForgotPass";
import SearchPage from "../pages/SearchPage";
import ReelsPage from "../pages/ReelsPage";
import NotificationPage from "../pages/NotificationPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../component/authComponent/RegisterPage";
import LoginPage from "../component/authComponent/LoginPage";
import ProtectedRoute from "../component/authComponent/ProtectedRoute";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
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
              path: "homepage",
              element: <HomePage />,
            },
            {
              path: "search",
              element: <SearchPage />,
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
              path: "notifications",
              element: <NotificationPage />,
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
