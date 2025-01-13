import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Register from "./authpages/Register";
import Login from "./authpages/Login";
import Sbody from "./features/shop/Sbody";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/shop" element={<Sbody />} />
      </Routes>
    </>
  );
}

export default App;
