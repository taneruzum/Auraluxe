import Footer from "@/Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className="container mx-auto min-h-full w-full max-w-screen-2xl px-4 py-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
