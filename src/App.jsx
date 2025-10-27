import { useState } from "react";
import NavBar from "./Navbar";
import MainContent from "./MainContent";
import Products from "./Products";
import AvatarImage from "../src/assets/ecommerce-product-page-main/images/image-avatar.png";
import productImage1 from "../src/assets/ecommerce-product-page-main/images/image-product-1.jpg";
import productImage2 from "../src/assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import productImage3 from "../src/assets/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg";
import productImage4 from "../src/assets/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg";
import productImage5 from "../src/assets/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
     
      <NavBar cartCount={cartCount} setCartCount={setCartCount} imgAvatar={AvatarImage} />

   
      <main className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 mt-28 px-4 sm:px-10 lg:px-20">
        <Products
          img1={productImage1}
          img2={productImage2}
          img3={productImage3}
          img4={productImage4}
          img5={productImage5}
        />
        <MainContent cartCount={cartCount} setCartCount={setCartCount} />
      </main>
    </div>
  );
};

export default App;
