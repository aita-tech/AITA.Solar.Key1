import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center px-4 sm:px-6 py-16 sm:py-20 text-left overflow-hidden">
      <div className={`relative z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-7xl mx-auto w-full`}>
        {/* Overline */}
        <p className="bg-yellow-50 text-gray-800 text-xs sm:text-sm inline-block rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm border border-yellow-200">
          ☀️ Підтримка і супровід — на кожному кроці до вашої незалежності
        </p>

        {/* Main Title */}
        <h1 className="text-gray-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl">
          Сонячна станція під ключ — без стресу і переплат
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed">
          Простий процес, вигідні ціни, чесні відповіді на всі питання.<br/>
          Працюємо по всій Україні.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transform hover:-translate-y-1 hover:shadow-xl will-change-transform touch-manipulation"
          >
            🌟 Отримати консультацію
          </button>
          <button 
            onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-yellow-500 text-yellow-600 hover:text-white font-medium rounded-lg hover:bg-yellow-500 transition-all px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base hover:shadow-lg will-change-transform touch-manipulation"
          >
            📊 Розрахувати вартість
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="w-full relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Сонячні панелі на будинку - AITA Solar"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Image caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm sm:text-base font-medium">
                  ✨ Якісне встановлення сонячних панелей для вашого дому
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/40 to-white/0 pointer-events-none z-20"></div>
    </section>
  );
};

export default Hero; 