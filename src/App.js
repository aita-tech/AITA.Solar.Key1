import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SolarPanels from './components/SolarPanels';
import Benefits from './components/Benefits';
import TurnkeyProcess from './components/TurnkeyProcess';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PanelDetails from './components/PanelDetails';
import PanelsCompare from './components/PanelsCompare';

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
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Benefits />
                <TurnkeyProcess />
                <Calculator />
                <SolarPanels />
                <FAQ />
                <ContactForm />
              </>
            } />
            <Route path="/panel/:panelId" element={<PanelDetails />} />
            <Route path="/panels" element={<PanelsCompare />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
