import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './HeaderDesktop.css';
// import MobileNavToggle from './MobileNavToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    { label: 'Проблема та рішення', id: 'problem-solution' },
    { label: 'Як це працює', id: 'how-it-works' },
    { label: 'Калькулятор', id: 'calculator' },
    { label: 'Сонячні панелі', id: 'solar-panels' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Відгуки', id: 'testimonials' },
    { label: 'Контакти', id: 'contact' },
    { label: 'Каталог обладнання', id: 'panels', isLink: true },
    { label: 'Переваги', id: 'benefits' }
  ];

  return (
    <>
      {/* Desktop Header - Only visible on large screens */}
      <header className="hidden lg:block bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="h-20 flex items-center max-w-7xl mx-auto px-8">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg hover:opacity-90 transition-opacity"
              onClick={scrollToTop}
            >
              <img 
                src="/logo.png" 
                alt="AITA Solar" 
                className="h-10 w-auto" 
              />
              <span className="ml-3 text-xl font-bold text-brand-black">AITA Solar</span>
            </Link>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex-grow flex justify-center">
            <ul className="flex items-center gap-x-8">
              {menuItems.map(item => (
                <li key={item.label}>
                  {item.isLink ? (
                    <Link
                      to="/panels"
                      className="text-brand-black hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg px-3 py-2 font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigationClick(item.id)}
                      className="text-brand-black hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg px-3 py-2 font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact & CTA */}
          <div className="flex-shrink-0 flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <a
                href="tel:+380736369500"
                className="flex items-center text-brand-black hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg px-3 py-2 font-medium whitespace-nowrap"
              >
                <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="whitespace-nowrap">+380 73 636 95 00</span>
              </a>

              <a
                href="https://t.me/Aita_Solar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-brand-black hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg px-3 py-2 font-medium border border-gray-200 hover:border-brand-yellow whitespace-nowrap"
              >
                <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.19 3.48-1.4 3.86-1.4.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span className="whitespace-nowrap">Telegram</span>
              </a>
            </div>
            
            <button
              onClick={() => handleNavigationClick('contact')}
              className="bg-brand-yellow text-brand-black px-6 py-2.5 rounded-lg hover:bg-yellow-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-700 font-semibold shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Отримати консультацію
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Header - Only visible on small/medium screens */}
      <header className="lg:hidden bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="flex items-center justify-between h-20 px-6">
          {/* Mobile Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg hover:opacity-90 transition-opacity"
              onClick={scrollToTop}
            >
              <img 
                src="/logo.png" 
                alt="AITA Solar" 
                className="h-10 w-auto" 
              />
              <span className="ml-3 text-xl font-bold text-brand-black">AITA Solar</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
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
        </nav>

        {/* Mobile Menu Overlay and Content - Keep existing code */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div 
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Keep existing mobile menu content */}
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-6">
              <img src="/logo.png" alt="AITA Solar" className="h-10 w-auto" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 pb-4">
              <ul className="space-y-1">
                {menuItems.map(item => (
                  <li key={item.label}>
                    {item.isLink ? (
                      <Link
                        to="/panels"
                        className="block px-3 py-3 text-base font-medium text-brand-black hover:text-brand-yellow hover:bg-yellow-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavigationClick(item.id)}
                        className="block w-full text-left px-3 py-3 text-base font-medium text-brand-black hover:text-brand-yellow hover:bg-yellow-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <a 
                  href="tel:+380736369500"
                  className="flex items-center px-3 py-3 text-base font-medium text-brand-black bg-yellow-50 hover:text-brand-yellow hover:bg-yellow-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +380 73 636 95 00
                </a>
                <a 
                  href="https://t.me/Aita_Solar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-3 text-base font-medium text-brand-black bg-yellow-50 hover:text-brand-yellow hover:bg-yellow-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.19 3.48-1.4 3.86-1.4.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  Telegram
                </a>
                <button
                  onClick={() => handleNavigationClick('contact')}
                  className="block w-full mt-2 bg-brand-yellow hover:bg-yellow-600 text-brand-black px-3 py-3 rounded-lg font-semibold transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-yellow-700 shadow-sm hover:shadow-md"
                >
                  Отримати консультацію
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 