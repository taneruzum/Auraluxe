import Footer from "@/Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "@/lib/features/user/userSlice";

export default function MainLayout() {

  const dispatch = useDispatch();

  useEffect(() => {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      dispatch(login(JSON.parse(userSession)));
    }
  }, [dispatch]);
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className="container mx-auto min-h-full w-full max-w-screen-xl px-4 py-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
