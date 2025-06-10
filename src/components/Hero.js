import React, { useState, useEffect } from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Project carousel data
  const projectImages = [
    {
      id: 1,
      src: '/objct1.jpeg',
      alt: 'Сонячна електростанція - Проект 1',
      title: 'Приватний будинок - 20 кВт',
      location: 'Київська область'
    },
    {
      id: 2,
      src: '/objct2.jpeg',
      alt: 'Сонячна електростанція - Проект 2', 
      title: 'Комерційний об\'єкт - 50 кВт',
      location: 'Львівська область'
    },
    {
      id: 3,
      src: '/objct3.jpeg',
      alt: 'Сонячна електростанція - Проект 3',
      title: 'Промислова СЕС - 100 кВт',
      location: 'Дніпропетровська область'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projectImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="bg-gradient-to-br from-brand-white to-gray-50 py-12 sm:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Bar */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4">
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
              ✓ Сертифіковані інженери
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
              ✓ Офіційна гарантія 25 років
            </div>
            <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium">
              ✓ Повний цикл "під ключ"
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-4">
              <span className="bg-brand-yellow text-brand-black px-4 py-2 rounded-brand text-xs sm:text-sm font-semibold">
                🏆 #1 у сонячній енергетиці України
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-black mb-4 sm:mb-6 leading-tight">
              Сонячні електростанції
              <span className="text-brand-yellow"> під ключ</span> за 14 днів
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Повний цикл: від безкоштовного аудиту до введення в експлуатацію. Європейське обладнання, професійний монтаж, офіційні гарантії. Економте до 90% на електроенергії вже з першого дня.
            </p>
            
            {/* Unique Selling Points - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center bg-white p-4 rounded-brand shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm sm:text-base font-medium">Онлайн консультація</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-brand shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm sm:text-base font-medium">Монтаж за 1-2 дні</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-brand shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm sm:text-base font-medium">Оформлення всіх документів</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-brand shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm sm:text-base font-medium">Сервіс 24/7</span>
              </div>
            </div>

            {/* Mobile-First Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-brand-yellow hover:brand-gradient-hover text-brand-black px-6 sm:px-8 py-4 sm:py-4 rounded-brand text-base sm:text-lg font-semibold transition-all hover:shadow-brand-hover transform hover:-translate-y-1 w-full sm:w-auto"
              >
                📞 Безкоштовна консультація
              </button>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-brand-yellow text-brand-black hover:bg-brand-yellow px-6 sm:px-8 py-4 sm:py-4 rounded-brand text-base sm:text-lg font-semibold transition-all hover:shadow-brand w-full sm:w-auto"
                >
                  ⚡ Розрахувати економію
                </button>
                <a 
                  href="tel:+380736369500"
                  className="border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white px-6 sm:px-8 py-4 sm:py-4 rounded-brand text-base sm:text-lg font-semibold transition-all hover:shadow-brand w-full sm:w-auto text-center"
                >
                  📱 Подзвонити зараз
                </a>
              </div>
            </div>
            
            {/* Enhanced Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-yellow">500+</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Встановлених систем</div>
                <div className="text-xs text-gray-400 hidden sm:block">по всій Україні</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-yellow">14</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Днів в середньому</div>
                <div className="text-xs text-gray-400 hidden sm:block">від заявки до запуску</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-yellow">98%</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Задоволених клієнтів</div>
                <div className="text-xs text-gray-400 hidden sm:block">рекомендують нас</div>
              </div>
            </div>
          </div>

          {/* Project Carousel */}
          <div className="relative order-1 lg:order-2 flex flex-col items-center w-full">
            {/* Carousel Header and Badges - OUTSIDE image on mobile */}
            <div className="w-full flex flex-col sm:block">
              <div className="flex items-center justify-between w-full mb-2">
                <div className="bg-gradient-to-r from-brand-yellow to-yellow-400 px-4 py-2 rounded-t-2xl sm:rounded-t-none sm:rounded-t-2xl w-full">
                  <h3 className="text-brand-black font-bold text-base sm:text-lg">
                    🏗️ Наші реальні проекти
                  </h3>
                  <p className="text-brand-black text-xs sm:text-sm opacity-90">
                    Перегляньте реальні установки наших клієнтів
                  </p>
                </div>
                <div className="hidden sm:block absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-20">
                  ✓ Реальні проекти
                </div>
              </div>
              <div className="flex gap-2 mt-2 mb-2 sm:hidden">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  ✓ Реальні проекти
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  🌱 Екологічно
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-md mx-auto aspect-[16/9] bg-gray-100 rounded-2xl shadow-xl overflow-hidden flex items-center">
              {projectImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentImageIndex ? 'translate-x-0' : 
                    index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  {/* Image overlay with project info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4">
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      {image.title}
                    </h4>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      📍 {image.location}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation arrows */}
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-brand-black p-1.5 sm:p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Попереднє фото"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-brand-black p-1.5 sm:p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Наступне фото"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center space-x-2 p-2 bg-gray-50 rounded-b-2xl w-full">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-brand-yellow' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Перейти до фото ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 