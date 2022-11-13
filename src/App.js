import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Reserva } from "./components/Reservas/Reservas";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="reserva" element={<Reserva />} />
      </Route>
    </Routes>
  </div>
);

export default App;
