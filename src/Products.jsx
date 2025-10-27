

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = ({ img1,  img3, img4, img5 }) => {
  const images = [img1,  img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative flex flex-col items-center lg:items-start z-10">
     
      <div className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[380px]">
        <img
          src={images[currentIndex]}
          alt="shoe"
          className="w-full rounded-2xl cursor-pointer transition-all duration-500 hover:opacity-90 ml-2 mt-10"
          onClick={() => setIsModalOpen(true)}
        />

     
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 right-92 transform -translate-y-1/2 
                     bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 md:hidden cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute left-96 top-56  transform -translate-y-1/2 
                     bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 md:hidden w-10 h-10 cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>

     
      <figure className="hidden md:flex gap-6 mt-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumbnail-${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 rounded-lg cursor-pointer transition-all duration-300 
              ${currentIndex === index ? "opacity-60 border-2 border-amber-500" : "hover:opacity-80"}`}
          />
        ))}
      </figure>

      {/* 💡 Modal (Lightbox) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt="enlarged"
              className="w-[90vw] sm:w-[400px] md:w-[600px] rounded-xl transition-all duration-300"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-gray-300"
            >
              ×
            </button>
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-[-50px] bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-[-50px] bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
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
