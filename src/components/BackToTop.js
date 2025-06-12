import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const totalScrollable = documentHeight - windowHeight;
      
      // Show button after scrolling 300px
      setIsVisible(scrolled > 300);
      
      // Calculate scroll progress for circular progress indicator
      const progress = (scrolled / totalScrollable) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Back to Top */}
      <div className="hidden lg:block">
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-white hover:bg-gray-50 text-brand-black rounded-full shadow-2xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Повернутися до початку сторінки"
        >
          {/* Circular Progress Indicator */}
          <div className="absolute inset-0">
            <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
              {/* Background circle */}
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(237, 192, 6, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="#edc006"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 26}`}
                strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-300"
              />
            </svg>
          </div>
          
          {/* Arrow Icon */}
          <svg 
            className="w-6 h-6 text-brand-black group-hover:text-brand-yellow transition-colors relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Back to Top */}
      <div className="lg:hidden">
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 w-12 h-12 bg-brand-yellow hover:bg-yellow-600 text-brand-black rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
          aria-label="Повернутися до початку сторінки"
        >
          {/* Simple arrow for mobile */}
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
          
          {/* Small progress indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-brand-yellow overflow-hidden">
            <div 
              className="h-full bg-brand-yellow transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </button>
      </div>
    </>
  );
};

export default BackToTop; 