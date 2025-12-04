import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Landing from "./Landing";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import { CartProvider } from "./CartContext";

import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  </HashRouter>
);