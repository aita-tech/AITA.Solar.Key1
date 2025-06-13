import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Скільки коштує встановлення сонячної електростанції?",
      answer: "Вартість залежить від потужності системи, типу обладнання та складності монтажу. В середньому вартість становить 20-30 тис. грн за кВт встановленої потужності. Ми надаємо безкоштовний розрахунок після аудиту об'єкта."
    },
    {
      question: "Як розрахувати потрібну кількість панелей для мого будинку?",
      answer: "Для розрахунку потрібної кількості панелей потрібно врахувати кілька факторів: середнє споживання електроенергії, площу даху та його орієнтацію, регіон проживання. Для точного розрахунку рекомендуємо залишити заявку — наші спеціалісти проаналізують ваші потреби та запропонують оптимальне рішення. А для приблизного розрахунку терміну окупності ви можете використати наш калькулятор на сайті."
    },
    {
      question: "Як довго окупається сонячна електростанція?",
      answer: "Період окупності залежить від розміру системи та споживання електроенергії. В середньому сонячна електростанція окупається за 4-7 років при збереженні поточних тарифів на електроенергію."
    },
    {
      question: "Що включає в себе гарантія?",
      answer: "Ми надаємо 25 років гарантії на сонячні панелі, 12 років на інвертори та 5 років на монтажні роботи. Також включена безкоштовна технічна підтримка протягом всього гарантійного періоду."
    },
    {
      question: "Чи працюють сонячні панелі в похмуру погоду?",
      answer: "Так, сонячні панелі продовжують генерувати електроенергію навіть у похмуру погоду, хоча з меншою ефективністю (зазвичай 10-25% від номінальної потужності). Панелі працюють від розсіяного світла, не тільки від прямих сонячних променів."
    },
    {
      question: "Скільки часу займає встановлення?",
      answer: "Монтаж сонячної електростанції зазвичай займає 1-3 дні в залежності від розміру системи. Попередньо проводиться дистанційна оцінка та підготовча робота, весь процес від заявки до запуску займає 2-4 тижні."
    },
    {
      question: "Чи потрібні дозволи для встановлення?",
      answer: "Для приватних будинків потужністю до 30 кВт дозволи не потрібні. Для більших систем або комерційних об'єктів можуть знадобитися додаткові погодження. Ми допомагаємо з усіма необхідними документами."
    },
    {
      question: "Як здійснюється обслуговування системи?",
      answer: "Сонячні електростанції практично не потребують обслуговування. Рекомендується очищення панелей 1-2 рази на рік та перевірка системи нашими спеціалістами. Всі роботи по гарантії виконуються безкоштовно."
    },
    {
      question: "Чи можна продавати надлишок електроенергії?",
      answer: "Так, за умов 'зеленого тарифу' можна продавати надлишок електроенергії в мережу. Проте зараз більш вигідним є споживання власної енергії та економія на рахунках за електроенергію."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background pattern (same as Hero) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3 sm:mb-4">
            ❓ Поширені запитання
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
            Відповіді на найчастіші питання про сонячні електростанції
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-brand-white rounded-brand shadow-lg overflow-hidden transition-all duration-300 hover:shadow-brand"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 lg:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors touch-manipulation"
              >
                <h3 className="text-base sm:text-lg font-semibold text-brand-black pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 sm:w-7 sm:h-7 text-brand-yellow transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                activeIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 text-center bg-brand-white p-6 sm:p-8 rounded-brand shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3 sm:mb-4">
            🤔 Не знайшли відповідь на своє питання?
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
            Зв'яжіться з нами, і наші експерти дадуть детальну консультацію
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-yellow hover:brand-gradient-hover text-brand-black px-6 sm:px-8 py-3 sm:py-4 rounded-brand font-semibold transition-all hover:shadow-brand-hover text-base touch-manipulation"
            >
              📝 Задати питання
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-brand-yellow text-brand-black hover:bg-brand-yellow px-6 sm:px-8 py-3 sm:py-4 rounded-brand font-semibold transition-all hover:shadow-brand text-base touch-manipulation"
            >
              📞 Зателефонувати зараз
            </button>
          </div>
        </div>
      </div>
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-yellow-50/40 to-yellow-100/80 pointer-events-none z-20"></div>
    </section>
  );
};

export default FAQ; 