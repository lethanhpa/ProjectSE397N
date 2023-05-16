import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products/index"
import Home from "./pages/Home/index"
import Login from "./pages/Auth/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;
