import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FloatingActions from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Technical from "./pages/Technical";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ManuFacBangalore from "./pages/manufacturers/ManuFacBangalore";
import ManuFacHyderabad from "./pages/manufacturers/ManuFacHyderabad";
import ManuFacCoimbatore from "./pages/manufacturers/ManuFacCoimbatore";
import ManuFacChennai from "./pages/manufacturers/ManuFacChennai";
import ManuFacIndia from "./pages/manufacturers/ManuFacIndia";
import UpvcVsAluminium from "./pages/comparisions/UpvcVsAluminium";
import UpvcVsWood from "./pages/comparisions/UpvcVsWood";
import UpvcProfilesForWindowFabricators from "./pages/UpvcProfilesForWindowFabricators";
import UPVCProfilesKolar from "./pages/UPVCProfilesKolar";
import EcoventIndia from "./pages/EcoventIndia";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <ScrollToTop />
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/technical/*" element={<Technical />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upvc-profiles-manufacturers-in-bangalore" element={<ManuFacBangalore />} />
          <Route path="/upvc-profiles-manufacturers-in-hyderabad" element={< ManuFacHyderabad />} />
          <Route path="/upvc-profiles-manufacturers-in-coimbatore" element={< ManuFacCoimbatore />} />
          <Route path="/upvc-profiles-manufacturers-in-chennai" element={< ManuFacChennai />} />
          <Route path="/upvc-profiles-manufacturers-in-india" element={< ManuFacIndia />} />
          
          <Route path="/upvc-vs-wood-windows" element={< UpvcVsWood />} />
          <Route path="/upvc-vs-aluminium-windows" element={< UpvcVsAluminium />} />
          <Route path="/upvc-profiles-for-window-fabricators" element={< UpvcProfilesForWindowFabricators />} />
          <Route path="/upvc-profiles-for-builders" element={< UPVCProfilesKolar />} />

          <Route path="/ecovent-upvc-windows-doors-india" element={< EcoventIndia />} />


        </Routes>
        <FloatingActions />
      </BrowserRouter>
    </div>
  );
}

export default App;
