import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState('next');
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [sliding, setSliding] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "У нас після зими як почались ці відключення, усе, я зламався. Діти мерзнуть, холодильник тече, а ще й бойлер. Дивився на ті панелі рік, руки не доходили. Тут хлопці нормально все розклали по поличках. Не було нав'язування типу \"давай швидше, зараз, бо акція\", все спокійно, без напряга. Монтаж чекали десь місяць, бо черга, але зробили добре. Працює. Сплю спокійніше, скажу чесно.",
      name: "Олександр",
      location: "47 років, Броварський район",
      rating: 5
    },
    {
      id: 2,
      quote: "Та я вам так скажу, як почалися ті виключення, в мене просто нерви здали. В хаті темно, бойлер не робить, холодильник тече, діти в трьох шапках сплять. Я ще до цього думав про панелі, но боявся, то одні щось мямлять, то другі якісь мутні. а тут нормальні хлопці  поговорили, пояснили по людськи, нічого не впарювали. монтаж трохи почекали, но зробили чітко. Зараз у нас в хаті хоч якась стабільність тепер є",
      name: "Ігор",
      location: "52 роки, Київська область",
      rating: 5
    }
  ];

  // Helper to trigger slide
  const triggerSlide = (targetIndex, dir) => {
    if (sliding || targetIndex === currentTestimonial) return;
    setDirection(dir);
    setNextIndex(targetIndex);
    setSliding(true);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(targetIndex);
      setSliding(false);
      setNextIndex(null);
      // Wait for DOM update and next paint before setting height to auto and switching to relative
      requestAnimationFrame(() => {
        // Keep the height fixed for a short moment before setting to auto
        setTimeout(() => {
          setIsAnimating(false);
        }, 100); // 100ms delay for smoothness
      });
    }, 400); // match duration-400
  };

  const nextTestimonial = () => {
    const target = (currentTestimonial + 1) % testimonials.length;
    triggerSlide(target, 'next');
  };

  const prevTestimonial = () => {
    const target = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    triggerSlide(target, 'prev');
  };

  const goToTestimonial = (index) => {
    if (index === currentTestimonial) return;
    triggerSlide(index, index > currentTestimonial ? 'next' : 'prev');
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      // Swiped left
      nextTestimonial();
    } else if (distance < -minSwipeDistance) {
      // Swiped right
      prevTestimonial();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="testimonials" className="relative py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-brand-yellow text-brand-black px-4 sm:px-6 py-2 rounded-brand text-sm font-semibold mb-4 sm:mb-6">
            <span className="mr-2">💬</span>
            Відгуки наших клієнтів
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4 sm:mb-6 px-2">
            Що кажуть про нас
            <span className="text-brand-yellow"> клієнти</span>
          </h2>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
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
                  <div>
                    <h4 className="font-semibold text-brand-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Testimonials */}
        <div className="lg:hidden">
          <div className="relative" style={{ minHeight: 320 }}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl">
                {/* Testimonial Content with sliding animation */}
                <div className="relative overflow-hidden h-[26rem] sm:h-[26rem]">
                  {/* Outgoing testimonial (slides out) */}
                  {sliding && nextIndex !== null && (
                    <div
                      className="absolute w-full top-0 left-0 z-10 h-full flex flex-col justify-center"
                      style={{
                        animation: `${direction === 'next' ? 'slideOutLeft' : 'slideOutRight'} 0.4s forwards`
                      }}
                    >
                      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center">
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
                          <div>
                            <h4 className="font-semibold text-brand-black">{testimonials[currentTestimonial].name}</h4>
                            <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Always render the current testimonial as relative when not sliding */}
                  <div
                    key={testimonials[sliding && nextIndex !== null ? nextIndex : currentTestimonial].id}
                    className={`$${
                      (sliding && nextIndex !== null) || isAnimating
                        ? 'absolute w-full top-0 left-0 z-20 h-full flex flex-col justify-center'
                        : 'relative w-full z-20 h-full flex flex-col justify-center'
                    }`}
                    style={{
                      animation:
                        sliding && nextIndex !== null
                          ? `${direction === 'next' ? 'slideInLeft' : 'slideInRight'} 0.4s forwards`
                          : undefined
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center">
                      {/* Quote */}
                      <div className="mb-6">
                        <svg className="w-8 h-8 text-brand-yellow mb-4" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                        </svg>
                        <p className="text-gray-700 text-base italic leading-relaxed">
                          "{testimonials[sliding && nextIndex !== null ? nextIndex : currentTestimonial].quote}"
                        </p>
                      </div>
                      {/* Customer Info */}
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-semibold text-brand-black">{testimonials[sliding && nextIndex !== null ? nextIndex : currentTestimonial].name}</h4>
                          <p className="text-sm text-gray-600">{testimonials[sliding && nextIndex !== null ? nextIndex : currentTestimonial].location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Navigation Arrows Below Card */}
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-white/80 border border-brand-yellow text-brand-yellow rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-brand-yellow hover:text-white transition"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-white/80 border border-brand-yellow text-brand-yellow rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-brand-yellow hover:text-white transition"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-brand-yellow w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/40 to-white/0 pointer-events-none z-20"></div>
    </section>
  );
};

export default Testimonials; 