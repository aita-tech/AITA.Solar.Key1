import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MobileNavToggle() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Variants for the circle's x-offset
  const circleVariants = {
    closed: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: -200, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  // Variants for the menu lines (hamburger → X)
  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (i) => ({
      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
      y: i === 1 ? 20 : 0,
    }),
  };

  const handleNavigationClick = (sectionId) => {
    setOpen(false); // Close mobile menu

    if (isHomePage) {
      // If on home page, scroll to section
      scrollToSection(sectionId);
    } else {
      // If on other page, navigate to home page and scroll to section
      navigate('/');
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

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
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  };

  const handlePanelComparisonClick = () => {
    setOpen(false);
    navigate('/panels');
  };

  return (
    <div className="block md:hidden">
      {/* Mobile-only hamburger button */}
      <div className="relative w-12 h-12">
        {/* Animated circle */}
        <motion.div
          className="absolute top-1 right-1 w-10 h-10 rounded-full bg-yellow-400 shadow-lg"
          variants={circleVariants}
          animate={isOpen ? 'open' : 'closed'}
        />

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!isOpen)}
          className="relative z-10 w-12 h-12 flex flex-col justify-center items-center bg-transparent hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              custom={i}
              variants={lineVariants}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-gray-800 mb-1 last:mb-0"
            />
          ))}
        </button>
      </div>

      {/* Mobile nav panel - Only show on mobile */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-80 max-w-[80vw] bg-white shadow-xl p-6 z-[60]"
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col space-y-4">
            <motion.button
              onClick={() => handleNavigationClick('benefits')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Переваги
            </motion.button>
            
            <motion.button
              onClick={() => handleNavigationClick('how-it-works')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Як це працює
            </motion.button>
            
            <motion.button
              onClick={() => handleNavigationClick('calculator')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Калькулятор
            </motion.button>
            
            <motion.button
              onClick={() => handleNavigationClick('solar-panels')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Сонячні панелі
            </motion.button>
            
            <motion.button
              onClick={handlePanelComparisonClick}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Порівняння панелей
            </motion.button>
            
            <motion.button
              onClick={() => handleNavigationClick('faq')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              FAQ
            </motion.button>
            
            <motion.button
              onClick={() => handleNavigationClick('contact')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Контакти
            </motion.button>
          </div>

          {/* Contact section */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="mb-4">
              <motion.a 
                href="tel:+380736369500"
                className="flex items-center text-green-700 hover:text-green-500 font-medium transition-colors p-2 rounded-lg hover:bg-green-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📞 +380 73 636 95 00
              </motion.a>
            </div>
            
            <motion.button
              onClick={() => handleNavigationClick('contact')}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Отримати консультацію
            </motion.button>
            
            <p className="text-sm text-gray-500 text-center mt-3">
              ☀️ Працюємо по всій Україні
            </p>
          </div>
        </div>
      </motion.nav>

      {/* Backdrop overlay - Only show on mobile when menu is open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/30 z-[50]"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
} 