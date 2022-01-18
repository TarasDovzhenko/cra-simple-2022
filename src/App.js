import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import Info from "./components/Info/Info";
import PageInfo from "./pages/PageInfo/PageInfo";

export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/info" element={<PageInfo />} />
        <Route exact={true} path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
