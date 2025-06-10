import React, { useState } from 'react';

const TurnkeyProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Заявка та консультація",
      description: [
        "Онлайн консультація з експертом",
        "Аналіз ваших потреб",
        "Попередній розрахунок економії",
        "Відповіді на всі питання"
      ],
      icon: "📞",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Проектування системи",
      description: [
        "Дистанційний аналіз об'єкта",
        "Розробка технічного проекту",
        "Підбір оптимального обладнання",
        "Розрахунок вартості та економії"
      ],
      icon: "📋",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Монтаж та підключення", 
      description: [
        "Професійний монтаж панелей",
        "Сертифіковані спеціалісти",
        "Підключення до мережі",
        "Фінальне тестування системи"
      ],
      icon: "🔧",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Запуск та підтримка",
      description: [
        "Тестування та введення в експлуатацію",
        "Навчання користування системою",
        "Технічна підтримка 24/7",
        "Регулярне обслуговування"
      ],
      icon: "🚀",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: "🛡️",
      title: "Гарантія результату",
      description: "25 років гарантії на панелі, 10 років на інвертор"
    },
    {
      icon: "💰",
      title: "Фіксована ціна",
      description: "Ніяких прихованих платежів чи доплат"
    },
    {
      icon: "⚡",
      title: "Максимальна ефективність",
      description: "Оптимальне розташування для найкращої генерації"
    },
    {
      icon: "🚀",
      title: "Швидкий запуск",
      description: "Від заявки до генерації електроенергії за 14 днів"
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

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start relative">
              {/* Progress Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 z-0">
                <div 
                  className="h-full bg-brand-yellow transition-all duration-1000 ease-in-out"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>

              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className="relative z-10 cursor-pointer group"
                  onClick={() => setCurrentStep(step.id)}
                  style={{ width: `${100 / steps.length}%` }}
                >
                  {/* Step Circle */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300
                    ${currentStep === step.id 
                      ? 'bg-brand-yellow text-brand-black scale-110 shadow-brand-hover' 
                      : currentStep > step.id 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white border-2 border-gray-300 text-gray-400 group-hover:border-brand-yellow'
                    }
                  `}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>

                  {/* Step Info */}
                  <div className="text-center px-2">
                    <h3 className={`
                      text-lg font-bold mb-2 transition-colors
                      ${currentStep === step.id ? 'text-brand-black' : 'text-gray-700'}
                    `}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Improved */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`
                  bg-white p-5 sm:p-6 rounded-brand shadow-lg border-l-4 transition-all cursor-pointer touch-manipulation
                  ${currentStep === step.id 
                    ? 'border-brand-yellow bg-yellow-50 scale-[1.02]' 
                    : 'border-gray-300 hover:border-brand-yellow'
                  }
                `}
                onClick={() => setCurrentStep(step.id)}
              >
                <div className="flex items-start">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all
                    ${currentStep === step.id ? 'bg-brand-yellow scale-110' : 'bg-gray-100'}
                  `}>
                    <span className="text-xl sm:text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{step.title}</h3>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                        {step.id}/{steps.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {step.description.map((item, index) => (
                        <p key={index} className="text-gray-600 text-sm sm:text-base leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details - Mobile Optimized */}
        {currentStep && (
          <div className="mt-8 sm:mt-12 bg-white p-6 sm:p-8 rounded-brand shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Step Details */}
              <div>
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`
                    w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-4
                    bg-gradient-to-r ${steps[currentStep - 1].color} text-white
                  `}>
                    <span className="text-xl sm:text-2xl">{steps[currentStep - 1].icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {steps[currentStep - 1].title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-6">
                  {steps[currentStep - 1].description.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element - Mobile Optimized */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-brand">
                <div className="text-center">
                  <div className={`
                    w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4
                    bg-gradient-to-r ${steps[currentStep - 1].color} text-white shadow-lg
                  `}>
                    <span className="text-3xl sm:text-4xl">{steps[currentStep - 1].icon}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    Крок {currentStep}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    {steps[currentStep - 1].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Grid - Mobile Optimized */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">
            Переваги нашого підходу "під ключ"
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-brand shadow-lg hover:shadow-xl transition-all">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-yellow to-yellow-400 p-6 sm:p-8 rounded-brand text-brand-black">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Готові розпочати ваш сонячний проект?
            </h3>
            <p className="text-base sm:text-lg mb-6 opacity-90 px-2 sm:px-0">
              Залишіть заявку зараз і отримайте безкоштовну консультацію протягом 15 хвилин
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-black text-brand-white px-6 sm:px-8 py-4 rounded-brand font-semibold hover:bg-gray-800 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
            >
              📞 Розпочати проект →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurnkeyProcess; 