import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Консультація та аналіз",
      description: "Наші експерти проведуть дистанційний аналіз вашого об'єкта та розрахують оптимальну конфігурацію системи.",
      icon: "📋"
    },
    {
      number: "02",
      title: "Безкоштовний аудит",
      description: "Наш інженер приїде до вас, проведе аудит об'єкта та розрахує оптимальну конфігурацію системи.",
      icon: (
        <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21Z"/>
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
    <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">
            Як це працює
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простий та прозорий процес від заявки до запуску вашої сонячної електростанції
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-brand-yellow opacity-30 transform translate-x-4 -translate-y-1/2 z-0"></div>
              )}
              
              <div className="bg-brand-white p-8 rounded-brand shadow-lg hover:shadow-brand-hover transition-all duration-300 hover:-translate-y-2 relative z-10">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="p-3 bg-brand-yellow bg-opacity-10 rounded-brand">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-brand-black mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-yellow opacity-30"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mr-4 relative z-10">
                  <span className="text-brand-black font-bold text-lg">{step.number}</span>
                </div>
                <div className="flex-1 bg-brand-white p-6 rounded-brand shadow-lg">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-brand-black mb-4">
            Готові розпочати?
          </h3>
          <p className="text-gray-600 mb-8">
            Залишіть заявку зараз і отримайте безкоштовну консультацію
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-yellow hover:brand-gradient-hover text-brand-black px-8 py-4 rounded-brand text-lg font-semibold transition-all hover:shadow-brand-hover transform hover:-translate-y-1"
          >
            Розпочати проект
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 