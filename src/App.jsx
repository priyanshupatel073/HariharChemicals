import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RfqModal from './components/RfqModal';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import RouteProgressBar from './components/RouteProgressBar';
import WhatsAppIcon from './components/WhatsAppIcon';

// Dedicated Page Views
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ShadeCardPage from './pages/ShadeCardPage';
import PlantPage from './pages/PlantPage';
import QualityPage from './pages/QualityPage';
import ApplicationsPage from './pages/ApplicationsPage';
import DyeingGuidePage from './pages/DyeingGuidePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState(null);

  const handleOpenRfq = (product = null) => {
    setPreselectedProduct(product);
    setRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqModalOpen(false);
    setPreselectedProduct(null);
  };

  return (
    <BrowserRouter>
      {/* 1. Molecular Chemical Preloader */}
      <Preloader />

      {/* 2. Top Route Progress Bar for Instant Feedback */}
      <RouteProgressBar />

      {/* 3. Scroll Restoration & Floating Back to Top Button */}
      <ScrollToTop />

      <div
        className="app-root"
        style={{
          minHeight: '100vh',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Global Glassmorphism Navigation Header */}
        <Navbar onOpenRfq={() => handleOpenRfq()} />

        {/* Dynamic Route View Content */}
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<HomePage onOpenRfq={handleOpenRfq} />} />

            {/* 2. Products Catalog */}
            <Route path="/products" element={<ProductsPage onOpenRfq={handleOpenRfq} />} />

            {/* 3. Interactive Shade Card Matrix */}
            <Route path="/shade-card" element={<ShadeCardPage onOpenRfq={handleOpenRfq} />} />

            {/* 4. Manufacturing Plant Suites */}
            <Route path="/plant" element={<PlantPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/manufacturing" element={<PlantPage onOpenRfq={handleOpenRfq} />} />

            {/* 5. Quality Control & Analytical Laboratory */}
            <Route path="/quality" element={<QualityPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/quality-control" element={<QualityPage onOpenRfq={handleOpenRfq} />} />

            {/* 6. Industrial Applications */}
            <Route path="/applications" element={<ApplicationsPage onOpenRfq={handleOpenRfq} />} />

            {/* 7. Technical Dyeing & Diazotisation Guide */}
            <Route path="/dyeing-process" element={<DyeingGuidePage onOpenRfq={handleOpenRfq} />} />

            {/* 8. Corporate Profile & Heritage */}
            <Route path="/about" element={<AboutPage onOpenRfq={handleOpenRfq} />} />

            {/* 9. Direct Contact & Factory Location */}
            <Route path="/contact" element={<ContactPage onOpenRfq={handleOpenRfq} />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage onOpenRfq={handleOpenRfq} />} />
          </Routes>
        </main>

        {/* Global Industrial Footer */}
        <Footer onOpenRfq={() => handleOpenRfq()} />

        {/* Floating WhatsApp Quick Action Button */}
        <a
          href="https://wa.me/917041779000?text=Hello%20Harihar%20Chemicals,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20Naphthols%20and%20Fast%20Bases."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Direct WhatsApp with Director"
          title="Direct WhatsApp with Director (+91 70417 79000)"
        >
          <WhatsAppIcon size={30} color="#FFFFFF" />
        </a>

        {/* Global Multi-Step RFQ Modal */}
        <RfqModal
          isOpen={rfqModalOpen}
          onClose={handleCloseRfq}
          preselectedProduct={preselectedProduct}
        />
      </div>
    </BrowserRouter>
  );
}

