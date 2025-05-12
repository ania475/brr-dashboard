import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import TicketsPage from "./pages/TicketsPage";
import TodosPage from "./pages/TodosPage";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu /> <Home />
            </>
          }
        />

        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/todos" element={<TodosPage />} />
        {/* Add more routes here */}
      </Routes>
    </DataProvider>
  );
}

export default App;
