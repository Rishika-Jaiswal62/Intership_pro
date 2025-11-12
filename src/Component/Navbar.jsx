
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // detect which page user is on
  const isContactPage = location.pathname === "/contact";

  // dynamic navbar style
  const navStyle = isContactPage
    ? "bg-transparent text-white"
    : "bg-transparent text-white";

  return (
    <header
      className={`w-full absolute top-0 left-0 flex flex-wrap  items-center  justify-between sm:justify-between md:justify-evenly sm:px-10 md:w-full  py-8 z-50 transition-all duration-300  ${navStyle}`}
    >
      {/* Logo */}
      <span className="logo font-bold text-xl sm:items-start  w-[100px] h-[100px] flex px-4">Kingsukh Guest House</span>

      {/* Hamburger button for mobile */}

      <button
        onClick={() => setMenuOpen((s) => !s)}
        className="md:hidden text-2xl relative z-50  p-1 "
        aria-label="toggle menu"
      >
        {menuOpen ? <FaTimes className="border border-dotted border-gray-300 text-2xl" /> : <FaBars className="border border-dotted border-gray-300 text-2xl" />}
      </button>


      {/* Navbar Links */}

      <nav
        className={`
    ${menuOpen ? "block bg-blue-500 " : "hidden bg-inherit"}
    absolute md:static top-14 left-0 w-full md:w-auto 
    text-center md:flex md:items-center md:mx-0 transition-all duration-300
  `}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 py-4 md:py-0 ">
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#room">Room</a>
          </li>
          <li>
            <a href="#servies">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <Link
              to="/contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Icons & Book Now (desktop only) */}
      <div className="hidden md:flex items-center gap-8">
        <FaSearch className="text-lg cursor-pointer" />
        <FaHeart className="text-lg cursor-pointer" />
        <button className="bg-blue-500 text-white px-4 md:px-2 py-2 rounded">
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;



