import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PerformanceMonitor from './components/PerformanceMonitor';

// Enhanced UI components
import StickyCTA from './components/StickyCTA';
import BackToTop from './components/BackToTop';

// Lazy load heavy components
const SolarPanels = React.lazy(() => import('./components/SolarPanels'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const TurnkeyProcess = React.lazy(() => import('./components/TurnkeyProcess'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const Calculator = React.lazy(() => import('./components/Calculator'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Footer = React.lazy(() => import('./components/Footer'));
const PanelDetails = React.lazy(() => import('./components/PanelDetails'));
const PanelsCompare = React.lazy(() => import('./components/PanelsCompare'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-16 bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-yellow"></div>
    <span className="ml-3 text-brand-black">Завантаження...</span>
  </div>
);

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PerformanceMonitor />
        <ScrollToTop />
        <Header />
        <main className="bg-white">
          <Routes>
            <Route path="/" element={
              <>
                <div className="section-white">
                  <Hero />
                </div>
                <div className="section-gray-light">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Benefits />
                  </Suspense>
                </div>
                <div className="section-white">
                  <Suspense fallback={<LoadingSpinner />}>
                    <HowItWorks />
                  </Suspense>
                </div>
                <div className="section-gray-light">
                  <Suspense fallback={<LoadingSpinner />}>
                    <TurnkeyProcess />
                  </Suspense>
                </div>
                <div className="section-white">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Calculator />
                  </Suspense>
                </div>
                <div className="section-gray-light">
                  <Suspense fallback={<LoadingSpinner />}>
                    <SolarPanels />
                  </Suspense>
                </div>
                <div className="section-white">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Testimonials />
                  </Suspense>
                </div>
                <div className="section-gray-light">
                  <Suspense fallback={<LoadingSpinner />}>
                    <FAQ />
                  </Suspense>
                </div>
                <div className="section-white">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ContactForm />
                  </Suspense>
                </div>
              </>
            } />
            <Route path="/panel/:panelId" element={
              <div className="section-white min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <PanelDetails />
                </Suspense>
              </div>
            } />
            <Route path="/panels" element={
              <div className="section-white min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <PanelsCompare />
                </Suspense>
              </div>
            } />
          </Routes>
        </main>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
        
        {/* Enhanced UI Components */}
        <StickyCTA />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
