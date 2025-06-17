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
                href="https://t.me/Aita_Solar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-brand flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="Telegram канал AITA Solar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/solar.aita/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-brand flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="Instagram сторінка AITA Solar"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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
                  <p className="text-gray-300">+380 73 636 95 00</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
                <p className="text-gray-300">info@aitasolar.ua</p>
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
            <span>Офіційний партнер провідних виробників</span>
            <span>Понад 500 встановлених систем</span>
            <span>Гарантія до 25 років</span>
            <span>100% екологічно чиста енергія</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 