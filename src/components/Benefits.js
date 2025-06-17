import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
        </svg>
      ),
      title: "Економія",
      description: "Заощаджуйте до 80% на електроенергії з першого дня роботи."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      ),
      title: "Екологічність",
      description: "Чиста сонячна енергія без шкоди для навколишнього середовища."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,15.2L16.2,16.2Z"/>
        </svg>
      ),
      title: "Простота",
      description: "Простий процес встановлення та мінімальне обслуговування."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      title: "Надійність",
      description: "25+ років гарантованої роботи з мінімальними витратами."
    }
  ];

  return (
    <section id="benefits" className="relative py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-brand-yellow text-brand-black px-4 sm:px-6 py-2 rounded-brand text-sm font-semibold mb-4 sm:mb-6">
            <span className="mr-2">✨</span>
            Чому варто обрати сонячну енергію?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4 sm:mb-6 px-2">
            Перехід на сонячну енергію — це розумна інвестиція у ваше майбутнє
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-brand-yellow group-hover:bg-opacity-10 transition-all duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-3 text-center leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-yellow to-yellow-400 p-6 sm:p-8 rounded-2xl text-brand-black">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Готові до енергетичної незалежності?
            </h3>
            <p className="text-base sm:text-lg mb-6 opacity-90 px-2 sm:px-0">
              Забезпечте стабільне світло та тепло у вашому домі, незалежно від зовнішніх обставин
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-black text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation w-full sm:w-auto"
              >
                📞 Безкоштовна консультація
              </button>
              <button 
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-brand-black px-6 sm:px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-gray-200 touch-manipulation w-full sm:w-auto"
              >
                🧮 Розрахувати вартість
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white/80 pointer-events-none z-20"></div>
    </section>
  );
};

export default Benefits; 