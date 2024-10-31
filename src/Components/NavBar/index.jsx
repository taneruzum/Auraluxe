import { NavLinks } from "@/Constants/navLinks";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "/logo.png";

export default function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-50 h-fit w-full bg-generalWhite shadow-md">
      <div className="mx-auto flex min-h-16 max-w-screen-2xl items-center justify-between px-4 py-2">
        <div className="relative min-w-60">
          <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-[#a3a3a3]" />
          <input
            type="text"
            name=""
            id=""
            className="w-full rounded-md border px-8 py-2 text-sm shadow outline-none"
          />
        </div>
        <figure>
          <img src={logo} alt="Auraluxe Jewelry Logo" />
        </figure>
        <section className="flex min-w-60 items-center gap-2 text-[#a3a3a3]">
          <FaUserCircle className="size-4" />
          <FaShoppingCart className="size-4" />
          <div className="flex gap-2 *:px-2 *:py-1">
            {NavLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.title}
              </a>
            ))}
          </div>
        </section>
      </div>
    </nav>
  );
}
