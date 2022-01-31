import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import Info from "./components/Info/Info";
import PageInfo from "./pages/PageInfo/PageInfo";
import Catalog from "./pages/Catalog/Catalog";

import DeliveryPayment from "./pages/DeliveryPayment/DeliveryPayment";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/info" element={<PageInfo />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/delivery" element={<DeliveryPayment />} />
      </Routes>
    </div>
  );
}
