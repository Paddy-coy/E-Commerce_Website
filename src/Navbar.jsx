import { useState } from "react";
import CartAndImgLogo from "./CartAndImgLogo";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = ({ cartCount, setCartCount, imgAvatar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#111] text-white flex justify-between items-center py-4 px-6 sm:px-10 z-50 shadow-md">
      {/* Logo + Menu Icon */}
      <div className="flex items-center gap-4">
        {!isMenuOpen && (
          <button
            className="lg:hidden text-3xl text-amber-500 focus:outline-none z-[60]"
            onClick={toggleMenu}
          >
            <FiMenu className="cursor-pointer"/>
          </button>
        )}
        <h1 className="text-2xl font-bold tracking-wide">Sneakers</h1>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-8 text-gray-300 text-xl font-medium">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Cart + Avatar */}
      <CartAndImgLogo
        cartCount={cartCount}
        setCartCount={setCartCount}
        imgAvatar={imgAvatar}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-[#111] flex flex-col items-start gap-6 px-8 py-10 transform transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="text-4xl text-amber-500 hover:text-amber-400 absolute top-6 right-6"
        >
          <FiX />
        </button>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 mt-14 w-full">
          {navLinks.map((link, index) => (
            <span
              key={index}
              className="text-gray-300 hover:text-amber-500 text-lg transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
