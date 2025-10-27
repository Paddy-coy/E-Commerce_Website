const CartPage = ({ cartCount, setCartCount }) => {
  const pricePerShoe = 125;
  const totalPrice = cartCount * pricePerShoe;

  return (
    <section className="bg-white w-[90vw] sm:w-96 p-4 h-auto shadow-lg rounded-2xl text-black">
      <h1 className="p-2 font-bold text-xl sm:text-2xl">Cart</h1>
      <hr className="mb-4" />

      {cartCount === 0 ? (
        <p className="text-center mt-10 sm:mt-16 font-bold text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Fall Limited Edition Sneakers</p>
              <p className="text-gray-500">
                ${pricePerShoe} × {cartCount}{" "}
                <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
              </p>
            </div>
            <img src="https://via.placeholder.com/50" alt="shoe" className="w-12 h-12 rounded-md" />
          </div>
          <button
            onClick={() => setCartCount(0)}
            className="bg-amber-600 text-white font-bold py-2 rounded-md hover:bg-amber-700 transition-all"
          >
            Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default CartPage;
