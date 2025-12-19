
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import PlatformPage from './pages/PlatformPage';
import CustomersPage from './pages/CustomersPage';
import BlogPage from './pages/BlogPage';
import StaticContentPage from './pages/StaticContentPage';
import AttackHandbookPage from './pages/AttackHandbookPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            
            {/* Attack Handbook */}
            <Route path="/attack-handbook" element={<AttackHandbookPage />} />
            
            {/* Resources & Legal */}
            <Route path="/security" element={<StaticContentPage title="Enterprise Security" />} />
            <Route path="/integrations" element={<StaticContentPage title="Platform Integrations" />} />
            <Route path="/changelog" element={<StaticContentPage title="Product Changelog" />} />
            <Route path="/careers" element={<StaticContentPage title="Careers at AgileHunt" />} />
            <Route path="/press" element={<StaticContentPage title="Press Kit" />} />
            <Route path="/contact" element={<StaticContentPage title="Contact Our Team" />} />
            <Route path="/docs" element={<StaticContentPage title="Documentation" />} />
            <Route path="/api" element={<StaticContentPage title="API Reference" />} />
            <Route path="/case-studies" element={<CustomersPage />} />
            <Route path="/webinars" element={<StaticContentPage title="On-Demand Webinars" />} />
            <Route path="/security-policy" element={<StaticContentPage title="Security Policy" />} />
            <Route path="/privacy" element={<StaticContentPage title="Privacy Policy" />} />
            <Route path="/terms" element={<StaticContentPage title="Terms of Service" />} />
            <Route path="/sla" element={<StaticContentPage title="Service Level Agreement (SLA)" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;
