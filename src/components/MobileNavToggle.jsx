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
              Каталог обладнання
            </motion.button>
            
            <motion.button
              onClick={() => handleNavigationClick('problem-solution')}
              className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors p-3 rounded-lg hover:bg-yellow-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Проблема та рішення
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
            <div className="mb-4 flex flex-col gap-3">
              <a 
                href="tel:+380736369500" 
                className="!text-decoration-none flex items-center gap-2 px-4 py-3 bg-yellow-50 hover:bg-yellow-100 text-brand-black font-medium rounded-lg transition-all hover:!text-decoration-underline focus:!text-decoration-underline shadow-sm"
              >
                <span className="text-xl">📞</span>
                +380 73 636 95 00
              </a>
              <a
                href="https://t.me/aitasolar"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-decoration-none flex items-center gap-2 px-4 py-3 bg-yellow-50 hover:bg-yellow-100 text-brand-black font-medium rounded-lg transition-all hover:!text-decoration-underline focus:!text-decoration-underline shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.036 16.569l-.398 3.934c.57 0 .816-.244 1.113-.54l2.668-2.56 5.528 4.04c1.012.558 1.73.264 1.984-.94l3.6-16.84c.328-1.56-.567-2.17-1.58-1.8L2.36 9.47c-1.54.6-1.52 1.46-.264 1.85l4.6 1.44 10.68-6.74c.5-.32.96-.14.58.2"/></svg>
                Telegram
              </a>
            </div>
            <a
              href="#contact"
              className="!text-decoration-none block w-full text-center bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold rounded-lg py-4 transition-all hover:!text-decoration-underline focus:!text-decoration-underline mt-2"
            >
              Отримати консультацію
            </a>
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