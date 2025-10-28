

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = ({ img1, img2, img3, img4, img5 }) => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="relative flex flex-col items-center w-full sm:w-auto z-10">
      {/* 🖼️ Main Product Image */}
      <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[380px]">
        <img
          src={images[currentIndex]}
          alt="shoe"
          className="w-full rounded-2xl cursor-pointer transition duration-500 hover:opacity-90"
          onClick={() => setIsModalOpen(true)}
        />

        {/* ⬅️ Prev Button (mobile only) */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 
                     bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 md:hidden transition-all duration-200 cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        {/* ➡️ Next Button (mobile only) */}
        <button
          onClick={next}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 
                     bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 md:hidden transition-all duration-200 cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* 🖼️ Thumbnails (desktop only) */}
      <figure className="hidden md:flex gap-6 mt-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            onClick={() => setCurrentIndex(i)}
            className={`w-20 rounded-lg cursor-pointer transition-all duration-300 ${
              currentIndex === i
                ? "opacity-60 border-2 border-amber-500"
                : "hover:opacity-80"
            }`}
          />
        ))}
      </figure>

      {/* 🔍 Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent closing on click inside
          >
            <img
              src={images[currentIndex]}
              alt="large shoe"
              className="w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[650px] rounded-xl"
            />

            {/* ❌ Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-gray-300"
            >
              ×
            </button>

            {/* ⬅️ Prev Button */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 
                         bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-200"
            >
              <FaChevronLeft />
            </button>

            {/* ➡️ Next Button */}
            <button
              onClick={next}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 
                         bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
