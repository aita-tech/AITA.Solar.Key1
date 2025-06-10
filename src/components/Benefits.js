import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Зекономте до 80% на електроенергії",
      description: "Сонячна електростанція дозволяє значно скоротити витрати на електроенергію вже з першого дня роботи"
    },
    {
      icon: "⚡",
      title: "Незалежність від постачальника",
      description: "Ваша власна електростанція забезпечує стабільне електропостачання незалежно від тарифів"
    },
    {
      icon: "🌿",
      title: "Екологічно чиста енергія",
      description: "Зменште свій вуглецевий слід та внесіть вклад у збереження навколишнього середовища"
    },
    {
      icon: "🏠",
      title: "Збільшення вартості нерухомості",
      description: "Будинок з сонячною електростанцією коштує на 10-15% дорожче на ринку нерухомості"
    },
    {
      icon: "🔧",
      title: "Мінімальне обслуговування",
      description: "Сонячні панелі практично не потребують обслуговування та мають термін служби понад 25 років"
    },
    {
      icon: "⏰",
      title: "Швидка окупність",
      description: "Інвестиції в сонячну енергетику окупаються за 4-7 років при поточних тарифах на електроенергію"
    }
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3 sm:mb-4">
            ✨ Чому варто обрати сонячну енергію?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Перехід на сонячну енергію — це розумна інвестиція у ваше майбутнє
          </p>
        </div>

        {/* Mobile-First Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-brand hover:shadow-brand transition-all duration-300 hover:-translate-y-1 group touch-manipulation"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-2 sm:mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Optimized CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center bg-gradient-to-r from-brand-yellow to-amber-300 p-6 sm:p-8 rounded-brand shadow-brand">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-black mb-3 sm:mb-4">
            🚀 Готові перейти на сонячну енергію?
          </h3>
          <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Отримайте безкоштовний розрахунок вартості та терміну окупності сонячної електростанції для вашого об'єкта
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button 
              onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-brand font-semibold transition-all hover:shadow-lg text-base touch-manipulation"
            >
              🔢 Розрахувати вартість
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-white hover:bg-gray-100 text-brand-black px-6 sm:px-8 py-3 sm:py-4 rounded-brand font-semibold transition-all hover:shadow-lg border-2 border-brand-black text-base touch-manipulation"
            >
              💬 Безкоштовна консультація
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 