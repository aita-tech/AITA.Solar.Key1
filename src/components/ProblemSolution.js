import React, { useState } from 'react';

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState('problems');

  const problems = [
    {
      icon: (
        <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
      ),
      title: "Нестабільність та відключення",
      description: "Часті відключення електроенергії та нестабільна напруга створюють ризики для побутової техніки та комфорту."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-5.88 5.88-4-4L2 17.17 3.41 18.59l5.71-5.7 4 4 7.3-7.29L22 12V6z" />
        </svg>
      ),
      title: "Зростання тарифів",
      description: "Постійне підвищення цін на електроенергію робить комунальні платежі все більш обтяжливими для бюджету."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79l4.79 4.79v.01c0 1.1.9 2 2 2 .34 0 .65-.09.93-.24l2.83 2.83c-.58.13-1.17.2-1.76.2zm6.9-2.54l-1.41 1.41-2.83-2.83c.15-.28.24-.59.24-.93 0-1.1-.9-2-2-2h-.01l-4.79-4.79c.58-.13 1.17-.21 1.79-.21 4.08 0 7.44 3.05 7.93 7z" />
        </svg>
      ),
      title: "Екологічна шкода",
      description: "Традиційна енергетика завдає значної шкоди довкіллю, що впливає на здоров'я та майбутні покоління."
    }
  ];

  const solutions = [
    {
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l7 4v6c0 5.25-3.5 10.74-7 12-3.5-1.26-7-6.75-7-12V6l7-4zm-1 14l6-6-1.41-1.41L11 12.17l-2.59-2.58L7 11l4 4z" />
        </svg>
      ),
      title: "Енергетична незалежність",
      description: "Власна сонячна станція гарантує стабільне електропостачання незалежно від зовнішніх мереж."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 7H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H3V9h18v6zm-2-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
        </svg>
      ),
      title: "Заощадження та заробіток",
      description: "Виробляйте власну електроенергію, заощаджуйте на рахунках та продавайте надлишки за 'зеленим тарифом'."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: "Чиста енергія для майбутнього",
      description: "Сонячна енергія — це екологічно чисте рішення, що зменшує ваш вуглецевий слід та зберігає природу."
    }
  ];

  return (
    <section id="problem-solution" className="relative py-12 sm:py-16 lg:py-20 scroll-mt-20 overflow-x-hidden overflow-y-auto min-h-screen">
      {/* Background pattern (same as Hero) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-0">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-sm
              ${activeTab === 'problems' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800 hover:bg-yellow-100'}`}
            onClick={() => setActiveTab('problems')}
          >
            Проблеми
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-sm
              ${activeTab === 'solutions' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800 hover:bg-yellow-100'}`}
            onClick={() => setActiveTab('solutions')}
          >
            Рішення
          </button>
        </div>

        {/* Tab Panels */}
        {activeTab === 'problems' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
                Основна проблема електропостачання в Україні
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                З якими викликами стикається кожен українець?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div key={index} className="bg-red-50 p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    {problem.icon}
                    <h3 className="text-xl font-bold text-brand-black ml-4">{problem.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'solutions' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
                <span className="text-brand-yellow">Рішення є:</span> Сонячні електростанції
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Як сонячна енергія вирішує ці проблеми та надає переваги
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-green-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-xl font-bold text-brand-black ml-4">{solution.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/40 to-white/0 pointer-events-none z-20"></div>
    </section>
  );
};

export default ProblemSolution; 