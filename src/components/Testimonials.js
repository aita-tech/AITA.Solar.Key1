import React, { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "AITA Solar встановили нам сонячну електростанцію за місяць. Професійний підхід, чесні ціни та якісне обладнання. Вже економимо до 70% на електроенергії!",
      name: "Олександр Петренко",
      location: "м. Київ",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      savings: "70%"
    },
    {
      id: 2,
      quote: "Вибрали AITA Solar після консультації з кількома компаніями. Підкупила прозорість процесу та відсутність прихованих платежів. Електростанція працює бездоганно вже рік!",
      name: "Марина Коваленко", 
      location: "м. Львів",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      savings: "65%"
    },
    {
      id: 3,
      quote: "Від заявки до запуску електростанції минуло всього 3 тижні. Команда AITA Solar виконала всі роботи якісно та в строк. Рекомендую!",
      name: "Володимир Іваненко",
      location: "м. Дніпро", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      savings: "75%"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            💬 Що кажуть наші клієнти
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Довіра наших клієнтів — найкраща рекомендація нашої роботи
          </p>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-brand-yellow mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-brand-yellow/20"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-brand-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Savings Badge */}
                  <div className="text-center">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      -{testimonial.savings}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">економія</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Current Testimonial */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mx-4">
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-brand-yellow mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <p className="text-gray-700 text-base italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-4 ring-brand-yellow/20"
                />
                <div className="flex-1">
                  <h4 className="text-base font-bold text-brand-black">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    -{testimonials[currentTestimonial].savings}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">економія</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-yellow transition-all touch-manipulation"
              aria-label="Попередній відгук"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-yellow transition-all touch-manipulation"
              aria-label="Наступний відгук"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all touch-manipulation ${
                  index === currentTestimonial 
                    ? 'bg-brand-yellow scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Перейти до відгуку ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-brand-yellow rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">
              🌟 Станьте частиною нашої сонячної спільноти!
            </h3>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Приєднуйтесь до тисяч задоволених клієнтів, які вже економлять на електроенергії
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg text-base touch-manipulation"
              >
                💬 Отримати консультацію
              </button>
              <button 
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-100 text-brand-black px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg border-2 border-brand-black text-base touch-manipulation"
              >
                📊 Розрахувати вартість
              </button>
            </div>
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

export default Testimonials; 