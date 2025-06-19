import React from 'react';
import { useForm } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formspreeState, handleFormspreeSubmit] = useForm("mrbklgvj");
  const navigate = useNavigate();

  // Debug logs for form state
  React.useEffect(() => {
    console.log('Form state:', {
      submitting: formspreeState.submitting,
      succeeded: formspreeState.succeeded,
      errors: formspreeState.errors
    });
  }, [formspreeState]);

  React.useEffect(() => {
    if (formspreeState.succeeded) {
      // --- ANALYTICS EVENTS ---
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'generate_lead' });
      if (window.fbq) { window.fbq('track', 'Lead'); }

      // --- REDIRECT ---
      navigate('/thank-you');
    }
  }, [formspreeState.succeeded, navigate]);

  const handleCombinedSubmit = async (event) => {
    event.preventDefault();

    // --- TRIGGER FORMSPREE SUBMISSION ---
    handleFormspreeSubmit(event);

    // --- MAKE.COM WEBHOOK SUBMISSION ---
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://hook.eu2.make.com/muy5nud027nvuavdxqvf74lcrd2mxgs1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data sent to Make.com webhook.");
      } else {
        console.error(`Make.com webhook submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Make.com webhook submission failed:", error);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-20 overflow-hidden">
      {/* Background pattern (same as Hero) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>
        </div>
      </div>
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
          {/* New Advantages Grid Section */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-6 sm:mb-8">
              Переваги роботи з нами
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Quick Start Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-brand-yellow bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Швидкий запуск</h3>
                <p className="text-gray-600 text-sm">Від заявки до генерації енергії за 14 днів</p>
              </div>

              {/* Savings Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-brand-yellow bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Економія до 90%</h3>
                <p className="text-gray-600 text-sm">На рахунках за електроенергію з першого дня</p>
              </div>

              {/* Warranty Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-brand-yellow bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Повна гарантія</h3>
                <p className="text-gray-600 text-sm">25 років на панелі + страхування від природних лих</p>
              </div>

              {/* Control Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-brand-yellow bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Повний контроль</h3>
                <p className="text-gray-600 text-sm">Детальна звітність по енергогенерації</p>
              </div>
            </div>

            {/* Contact Information Block */}
            <div className="mt-8 bg-brand-yellow bg-opacity-10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Зв'яжіться зараз:</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+380736369500" className="hover:text-brand-yellow transition-colors">
                    +380 73 636 95 00
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@aitasolar.ua
                </p>
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Пн-Пт: 8:00-20:00, Сб-Нд: 10:00-18:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-brand order-1 lg:order-2 lg:sticky lg:top-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-brand-black mb-2 sm:mb-0">
                Безкоштовна консультація
              </h3>
              <div className="bg-green-100 text-green-800 px-3 py-2 rounded-brand text-xs font-medium">
                ⏱️ Відповідь за 15 хв
              </div>
            </div>
            
            <form onSubmit={handleCombinedSubmit} className="space-y-5 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="contactFullName" 
                  className="block text-brand-black font-medium mb-2 text-sm sm:text-base"
                >
                  Ім'я *
                </label>
                <input
                  type="text"
                  id="contactFullName"
                  name="fullName"
                  autoComplete="name"
                  required
                  placeholder="Введіть ваше ім'я"
                  className="w-full px-4 py-4 rounded-brand border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-base"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label 
                  htmlFor="contactPhone" 
                  className="block text-brand-black font-medium mb-2 text-sm sm:text-base"
                >
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="phone"
                  autoComplete="tel"
                  required
                  placeholder="+380 73 636 95 00"
                  className="w-full px-4 py-4 rounded-brand border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-base"
                />
              </div>

              {/* Description Field */}
              <div>
                <label 
                  htmlFor="contactDescription" 
                  className="block text-brand-black font-medium mb-2 text-sm sm:text-base"
                >
                  Опис проекту
                </label>
                <textarea
                  id="contactDescription"
                  name="description"
                  autoComplete="off"
                  rows={4}
                  placeholder="Розкажіть про ваш проект: тип об'єкта, орієнтовна площа даху, місячний рахунок, терміни реалізації та інші важливі деталі..."
                  className="w-full px-4 py-4 rounded-brand border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent resize-none text-base"
                />
              </div>

              {formspreeState.errors && formspreeState.errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-brand">
                  <p className="font-medium">Помилка при відправці форми:</p>
                  <ul className="list-disc list-inside mt-2">
                    {formspreeState.errors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                disabled={formspreeState.submitting}
                className="w-full bg-brand-yellow hover:brand-gradient-hover text-brand-black py-5 rounded-brand font-semibold transition-all hover:shadow-brand-hover disabled:opacity-50 disabled:cursor-not-allowed text-lg touch-manipulation"
              >
                {formspreeState.submitting ? (
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
            </form>
          </div>
        </div>
      </div>
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-yellow-50/40 to-yellow-100/80 pointer-events-none z-20"></div>
    </section>
  );
};

export default ContactForm; 