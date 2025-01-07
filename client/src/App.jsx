import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Register from "./authpages/Register";
import Login from "./authpages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
