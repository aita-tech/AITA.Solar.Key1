import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Консультація та аналіз",
      description: "Наші експерти проведуть дистанційний аналіз вашого об'єкта та розрахують оптимальну конфігурацію системи.",
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 5V19C3 20.1 3.9 21 5 21H11V19H5V5H19V11H21V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5ZM15 13V11L18 14L15 17V15H9V13H15ZM21 18V20H23V18H21ZM19 18V20H21V18H19ZM17 18V20H19V18H17Z"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Безкоштовний аудит",
      description: "Наш інженер приїде до вас, проведе аудит об'єкта та розрахує оптимальну конфігурацію системи.",
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12V14H16V12H8ZM8 16V18H13V16H8Z"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Доставка",
      description: "Доставляємо та складуємо всі необхідні компоненти системи безпосередньо на ваш об'єкт.",
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20S9 18.66 9 17H15C15 18.66 16.34 20 18 20S21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17S5.17 15.5 6 15.5S7.5 16.17 7.5 17S6.83 18.5 6 18.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17S17.17 15.5 18 15.5S19.5 16.17 19.5 17S18.83 18.5 18 18.5Z"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Монтаж",
      description: "Професійний монтаж та налаштування системи з подальшим запуском та навчанням користування.",
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3S1 8.9 3 10.9C4.9 12.8 7.6 13.3 9.9 12.4L19 21.7C19.4 22.1 20 22.1 20.4 21.7L22.7 19.4C23.1 19 23.1 18.4 22.7 19ZM5.6 9.4C4.6 8.4 4.6 6.8 5.6 5.8S8.2 4.6 9.2 5.6S10.4 8.2 9.4 9.2S6.6 10.4 5.6 9.4Z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-brand-yellow text-brand-black px-4 sm:px-6 py-2 rounded-brand text-sm font-semibold mb-4 sm:mb-6">
            <span className="mr-2">🏆</span>
            Повний цикл "під ключ"
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4 sm:mb-6 px-2">
            Як ми реалізуємо ваш
            <span className="text-brand-yellow"> сонячний проект</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Від першого дзвінка до отримання першого рахунку за продану електроенергію - 
            ми супроводжуємо весь процес професійно та прозоро
          </p>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 z-0">
              <div className="h-full bg-brand-yellow w-full"></div>
            </div>

            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative z-10"
                style={{ width: `${100 / steps.length}%` }}
              >
                {/* Step Circle */}
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-brand-black font-bold text-lg">{step.number}</span>
                </div>

                {/* Step Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mx-2">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-2xl">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-brand-black mb-3 text-center leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection line for mobile */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-brand-yellow opacity-30 z-0"></div>
              )}
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-brand-yellow">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-brand-black font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gray-50 rounded-xl mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-black">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-yellow to-yellow-400 p-6 sm:p-8 rounded-2xl text-brand-black">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Готові розпочати ваш сонячний проект?
            </h3>
            <p className="text-base sm:text-lg mb-6 opacity-90 px-2 sm:px-0">
              Залишіть заявку зараз і отримайте безкоштовну консультацію протягом 15 хвилин
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-black text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
            >
              📞 Розпочати проект →
            </button>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-16 sm:mt-20">
          <div className="section-divider"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 