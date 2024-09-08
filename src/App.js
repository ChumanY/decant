import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Producto from "./pages/Producto/Producto";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros";
import Servicios from "./pages/Servicios/Servicios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/Inicio/Inicio";
import Premium from "./pages/Producto/Categorias/Premium/Premium";
import Standard from "./pages/Producto/Categorias/Standard/Standard";
import Business from "./pages/Producto/Categorias/Business/Business";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/producto/premium" element={<Premium />} />
        <Route path="/producto/standard" element={<Standard />} />
        <Route path="/producto/business" element={<Business />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
