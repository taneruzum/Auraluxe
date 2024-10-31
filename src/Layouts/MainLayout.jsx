import Footer from "@/Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className="min-h-full w-full bg-red-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
