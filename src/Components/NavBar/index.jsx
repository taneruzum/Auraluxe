
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // Link component'i kullanılmalı
import logo from "/logo.png";
import { useAccount } from "@/lib/features/user/hooks";
import { useEffect } from "react";
import ProfileButton from "./ProfileButton";
import BasketButton from "../BaskerDrawer";

export default function NavBar() {

  const userSession = useAccount();

  useEffect(() => {
    console.log(userSession);
  }, [userSession])

  //User Auth Control
  const isUserLoggedIn = userSession && userSession.authControl;


  return (
    <nav className="fixed left-0 top-0 z-50 h-fit w-full bg-generalWhite shadow-md">
      <div className="mx-auto flex min-h-16 max-w-screen-2xl items-center justify-between px-4 py-2">
        {/* Arama Çubuğu */}
        <div className="relative min-w-60">
          <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-[#a3a3a3]" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="w-full rounded-md border px-8 py-2 text-sm shadow outline-none"
          />
        </div>

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Auraluxe Jewelry Logo" />
        </a>

        {/* Sağ Bölüm */}
        <section className="flex items-center gap-4 text-coalBlue">
          {/* Navigasyon Linkleri */}
          <div className="flex items-center gap-4 ">
            <Link
              to={'/'}
              className="px-4 py-2 rounded-md text-sm text-coalBlue hover:text-black hover:!bg-black/5 transition-colors"
            >
              Home
            </Link>
            <Link
              to={'/shopping'}
              className="px-4 py-2 rounded-md text-sm text-coalBlue hover:text-black hover:!bg-black/5 transition-colors"
            >
              Shop
            </Link>
            {isUserLoggedIn ? (
              <>
                <ProfileButton />
              </>
            ) : (
              <Link to={'/signin'}>
                <button className="rounded-xl bg-coalBlue/80 px-4 py-2 text-sm text-white shadow hover:bg-coalBlue transition-colors ">
                  Sign in
                </button>
              </Link>
            )}
            <BasketButton />
          </div>
        </section>
      </div>
    </nav>
  );
}
