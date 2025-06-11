import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          description: ''
        });
      }, 5000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white p-8 sm:p-12 rounded-brand shadow-xl border border-green-200">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3 sm:mb-4">
              🎉 Заявку отримано!
            </h3>
            <p className="text-green-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
              Дякуємо за довіру! Наш експерт зв'яжеться з вами <strong>протягом 15 хвилин</strong> 
              для уточнення деталей та призначення безкоштовної консультації.
            </p>
            
            <div className="bg-green-50 p-4 sm:p-6 rounded-brand mb-4 sm:mb-6">
              <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Що відбуватиметься далі:</h4>
              <div className="space-y-3 text-sm text-green-700">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 text-xs flex-shrink-0">1</span>
                  <span>Онлайн консультація з експертом</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 text-xs flex-shrink-0">2</span>
                  <span>Технічна оцінка та планування</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 text-xs flex-shrink-0">3</span>
                  <span>Індивідуальний розрахунок та пропозиція</span>
                </div>
              </div>
            </div>
            
            <div className="text-xs sm:text-sm text-green-600">
              Форма автоматично очиститься через кілька секунд...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-brand-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3 sm:mb-4">
            Розпочніть свій проект зараз
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Заповніть просту форму і отримайте персональний розрахунок вартості та економії 
            сонячної електростанції для вашого об'єкта за 15 хвилин
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enhanced Contact Info - Mobile First */}
          <div className="bg-gradient-to-br from-brand-yellow to-yellow-400 p-6 sm:p-8 rounded-brand text-brand-black order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">⚡ Переваги роботи з нами</h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-black bg-opacity-10 rounded-brand flex items-center justify-center mr-4">
                  <span className="text-xl sm:text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Швидкий запуск</h4>
                  <p className="opacity-90 text-xs sm:text-sm">Від заявки до генерації енергії за 14 днів</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-black bg-opacity-10 rounded-brand flex items-center justify-center mr-4">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Економія до 90%</h4>
                  <p className="opacity-90 text-xs sm:text-sm">На рахунках за електроенергію з першого дня</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-black bg-opacity-10 rounded-brand flex items-center justify-center mr-4">
                  <span className="text-xl sm:text-2xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Повна гарантія</h4>
                  <p className="opacity-90 text-xs sm:text-sm">25 років на панелі + страхування від природних лих</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-black bg-opacity-10 rounded-brand flex items-center justify-center mr-4">
                  <span className="text-xl sm:text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Повний контроль</h4>
                  <p className="opacity-90 text-xs sm:text-sm">Детальна звітність по енергогенерації</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-black bg-opacity-10 p-4 rounded-brand">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">📞 Зв'яжіться зараз:</h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <p>📱 +380 73 636 95 00 (Viber, Telegram)</p>
                <p>📧 info@aitasolar.ua</p>
                <p>🕐 Пн-Пт: 8:00-20:00, Сб-Нд: 10:00-18:00</p>
              </div>
            </div>
          </div>

          {/* Simplified Contact Form - Mobile Optimized */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-brand order-1 lg:order-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-brand-black mb-2 sm:mb-0">
                Безкоштовна консультація
              </h3>
              <div className="bg-green-100 text-green-800 px-3 py-2 rounded-brand text-xs font-medium">
                ⏱️ Відповідь за 15 хв
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-brand-black font-medium mb-2 text-sm sm:text-base">
                  Ім'я *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Введіть ваше ім'я"
                  className="w-full px-4 py-4 rounded-brand border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-base"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-brand-black font-medium mb-2 text-sm sm:text-base">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+380 73 636 95 00"
                  className="w-full px-4 py-4 rounded-brand border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-base"
                />
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="block text-brand-black font-medium mb-2 text-sm sm:text-base">
                  Опис проекту
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Розкажіть про ваш проект: тип об'єкта, орієнтовна площа даху, місячний рахунок, терміни реалізації та інші важливі деталі..."
                  className="w-full px-4 py-4 rounded-brand border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent resize-none text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.name || !formData.phone}
                className="w-full bg-brand-yellow hover:brand-gradient-hover text-brand-black py-5 rounded-brand font-semibold transition-all hover:shadow-brand-hover disabled:opacity-50 disabled:cursor-not-allowed text-lg touch-manipulation"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Надсилання заявки...
                  </span>
                ) : (
                  '🚀 Отримати консультацію безкоштовно'
                )}
              </button>

              <div className="bg-blue-50 p-4 rounded-brand border border-blue-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <span className="text-blue-600 text-lg">🔒</span>
                  </div>
                  <div className="text-xs sm:text-sm text-blue-800">
                    <p className="font-medium mb-1">Ваші дані під захистом</p>
                    <p>Ми не передаємо персональну інформацію третім особам і використовуємо її виключно для зв'язку з вами.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Trust Indicators - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
            <div className="text-xl sm:text-2xl mb-2">⚡</div>
            <div className="text-base sm:text-lg font-bold text-brand-black mb-1">15 хв</div>
            <div className="text-gray-600 text-xs sm:text-sm">Час відповіді</div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
            <div className="text-xl sm:text-2xl mb-2">🎯</div>
            <div className="text-base sm:text-lg font-bold text-brand-black mb-1">100%</div>
            <div className="text-gray-600 text-xs sm:text-sm">Точність розрахунків</div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
            <div className="text-xl sm:text-2xl mb-2">🏆</div>
            <div className="text-base sm:text-lg font-bold text-brand-black mb-1">500+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Реалізованих проектів</div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
            <div className="text-xl sm:text-2xl mb-2">💝</div>
            <div className="text-base sm:text-lg font-bold text-brand-black mb-1">0 грн</div>
            <div className="text-gray-600 text-xs sm:text-sm">Вартість консультації</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 