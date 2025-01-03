import MainLayout from "@/Layouts/MainLayout";
import HomePage from "@/Pages/Home";
import SignInPage from "@/Pages/Sign";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "@/Pages/SignUp";
import MagazaPage from "@/Pages/Magaza";
import ProductDetailsPage from "@/Pages/ProductDetails";
import ProfilePage from "@/Pages/Profile";

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
      {
        path: "/shopping",
        element: <MagazaPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
