import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Static Pages
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";


const HazardousWaste = lazy(() => import("./pages/HazardousWaste"));
const PlasticWaste = lazy(() => import("./pages/PlasticWaste"));
const IndustrialWaste = lazy(() => import("./pages/IndustrialWaste"));
const EWaste = lazy(() => import("./pages/EWaste"));
const RubberScrap = lazy(() => import("./pages/RubberScrap"));
const OilWaste = lazy( () => import("./pages/OilWaste"));
const Consulting = lazy(() => import("./pages/Consulting"));
const BookPickup = lazy(() => import("./pages/BookPickup"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center text-green-600 text-xl">
            Loading…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<><About /></>} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services/hazardous-waste" element={ <Suspense fallback={<div>Loading...</div>}> <HazardousWaste /> </Suspense> } />
          <Route path="/services/plastic-waste" element={<PlasticWaste />} />
          <Route path="/services/industrial-waste" element={<IndustrialWaste />} />
          <Route path="/services/e-waste" element={<EWaste />} />
           <Route path="/services/Oil-waste" element={<OilWaste />} />
          <Route path="/services/rubber-scrap" element={<RubberScrap />} />
         


          {/* Book Pickup */}
          <Route path="/request-pickup" element={<BookPickup />} />

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

       <Footer />
    </Router>
  );
}
