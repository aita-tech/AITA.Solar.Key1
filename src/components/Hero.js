import React from 'react';

const Hero = () => {
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

  return (
    <section 
      className="hero-section min-h-screen flex items-center justify-center py-16 px-4 text-center"
      style={{
        background: 'linear-gradient(135deg, #edc006 0%, #261f00 100%)',
        color: '#ffffff'
      }}
    >
      <div className="max-w-3xl mx-auto">
        
        {/* B. Overline (nadzagolovok) */}
        <div className="hero-overline mb-4 sm:mb-6">
          <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium border border-white border-opacity-30">
            Підтримка і супровід — на кожному кроці до вашої незалежності
          </span>
        </div>

        {/* C. Main headline (h1) */}
        <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Сонячна станція під ключ — без стресу і переплат
        </h1>

        {/* D. Subtitle (podzagolovok) */}
        <p className="hero-subtitle text-lg sm:text-xl text-white text-opacity-90 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
          Простий процес, вигідні ціни, чесні відповіді на всі питання.<br />
          Працюємо по всій Україні.
        </p>

        {/* E. Trust/features list */}
        <ul className="hero-features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <li className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm hover:bg-opacity-20 transition-all border border-white border-opacity-20">
            <span className="text-2xl sm:text-3xl mb-2">📞</span>
            <span className="text-sm sm:text-base font-semibold text-white">Онлайн-консультація</span>
          </li>
          <li className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm hover:bg-opacity-20 transition-all border border-white border-opacity-20">
            <span className="text-2xl sm:text-3xl mb-2">⚡️</span>
            <span className="text-sm sm:text-base font-semibold text-white">Монтаж за 1-2 дні</span>
          </li>
          <li className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm hover:bg-opacity-20 transition-all border border-white border-opacity-20">
            <span className="text-2xl sm:text-3xl mb-2">📄</span>
            <span className="text-sm sm:text-base font-semibold text-white">Документи без зайвих турбот</span>
          </li>
          <li className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm hover:bg-opacity-20 transition-all border border-white border-opacity-20">
            <span className="text-2xl sm:text-3xl mb-2">💬</span>
            <span className="text-sm sm:text-base font-semibold text-white">Підтримка на кожному етапі</span>
          </li>
        </ul>

        {/* F. CTA buttons */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          {/* Button A - Primary */}
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
          >
            Отримати консультацію
          </button>
          
          {/* Button B - Secondary */}
          <button 
            onClick={scrollToCalculator}
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl min-w-[200px]"
          >
            Розрахувати вартість
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero; 