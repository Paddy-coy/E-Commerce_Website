import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import CartAndImgLogo from "./CartAndImgLogo";
import AvatarImage from "../src/assets/ecommerce-product-page-main/images/image-avatar.png";

const NavBar = ({ cartCount, setCartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "power3.out" });
      gsap.to(overlayRef.current, {
        opacity: 0.5,
        duration: 0.6,
        pointerEvents: "auto",
      });
    } else {
      // ✅ Fixed overflow: use -100vw instead of -100%
      gsap.to(menuRef.current, { x: "-100vw", duration: 0.6, ease: "power3.in" });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg m-0 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-3">
        
        <div className="flex items-center gap-4">
          <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <h1 className="font-bold text-3xl font-mono text-white">Sneakers</h1>
        </div>

        
        <div className="hidden md:flex gap-10 text-lg">
          <a href="#" className="hover:text-amber-500 transition-colors">Collections</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Men</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Women</a>
          <a href="#" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>

        
        <CartAndImgLogo imgAvatar={AvatarImage} cartCount={cartCount} setCartCount={setCartCount} />
      </div>

      
      <div
        ref={overlayRef}
        onClick={toggleMenu}
        className="fixed inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-500 md:hidden"
      ></div>

      
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-2/3 bg-gray-900 text-white flex flex-col gap-6 px-6 py-12 -translate-x-full md:hidden z-[55]"
      >
        <a href="#" onClick={toggleMenu}>Collections</a>
        <a href="#" onClick={toggleMenu}>Men</a>
        <a href="#" onClick={toggleMenu}>Women</a>
        <a href="#" onClick={toggleMenu}>About</a>
        <a href="#" onClick={toggleMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
