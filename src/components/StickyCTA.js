import React, { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (approximately 800px)
      const scrolled = window.scrollY;
      const shouldShow = scrolled > 800;
      
      // Hide when near footer (approximate position)
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrolled / (documentHeight - windowHeight);
      const shouldHide = scrollPercentage > 0.9;
      
      setIsVisible(shouldShow && !shouldHide);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky CTA */}
      <div className="hidden lg:block">
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          {isMinimized ? (
            // Minimized State
            <div className="bg-brand-yellow hover:bg-yellow-600 rounded-full p-4 shadow-2xl cursor-pointer group">
              <button
                onClick={toggleMinimize}
                className="flex items-center gap-3 text-brand-black font-semibold"
                aria-label="Розгорнути панель дій"
              >
                <div className="relative">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
                  </svg>
                  {/* Pulse animation */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <span className="hidden group-hover:block whitespace-nowrap text-sm">
                  Безкоштовна консультація
                </span>
              </button>
            </div>
          ) : (
            // Expanded State
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Онлайн консультант
                  </span>
                </div>
                <button
                  onClick={toggleMinimize}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Згорнути панель"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-brand-black mb-2">
                  🌟 Готові до економії?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Отримайте безкоштовну консультацію та дізнайтесь, скільки ви зможете заощадити з сонячною енергією.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-brand-yellow hover:bg-yellow-600 text-brand-black font-semibold py-3 px-4 rounded-lg transition-all hover:shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                  </svg>
                  Безкоштовна консультація
                </button>
                
                <button
                  onClick={scrollToCalculator}
                  className="w-full bg-brand-black text-white font-medium py-3 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2 touch-manipulation hover:bg-gray-800"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM6.5 17.5H9.5C10.3 17.5 11 16.8 11 16V15C11 14.2 10.3 13.5 9.5 13.5H8V12H11V10.5H6.5V17.5ZM8 15H9.5V16H8V15ZM14.5 10.5H13V12H14.5C15.3 12 16 12.7 16 13.5V14.5C16 15.3 15.3 16 14.5 16H13V17.5H17V16H14.5V13.5H17V12H14.5V10.5Z"/>
                  </svg>
                  Калькулятор
                </button>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                  </svg>
                  <span>1000+ задоволених клієнтів</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sticky CTA - Bottom Bar */}
      <div className="lg:hidden">
        <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
            <div className="flex gap-3">
              <button
                onClick={scrollToContact}
                className="flex-1 bg-brand-yellow hover:bg-yellow-600 text-brand-black font-semibold py-3 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2 touch-manipulation"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                </svg>
                Консультація
              </button>
              
              <button
                onClick={scrollToCalculator}
                className="flex-1 bg-brand-black text-white font-medium py-3 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2 touch-manipulation hover:bg-gray-800"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM6.5 17.5H9.5C10.3 17.5 11 16.8 11 16V15C11 14.2 10.3 13.5 9.5 13.5H8V12H11V10.5H6.5V17.5ZM8 15H9.5V16H8V15ZM14.5 10.5H13V12H14.5C15.3 12 16 12.7 16 13.5V14.5C16 15.3 15.3 16 14.5 16H13V17.5H17V16H14.5V13.5H17V12H14.5V10.5Z"/>
                </svg>
                Калькулятор
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyCTA; 