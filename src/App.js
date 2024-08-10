import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Producto from "./pages/Producto/Producto";
import SobreNosotros from "./pages/SobreNosotros";
import Servicios from "./pages/Servicios";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;