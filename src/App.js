import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import PerformanceMonitor from './components/PerformanceMonitor';
import BackgroundPattern from './components/BackgroundPattern';
import AnalyticsTracker from './components/AnalyticsTracker';

// Enhanced UI components
import StickyCTA from './components/StickyCTA';
import BackToTop from './components/BackToTop';

// Lazy load heavy components
const Benefits = React.lazy(() => import('./components/Benefits'));
const TurnkeyProcess = React.lazy(() => import('./components/TurnkeyProcess'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const Calculator = React.lazy(() => import('./components/Calculator'));
const FeaturedPanels = React.lazy(() => import('./components/FeaturedPanels'));
const PanelsCatalog = React.lazy(() => import('./components/PanelsCatalog'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Footer = React.lazy(() => import('./components/Footer'));
const PanelDetails = React.lazy(() => import('./components/PanelDetails'));
const ThankYouPage = React.lazy(() => import('./components/ThankYouPage'));

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
        <BackgroundPattern />
        <PerformanceMonitor />
        <ScrollToTop />
        <AnalyticsTracker />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <div>
                  <Hero />
                  <ProblemSolution />
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Benefits />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <HowItWorks />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <TurnkeyProcess />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Calculator />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <FeaturedPanels />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Testimonials />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <FAQ />
                  </Suspense>
                </div>
                <div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <ContactForm />
                  </Suspense>
                </div>
              </>
            } />
            <Route path="/panel/:panelId" element={
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <PanelDetails />
                </Suspense>
              </div>
            } />
            <Route path="/panels" element={
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <PanelsCatalog />
                </Suspense>
              </div>
            } />
            <Route path="/thank-you" element={
              <div>
                <Suspense fallback={<LoadingSpinner />}>
                  <ThankYouPage />
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
