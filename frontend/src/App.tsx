import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* Add more routes here */}
    </Routes>
  );
}

export default App;
