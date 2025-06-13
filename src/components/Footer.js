import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-brand-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="AITA Solar Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="ml-3 text-2xl font-bold flex items-center">
                <img 
                  src="/favicon-32x32.png" 
                  alt="AITA Solar Icon" 
                  className="h-8 w-8 object-contain mr-3 bg-white rounded p-1"
                />
                AITA Solar
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Провідна компанія з встановлення сонячних електростанцій в Україні. Забезпечуємо повний цикл послуг від консультації до післягарантійного обслуговування.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/aitasolar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-brand flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="Facebook сторінка AITA Solar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/aitasolar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-brand flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="Instagram сторінка AITA Solar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.878-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/aitasolar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-brand flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="LinkedIn сторінка AITA Solar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@aitasolar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-brand flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="YouTube канал AITA Solar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Швидкі посилання</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-brand-yellow transition-colors"
              >
                Переваги
              </button>
              <button 
                onClick={() => document.getElementById('turnkey-process').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-brand-yellow transition-colors"
              >
                Як це працює
              </button>
              <button 
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-brand-yellow transition-colors"
              >
                Калькулятор
              </button>
              <button 
                onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-brand-yellow transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-brand-yellow transition-colors"
              >
                Контакти
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контактна інформація</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                </svg>
                <div>
                  <p className="text-gray-300">📱 +380 73 636 95 00</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
                <p className="text-gray-300">📧 info@aitasolar.ua</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                </svg>
                <div>
                  <p className="text-gray-300">вул. Сонячна, 123</p>
                  <p className="text-gray-300">м. Київ, 01001</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
                </svg>
                <div>
                  <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-300">Сб: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AITA Solar. Всі права захищені.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <button 
                onClick={() => console.log('Privacy Policy')}
                className="text-gray-400 hover:text-brand-yellow transition-colors"
              >
                Політика конфіденційності
              </button>
              <button 
                onClick={() => console.log('Terms of Use')}
                className="text-gray-400 hover:text-brand-yellow transition-colors"
              >
                Умови використання
              </button>
              <button 
                onClick={() => console.log('Public Offer')}
                className="text-gray-400 hover:text-brand-yellow transition-colors"
              >
                Публічна оферта
              </button>
            </div>

            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-brand-yellow text-brand-black rounded-brand flex items-center justify-center hover:bg-yellow-600 transition-all hover:shadow-brand-hover mt-4 md:mt-0"
              aria-label="Повернутися до початку сторінки"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center text-xs text-gray-500 space-y-2 sm:space-y-0 sm:space-x-6">
            <span>🏆 Офіційний партнер провідних виробників</span>
            <span>⚡ Понад 500 встановлених систем</span>
            <span>🛡️ Гарантія до 25 років</span>
            <span>🌱 100% екологічно чиста енергія</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 