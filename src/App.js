import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetail from "./Components/Products/ProductDetail";
import UnlogCart from "./Components/Cart/UnlogCart";
import Cart from "./Components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [IsLogin, setIsLogin] = useState();
  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin"));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product-detail" element={<ProductDetail />} />

          {/* Cart */}
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/log-cart" element={<UnlogCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
