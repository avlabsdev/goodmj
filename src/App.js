// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import PlansPage from './components/PlansPage';
import MenuPage from './components/MenuPage';
import StrainfinderPage from './components/StrainfinderPage';
import HelpPage from './components/HelpPage';

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
