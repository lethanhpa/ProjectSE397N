import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/index"
import Home from "./pages/Home/index"
import Auth from "./pages/Auth/index"
import Cart from "./pages/Cart/index"
import ProductDetail from "./pages/Products/t/slug"
import Navigation from "../src/components/Navigation"
import FooterApp from "../src/components/FooterApp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products/t/:slug" element={<ProductDetail />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
