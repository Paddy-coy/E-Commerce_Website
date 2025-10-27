import { useState } from "react";

const MainContent = ({ cartCount, setCartCount }) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    if (count > 0) {
      setCartCount(count);
      setMessage(`Added ${count} item${count > 1 ? "s" : ""} to cart`);
      setTimeout(() => setMessage(""), 2000);
      setCount(0);
    } else {
      setMessage("Please add at least one item");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <section className="max-w-xl flex flex-col gap-5 text-white text-center sm:text-left p-18">
      <h1 className="text-amber-600 text-lg uppercase font-bold tracking-widest">Sneaker Company</h1>
      <h2 className="font-bold text-2xl sm:text-4xl">Fall Limited Edition Sneakers</h2>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed p-2">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
        outer sole, they'll withstand everything the weather can offer.
      </p>

   
      <div className="flex items-center justify-center sm:justify-start gap-4">
        <h3 className="text-3xl font-bold">$125.00</h3>
        <span className="bg-amber-100 text-amber-600 font-bold px-2 py-1 rounded-md">50%</span>
      </div>
      <p className="text-gray-400 line-through">$250.00</p>

     
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center justify-between bg-gray-200 w-60 h-14 rounded-lg cursor-pointer">
          <button onClick={() => setCount((c) => Math.max(c - 1, 0))} className="text-amber-600 text-2xl font-bold px-3">-</button>
          <span className="text-lg font-bold text-blue-700">{count}</span>
          <button onClick={() => setCount((c) => c + 1)} className="text-amber-600 text-2xl font-bold px-3">+</button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-amber-600 w-60 sm:w-72 h-14 rounded-md text-white font-bold hover:bg-amber-700 transition-all cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

      {message && <p className="text-amber-400 mt-3">{message}</p>}
    </section>
  );
};

export default MainContent;
