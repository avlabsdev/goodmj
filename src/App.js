// import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/Footer";
import PlansPage from "./pages/PlansPage";
import MenuPage from "./pages/MenuPage";
import StrainfinderPage from "./pages/StrainfinderPage";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/strainfinder" element={<StrainfinderPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
