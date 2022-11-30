import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Edit } from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;