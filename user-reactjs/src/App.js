import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/index"
import Home from "./pages/Home/index"
import Cart from "./pages/Cart/index"
import SignIn from "./pages/signin/index"
import SignUp from "./pages/signup/index"
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
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Products/t/:slug" element={<ProductDetail />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
