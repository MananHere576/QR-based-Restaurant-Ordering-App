import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import OrderPage from "./Components/OrderPage";
import MenuPage from "./Components/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order/:tableId" element={<OrderPage />} />
        <Route path="/menu/:tableId" element={<MenuPage />} />
        {/* <Route path="/cart/:tableId" element={<CartPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
