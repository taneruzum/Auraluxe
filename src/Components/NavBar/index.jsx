import { NavLinks } from '@/Constants/navLinks';
import React from 'react';
import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full h-fit  bg-green-500">
      <div className='max-w-screen-2xl mx-auto min-h-16 py-2 px-4 flex items-center justify-between'>
        <div className='relative'>
          <FaSearch className='absolute left-2 top-1/2 -translate-y-1/2 text-[#a3a3a3]' />
          <input type="text" name="" id="" className='w-full text-sm px-8 py-2 rounded-md border outline-none shadow' />
        </div>
        <figure>
          {/* <img src="" alt="" /> */}
          LOGO
        </figure>
        <div className='flex gap-3 *:px-2 *:py-1'>
          {NavLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
