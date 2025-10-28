import { IoCartOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import CartPage from "./CartPage";

const CartAndImgLogo = ({ imgAvatar, cartCount, setCartCount }) => {
  const [animate, setAnimate] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <div className="relative flex items-center gap-8">
      <div className="relative">
        <IoCartOutline
          className="text-3xl cursor-pointer text-amber-600"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />

        {cartCount > 0 && (
          <div
            className={`absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${
              animate ? "scale-125" : "scale-100"
            }`}
          >
            {cartCount}
          </div>
        )}

        {isCartOpen && (
          <div className="absolute right-0 mt-6 z-50">
            <CartPage cartCount={cartCount} setCartCount={setCartCount} />
          </div>
        )}
      </div>

      <img
        src={imgAvatar}
        alt="Avatar"
        className="w-10 h-10 rounded-full border-2 border-amber-500 cursor-pointer"
      />
    </div>
  );
};

export default CartAndImgLogo;
