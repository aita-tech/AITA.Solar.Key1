import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import MobileNavToggle from './MobileNavToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const handleNavigationClick = (sectionId) => {
    setIsMenuOpen(false);

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300); // Increased timeout for better reliability
    }
  };

  const scrollToSection = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Found element:`, element);
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.offsetTop - headerHeight;
      
      console.log(`Scrolling to position: ${Math.max(0, elementPosition)}`);
      
      window.scrollTo({
        top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
      console.log('Available elements with IDs:', 
        Array.from(document.querySelectorAll('[id]')).map(el => el.id)
      );
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Переваги', id: 'benefits' },
    { label: 'Проблема та рішення', id: 'problem-solution' },
    { label: 'Як це працює', id: 'turnkey-process' },
    { label: 'Калькулятор', id: 'calculator' },
    { label: 'Сонячні панелі', id: 'solar-panels' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Контакти', id: 'contact' },
    { label: 'Порівняння панелей', id: 'panels', isLink: true }
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        
        {/* 1) LEFT: Logo */}
        <div className="flex-none">
          <Link 
            to="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg"
            onClick={scrollToTop}
          >
            <img 
              src="/logo.png" 
              alt="AITA Solar" 
              className="h-10 w-auto" 
            />
            <span className="ml-2 text-xl font-bold text-gray-900">AITA Solar</span>
          </Link>
        </div>

        {/* 2) CENTER: Menu Links */}
        <ul className="flex-1 flex justify-center space-x-8">
          {menuItems.map(item => (
            <li key={item.label} className="hidden lg:block">
              {item.isLink ? (
                <Link
                  to="/panels"
                  className="text-gray-700 hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-2 py-1"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavigationClick(item.id)}
                  className="text-gray-700 hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-2 py-1"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* 3) RIGHT: Phone + CTA */}
        <div className="flex-none flex items-center space-x-4">
          {/* Phone number - hidden on mobile and small tablets */}
          <a
            href="tel:+380736369500"
            className="hidden md:flex items-center text-gray-700 hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-2 py-1"
          >
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +380 73 636 95 00
          </a>
          
          {/* CTA Button - hidden on mobile */}
          <button
            onClick={() => handleNavigationClick('contact')}
            className="hidden sm:inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-700 font-medium"
          >
            Отримати консультацію
          </button>
          
          {/* Mobile Menu Button - only visible on mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            aria-label="Toggle main menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {!isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <nav className="px-4 pt-2 pb-3 space-y-1">
            <ul className="list-none space-y-1">
              {menuItems.map(item => (
                <li key={item.label}>
                  {item.isLink ? (
                    <Link
                      to="/panels"
                      className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigationClick(item.id)}
                      className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile Contact Section */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <a 
                href="tel:+380736369500"
                className="flex items-center px-3 py-3 text-base font-medium text-brand-yellow hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +380 73 636 95 00
              </a>
              <button
                onClick={() => handleNavigationClick('contact')}
                className="block w-full mt-2 bg-brand-yellow hover:bg-yellow-600 text-brand-black px-3 py-3 rounded-lg font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-yellow-700"
              >
                Отримати консультацію
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 