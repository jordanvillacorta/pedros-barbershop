import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import BackToTop from './components/BackToTop';

function AppContent() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(window.innerWidth >= 1024);
  const location = useLocation();
  const showBackToTop = ['/services', '/gallery'].includes(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsNavbarOpen(false);
      } else {
        setIsNavbarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black flex">
      <Navbar isOpen={isNavbarOpen} onToggle={() => setIsNavbarOpen(!isNavbarOpen)} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isNavbarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {showBackToTop && <BackToTop />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;