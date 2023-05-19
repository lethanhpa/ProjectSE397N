import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/index"
import Home from "./pages/Home/index"
import Auth from "./pages/Auth/index"
import Cart from "./pages/Cart/index"
import Navigation from "../src/components/Navigation"
import FooterApp from "../src/components/FooterApp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
