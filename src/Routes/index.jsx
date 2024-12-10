import MainLayout from "@/Layouts/MainLayout";
import HomePage from "@/Pages/Home";
import SignInPage from "@/Pages/Sign";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "@/Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
