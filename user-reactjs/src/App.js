import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/index"
import Home from "./pages/Home/index"
import Auth from "./pages/Auth/index"
import Navigation from "../src/components/Navigation"
import FooterApp from "../src/components/FooterApp"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
        </Routes>
        <FooterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
