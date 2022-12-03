import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Edit } from "./pages/Edit";
import { Delete } from "./pages/Delete";
import { Create } from "./pages/Create";
import { Reports } from "./pages/Reports";
import { Customers } from "./pages/Customers";
import { Orders } from "./pages/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete/:id" element={<Delete />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;
