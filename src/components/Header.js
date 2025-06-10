import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed header
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false); // Close mobile menu after clicking
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="bg-brand-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group focus:outline-none"
            onClick={scrollToTop}
          >
            <div className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="AITA Solar Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="ml-3 text-xl font-bold text-brand-black group-hover:text-brand-yellow transition-colors">AITA Solar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-brand-black hover:text-brand-yellow font-medium transition-colors"
            >
              Переваги
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-brand-black hover:text-brand-yellow font-medium transition-colors"
            >
              Як це працює
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-brand-black hover:text-brand-yellow font-medium transition-colors"
            >
              Калькулятор
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-brand-black hover:text-brand-yellow font-medium transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('solar-panels')}
              className="text-brand-black hover:text-brand-yellow font-medium transition-colors"
            >
              Сонячні панелі
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+380736369500"
              className="text-brand-black hover:text-brand-yellow font-medium transition-colors flex items-center"
            >
              📞 +380 73 636 95 00
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-yellow hover:bg-yellow-600 text-brand-black px-6 py-3 rounded-brand font-medium transition-all hover:shadow-brand-hover"
            >
              Отримати консультацію
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-black p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block px-3 py-2 text-brand-black hover:text-brand-yellow font-medium"
              >
                Переваги
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-brand-black hover:text-brand-yellow font-medium"
              >
                Як це працює
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="block px-3 py-2 text-brand-black hover:text-brand-yellow font-medium"
              >
                Калькулятор
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-brand-black hover:text-brand-yellow font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('solar-panels')}
                className="block px-3 py-2 text-brand-black hover:text-brand-yellow font-medium"
              >
                Сонячні панелі
              </button>
              <a 
                href="tel:+380736369500"
                className="block px-3 py-2 text-green-700 hover:text-green-500 font-medium border-t border-gray-200 mt-2 pt-4"
              >
                📞 Подзвонити: +380 73 636 95 00
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full mt-4 bg-brand-yellow hover:bg-yellow-600 text-brand-black px-6 py-3 rounded-brand font-medium transition-all"
              >
                Отримати консультацію
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 