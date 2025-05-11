import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Menu /> <Home />
          </>
        }
      />

      {/* <Route path="/about" element={<About />} /> */}
      {/* Add more routes here */}
    </Routes>
  );
}

export default App;
