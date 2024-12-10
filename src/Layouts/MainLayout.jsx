import Footer from "@/Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className="py-28 min-h-full w-full container mx-auto max-w-screen-2xl px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
