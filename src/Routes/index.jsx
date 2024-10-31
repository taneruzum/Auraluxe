import MainLayout from "@/Layouts/MainLayout";
import HomePage from "@/Pages/Home";
import { createBrowserRouter } from "react-router-dom";

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
        path: "",
        element: "",
      },
    ],
  },
]);
export default router;
