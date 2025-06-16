import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';

const panels = [
  {
    brand: "Jinko Solar",
    model: "Tiger Neo N-type",
    code: "KM590N-72HL4-BDV",
    power: "590 Вт",
    image: "/Jinko Solar Panels.webp",
    detailsPath: "/panel/jinko-solar",
    moreLink: "/panel/jinko-solar",
    description: "590 Ват. Дволицевий модуль з подвійним склом.",
    features: [
      {
        text: "Bifacial module with dual glass",
        tooltip: "Ця панель поглинає світло з обох сторін, що збільшує її загальну продуктивність."
      },
      {
        text: "N-type",
        tooltip: "Покращена продуктивність при низькому освітленні та менша деградація."
      }
    ]
  },
  {
    brand: "HT-SAAE",
    model: "HT54-18X",
    code: "HT54-18X",
    power: "590 Вт",
    image: "/ht saae.webp",
    detailsPath: "/panel/htsaae-xseries",
    moreLink: "/panel/htsaae-xseries",
    description:
      "Потужна сонячна панель для дому та бізнесу з технологією Half-Cell та двосторонньою генерацією. Надійність, перевірена космічною галуззю.",
    features: [
      {
        text: "Half-Cell / PERC / Bifacial",
        tooltip: "Комбінація технологій для максимальної ефективності та надійності."
      },
      {
        text: "N-type",
        tooltip: "Покращена продуктивність при низькому освітленні та менша деградація."
      }
    ]
  }
];

const SolarPanels = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');
  const [sliding, setSliding] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const triggerSlide = (targetIndex, dir) => {
    if (sliding || targetIndex === current) return;
    setDirection(dir);
    setNextIndex(targetIndex);
    setSliding(true);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(targetIndex);
      setSliding(false);
      setNextIndex(null);
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      });
    }, 400);
  };

  const nextPanel = () => {
    const target = (current + 1) % panels.length;
    triggerSlide(target, 'next');
  };
  const prevPanel = () => {
    const target = (current - 1 + panels.length) % panels.length;
    triggerSlide(target, 'prev');
  };
  const goToPanel = (idx) => {
    if (idx === current) return;
    triggerSlide(idx, idx > current ? 'next' : 'prev');
  };

  // Swipe handlers
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextPanel();
    } else if (distance < -minSwipeDistance) {
      prevPanel();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="solar-panels" className="relative py-12 overflow-hidden">
      {/* Background pattern (same as Hero) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Headline */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Ключові компоненти вашої станції
        </h2>
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {panels.map((panel, idx) => (
            <div
              key={panel.model}
              className="rounded-2xl shadow-lg p-8 bg-white flex flex-col justify-center h-[26rem]"
            >
              <img
                src={panel.image}
                alt={panel.brand + ' ' + panel.model}
                className="w-full h-40 object-contain rounded-xl shadow mb-4 bg-gray-50"
              />
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{panel.brand}</h2>
                <h3 className="text-xl font-bold text-blue-500 mb-3">{panel.model}</h3>
                <div className="bg-blue-50 rounded-lg p-3 mb-2">
                  <div className="text-gray-700 font-medium mb-1">Модель: {panel.code}</div>
                  <div className="text-gray-700 font-medium mb-2">Потужність: {panel.power}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-3 border-l-4 border-blue-300">
                  <p className="text-gray-700 text-sm">{panel.description}</p>
                </div>
                <ul className="mb-4 space-y-1">
                  {panel.features.map((feature) => (
                    <li key={feature.text} className="flex items-center text-blue-700 font-medium text-sm">
                      <span className="mr-2">✓</span>
                      <Tooltip text={feature.tooltip}>
                        {feature.text}
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 bg-brand-yellow text-brand-black rounded-lg font-bold text-base hover:bg-yellow-400 hover:shadow-brand-hover transition"
                >
                  Обговорити комплектацію
                </button>
                <Link
                  to="/panels"
                  className="w-full py-3 border-2 border-black bg-black text-white rounded-lg font-bold text-base hover:bg-white hover:text-black transition text-center"
                >
                  Всі панелі та характеристики
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className="relative w-full h-[32rem]">
              {/* Outgoing panel (slides out) */}
              {sliding && nextIndex !== null && (
                <div
                  className="absolute w-full top-0 left-0 z-10 h-full flex flex-col justify-center"
                  style={{
                    animation: `${direction === 'next' ? 'slideOutLeft' : 'slideOutRight'} 0.4s forwards`
                  }}
                >
                  <div className="rounded-2xl shadow-lg p-4 bg-white flex flex-col justify-center h-full w-[85%] mx-auto">
                    <img
                      src={panels[current].image}
                      alt={panels[current].brand + ' ' + panels[current].model}
                      className="w-full h-28 object-contain rounded-xl shadow mb-2 bg-gray-50"
                    />
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-lg font-bold text-gray-800 mb-1">{panels[current].brand}</h2>
                      <h3 className="text-base font-bold text-blue-500 mb-2">{panels[current].model}</h3>
                      <div className="bg-blue-50 rounded-lg p-2 mb-1">
                        <div className="text-gray-700 font-medium mb-1 text-sm">Модель: {panels[current].code}</div>
                        <div className="text-gray-700 font-medium mb-1 text-sm">Потужність: {panels[current].power}</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-2 mb-2 border-l-4 border-blue-300">
                        <p className="text-gray-700 text-xs">{panels[current].description}</p>
                      </div>
                      <ul className="mb-2 space-y-1">
                        {panels[current].features.map((feature) => (
                          <li key={feature.text} className="flex items-center text-blue-700 font-medium text-xs">
                            <span className="mr-2">✓</span>
                            <Tooltip text={feature.tooltip}>
                              {feature.text}
                            </Tooltip>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3 mt-auto">
                      <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="w-full py-3 bg-brand-yellow text-brand-black rounded-lg font-bold text-sm hover:bg-yellow-400 hover:shadow-brand-hover transition"
                      >
                        Обговорити комплектацію
                      </button>
                      <Link
                        to="/panels"
                        className="w-full py-3 border-2 border-black bg-black text-white rounded-lg font-bold text-sm hover:bg-white hover:text-black transition text-center"
                      >
                        Всі панелі та характеристики
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {/* Incoming/current panel (slides in, or static when not sliding) */}
              <div
                key={panels[sliding && nextIndex !== null ? nextIndex : current].model}
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
                <div className="rounded-2xl shadow-lg p-4 bg-white flex flex-col justify-center h-full w-[85%] mx-auto">
                  <img
                    src={panels[sliding && nextIndex !== null ? nextIndex : current].image}
                    alt={panels[sliding && nextIndex !== null ? nextIndex : current].brand + ' ' + panels[sliding && nextIndex !== null ? nextIndex : current].model}
                    className="w-full h-28 object-contain rounded-xl shadow mb-2 bg-gray-50"
                  />
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-gray-800 mb-1">{panels[sliding && nextIndex !== null ? nextIndex : current].brand}</h2>
                    <h3 className="text-base font-bold text-blue-500 mb-2">{panels[sliding && nextIndex !== null ? nextIndex : current].model}</h3>
                    <div className="bg-blue-50 rounded-lg p-2 mb-1">
                      <div className="text-gray-700 font-medium mb-1 text-sm">Модель: {panels[sliding && nextIndex !== null ? nextIndex : current].code}</div>
                      <div className="text-gray-700 font-medium mb-1 text-sm">Потужність: {panels[sliding && nextIndex !== null ? nextIndex : current].power}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2 mb-2 border-l-4 border-blue-300">
                      <p className="text-gray-700 text-xs">{panels[sliding && nextIndex !== null ? nextIndex : current].description}</p>
                    </div>
                    <ul className="mb-2 space-y-1">
                      {panels[sliding && nextIndex !== null ? nextIndex : current].features.map((feature) => (
                        <li key={feature.text} className="flex items-center text-blue-700 font-medium text-xs">
                          <span className="mr-2">✓</span>
                          <Tooltip text={feature.tooltip}>
                            {feature.text}
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 mt-auto">
                    <button
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className="w-full py-3 bg-brand-yellow text-brand-black rounded-lg font-bold text-sm hover:bg-yellow-400 hover:shadow-brand-hover transition"
                    >
                      Обговорити комплектацію
                    </button>
                    <Link
                      to="/panels"
                      className="w-full py-3 border-2 border-black bg-black text-white rounded-lg font-bold text-sm hover:bg-white hover:text-black transition text-center"
                    >
                      Всі панелі та характеристики
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Arrows Below Card */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={prevPanel}
                className="bg-white/80 border border-brand-yellow text-brand-yellow rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-brand-yellow hover:text-white transition"
                aria-label="Previous panel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextPanel}
                className="bg-white/80 border border-brand-yellow text-brand-yellow rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-brand-yellow hover:text-white transition"
                aria-label="Next panel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {panels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPanel(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-brand-yellow w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to panel ${idx + 1}`}
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

export default SolarPanels; 