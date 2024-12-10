import { NavLinks } from "@/Constants/navLinks";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // Link component'i kullanılmalı
import logo from "/logo.png";

export default function NavBar() {
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
            className="w-full rounded-md border px-8 py-2 text-sm shadow outline-none"
          />
        </div>

        {/* Logo */}
        <figure>
          <img src={logo} alt="Auraluxe Jewelry Logo" />
        </figure>

        {/* Sağ Bölüm */}
        <section className="flex items-center gap-4 text-[#a3a3a3]">
          <FaUserCircle className="size-4" />
          <FaShoppingCart className="size-4" />

          {/* Navigasyon Linkleri */}
          <div className="flex items-center gap-4">
            {NavLinks.map((link, index) =>
              link.isButton ? (
                <Link key={index} to={link.url}>
                  <button className="rounded-xl bg-[#A3A3A3] px-4 py-2 text-sm text-white shadow hover:bg-[#696969]">
                    {link.title}
                  </button>
                </Link>
              ) : (
                <Link
                  key={index}
                  to={link.url}
                  className="px-2 py-1 text-sm text-[#a3a3a3] hover:text-black"
                >
                  {link.title}
                </Link>
              ),
            )}
          </div>
        </section>
      </div>
    </nav>
  );
}
