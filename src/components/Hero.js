import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    // Immediate visibility for critical content (LCP optimization)
    setIsVisible(true);
    
    // Delay animations to prioritize content loading
    const animationTimer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 100);

    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <section className="bg-white min-h-screen flex flex-col items-start justify-center px-4 sm:px-6 py-16 sm:py-20 text-left relative overflow-hidden">
      {/* Background animations - loaded after LCP */}
      {animationsEnabled && (
        <div className="absolute inset-0 will-change-transform">
          {/* Solar panel grid pattern - mobile optimized */}
          <div className="absolute top-16 sm:top-20 right-2 sm:right-4 lg:right-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 solar-panel-grid z-0">
            <div className="grid grid-cols-4 gap-0.5 sm:gap-1 w-full h-full">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-brand-yellow border border-yellow-400 rounded-sm transform rotate-12 gpu-accelerated shadow-sm opacity-60 sm:opacity-70"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Additional solar panels - left side mobile optimized */}
          <div className="absolute top-32 sm:top-40 left-2 sm:left-4 lg:left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 solar-panel-grid z-0" style={{ animationDelay: '1s' }}>
            <div className="grid grid-cols-3 gap-0.5 sm:gap-1 w-full h-full">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-yellow-300 border border-yellow-400 rounded-sm transform -rotate-12 gpu-accelerated opacity-50 sm:opacity-60"
                ></div>
              ))}
            </div>
          </div>
          
          {/* Sun rays effect - mobile optimized */}
          <div className="absolute top-12 sm:top-16 left-1/5 sm:left-1/4 lg:left-1/3 w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48 sun-rays z-0">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-10 h-0.5 sm:w-16 sm:h-1 lg:w-24 lg:h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-100 origin-left gpu-accelerated opacity-50 sm:opacity-60 shadow-sm"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* Floating geometric shapes - mobile optimized positioning */}
          <div className="absolute bottom-32 sm:bottom-20 right-1/5 sm:right-1/4 w-5 h-5 sm:w-8 sm:h-8 bg-yellow-400 border border-yellow-500 opacity-70 sm:opacity-80 rounded-full floating-shape gpu-accelerated shadow-md" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 sm:bottom-32 right-1/4 sm:right-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-orange-300 border border-orange-400 opacity-60 sm:opacity-70 rounded-full floating-shape gpu-accelerated shadow-sm" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-24 sm:top-1/3 right-4 sm:right-8 w-6 h-6 sm:w-10 sm:h-10 bg-yellow-300 border border-yellow-400 opacity-50 sm:opacity-60 rounded-full floating-shape gpu-accelerated shadow-md" style={{ animationDelay: '1.5s' }}></div>

          {/* Energy wave effect - mobile subtle */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 opacity-15 sm:opacity-20 z-0">
            <div className="w-full h-full bg-gradient-to-t from-yellow-200 via-yellow-100 to-transparent solar-panel-grid"></div>
          </div>

          {/* Mobile-specific decorative elements - positioned to avoid content */}
          <div className="absolute top-20 sm:top-1/4 left-4 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-orange-300 border border-orange-400 opacity-60 sm:opacity-80 rounded-full floating-shape gpu-accelerated shadow-sm" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-20 sm:bottom-1/4 left-1/6 sm:left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 border border-yellow-400 opacity-50 sm:opacity-70 rounded-full floating-shape gpu-accelerated shadow-sm" style={{ animationDelay: '4s' }}></div>
          
          {/* Additional geometric patterns - mobile optimized */}
          <div className="absolute top-28 sm:top-32 left-2/5 sm:left-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-200 border border-yellow-300 opacity-40 sm:opacity-50 rounded-sm transform rotate-45 floating-shape gpu-accelerated" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-36 sm:bottom-40 left-8 sm:left-16 w-3 h-3 sm:w-5 sm:h-5 bg-orange-200 border border-orange-300 opacity-50 sm:opacity-60 rounded-full floating-shape gpu-accelerated" style={{ animationDelay: '6s' }}></div>
        </div>
      )}

      {/* Critical content - loads immediately for LCP optimization */}
      <div className={`relative z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-7xl mx-auto w-full`}>
        {/* Overline - critical content */}
        <p className="bg-yellow-50 text-gray-800 text-xs sm:text-sm inline-block rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm border border-yellow-200">
          ☀️ Підтримка і супровід — на кожному кроці до вашої незалежності
        </p>

        {/* Main Title - critical LCP element */}
        <h1 className="text-gray-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl">
          Сонячна станція під ключ — без стресу і переплат
        </h1>

        {/* Subtitle - critical content */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed">
          Простий процес, вигідні ціни, чесні відповіді на всі питання.<br/>
          Працюємо по всій Україні.
        </p>

        {/* CTAs - critical interactive elements */}
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
            {/* Placeholder for hero image - using a solar panels image */}
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Сонячні панелі на будинку - AITA Solar"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            
            {/* Image overlay with gradient for better text readability */}
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
          
          {/* Decorative elements around image */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Smooth bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-transparent to-transparent opacity-30 z-5"></div>
    </section>
  );
};

export default Hero; 