import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute z-10 flex min-h-[50px] w-full items-center justify-between bg-gray-700/80 text-white">
      <ul className="hidden px-4 sm:flex">
        {/* ul: Anything larger than sm, display as flex */}
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="z-10 sm:hidden">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "absolute left-0 top-0 flex h-screen w-full flex-col overflow-y-hidden bg-black/90 px-4 py-7 text-gray-300 duration-300 ease-in md:hidden"
            : "absolute left-[-100%] top-0 h-screen duration-300 ease-in"
        }
      >
        <ul className="h-full w-full pt-12 text-center">
          <li className="py-8 text-2xl">
            <a href="/">Home</a>
          </li>
          <li className="py-8 text-2xl">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="py-8 text-2xl">
            <a href="#deals">Deals</a>
          </li>
          <li className="py-8 text-2xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
