import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export const panelData = {
  'jinko-solar': {
    title: 'Tiger Neo N-type',
    brand: 'Jinko Solar',
    image: '/Jinko Solar Panels.webp',
    description: '590 Ват. Дволицевий модуль з подвійним склом.',
    specs: [
      { label: 'Модель', value: 'KM590N-72HL4-BDV' },
      { label: 'КІЛЬКІСТЬ КОМІРОК', value: '144（72×2）' },
      { label: 'МАКСИМАЛЬНА ПОТУЖНІСТЬ (PMAX)', value: '590 Вт' },
      { label: 'МАКСИМАЛЬНА НАПРУГА ЖИВЛЕННЯ (VMP)', value: '44.17 В' },
      { label: 'МАКСИМАЛЬНА СИЛА СТРУМУ (IMP)', value: '13.36 А' },
      { label: 'НАПРУГА ХОЛОСТОГО ХОДУ (VOC)', value: '52.90 В' },
      { label: 'СТРУМ КОРОТКОГО ЗАМИКАННЯ (ISC)', value: '14.07 А' },
      { label: 'ККД МОДУЛЯ', value: '22.84%' },
      { label: 'РОЗМІРИ', value: '2278 × 1134 × 30 мм' },
      { label: 'ВАГА', value: '31,0 кг' },
      { label: 'СКЛО', value: 'Антиблікове покриття 2,0 мм, термозміцнене скло' },
      { label: 'РАМА', value: 'Анодований алюмінієвий сплав IP68' },
      { label: 'ВИХІДНИЙ КАБЕЛЬ', value: '4,0 мм²' },
      { label: 'РОБОЧА ТЕМПЕРАТУРА', value: '-40 °C ~ +70 °C' },
      { label: 'МАКСИМАЛЬНА НАПРУГА СИСТЕМИ', value: '1500 В постійного струму (IEC)' },
      { label: 'МАКСИМАЛЬНИЙ НОМІНАЛ СЕРІЇ ЗАПОБІЖНИКІВ', value: '30 А' },
      { label: 'УМОВА ТЕСТУВАННЯ', value: 'STC' },
    ],
    features: [
      { label: 'N-Type Technology', value: 'Покращена продуктивність при низькому освітленні та менша деградація.' },
      { label: 'HOT 3.0 Technology', value: 'Підвищена надійність та ефективність.' },
      { label: 'Двостороння генерація', value: 'Додаткова генерація за рахунок відбитого світла.' },
      { label: 'Механічна міцність', value: 'Витримує навантаження до 5400 Па спереду та 2400 Па ззаду.' },
      { label: 'Гарантія', value: '12 років на продукт, 30 років на потужність.' },
    ],
    specFile: 'https://drive.google.com/file/d/1oAIphgIqpu-hP8_sINgjti2cRxBtIapt/view',
  },
  'htsaae-xseries': {
    title: 'HTSAEE X-series',
    brand: 'HT-SAAE',
    image: '/ht saae.webp',
    description: '705 Ват. Monocrystalline Bifacial.',
    specs: [
      { label: 'Модель', value: 'HT66-210(ND)-F 705W' },
      { label: 'ТИП', value: 'Monocrystalline Bifacial' },
      { label: 'КІЛЬКІСТЬ КОМІРОК', value: '132（6×22）' },
      { label: 'МАКСИМАЛЬНА ПОТУЖНІСТЬ (PMAX WP)', value: '705W' },
      { label: 'НАПРУГА ХОЛОСТОГО ХОДУ (VOC)', value: '48.0V' },
      { label: 'СТРУМ КОРОТКОГО ЗАМИКАННЯ (ISC)', value: '18.41A' },
      { label: 'МАКСИМАЛЬНА НАПРУГА ЖИВЛЕННЯ (VMP)', value: '41.1V' },
      { label: 'МАКСИМАЛЬНА СИЛА СТРУМУ (IMP)', value: '17.16A' },
      { label: 'ККД МОДУЛЯ (%)', value: '22.7%' },
      { label: 'РОЗМІРИ', value: '2384×1303×35 мм' },
      { label: 'ВАГА', value: '38.5(±0.5) кг' },
      { label: 'СКЛО', value: 'Загартоване скло з високим коефіцієнтом пропускання світла' },
      { label: 'NMOT', value: '43℃(±2℃)' },
      { label: 'РОБОЧА ТЕМПЕРАТУРА', value: '-40℃~+85℃' },
      { label: 'МАКСИМАЛЬНА НАПРУГА', value: '1500V DC (IEC)' },
      { label: 'МАКСИМАЛЬНИЙ НОМІНАЛ СЕРІЇ ЗАПОБІЖНИКІВ', value: '35A' },
    ],
    features: [
      { label: 'TOPCon технологія', value: 'Оптимізована структура для максимальної ефективності.' },
      { label: 'Half-Cell технологія', value: 'Зменшення теплових втрат та підвищення загальної потужності.' },
      { label: 'Двостороння генерація', value: 'Додаткова генерація до 25% з тильної сторони.' },
      { label: 'Висока надійність', value: 'Стійкість до PID ефекту та мікротріщин.' },
      { label: 'Гарантія', value: '15 років на продукт, 30 років на потужність.' },
    ],
    specFile: 'https://drive.google.com/file/d/1kDtTHSwxBG4LdjqwRJWN-3TWL75GFKlv/view',
  },
  'jinko-585': {
    title: 'Jinko 585W',
    brand: 'Jinko Solar',
    image: '/Jinko Solar Panels.webp',
    description: '585 Ват. Дволицевий модуль з подвійним склом.',
    specs: [
      { label: 'КІЛЬКІСТЬ КОМІРОК', value: '144（72×2）' },
      { label: 'РОЗМІРИ', value: '2278×1134×30 мм' },
      { label: 'ВАГА', value: '31,0 кг' },
      { label: 'СКЛО', value: 'Антиблікове покриття 2,0 мм, термозміцнене скло, анодований алюмінієвий сплав IP68' },
      { label: 'ВИХІДНИЙ КАБЕЛЬ', value: '4,0 мм2' },
      { label: 'РОБОЧА ТЕМПЕРАТУРА', value: '-40 °C ~ +70 °C' },
      { label: 'МАКСИМАЛЬНА НАПРУГА СИСТЕМИ', value: '1500 В постійного струму (IEC)' },
      { label: 'МАКСИМАЛЬНИЙ НОМІНАЛ СЕРІЇ ЗАПОБІЖНИКІВ', value: '30 А' },
      { label: 'УМОВА ТЕСТУВАННЯ', value: 'STC' },
      { label: 'МАКСИМАЛЬНА ПОТУЖНІСТЬ (PMAX)', value: '585' },
      { label: 'МАКСИМАЛЬНА НАПРУГА ЖИВЛЕННЯ (VMP)', value: '44.02' },
      { label: 'МАКСИМАЛЬНА СИЛА СТРУМУ (IMP)', value: '13.29' },
      { label: 'НАПРУГА ХОЛОСТОГО ХОДУ (VOC)', value: '52.70' },
      { label: 'СТРУМ КОРОТКОГО ЗАМИКАННЯ (ISC)', value: '14.01' },
      { label: 'ККД МОДУЛЯ (%)', value: '22.65' },
    ],
    features: [
      { label: 'Двостороння генерація', value: 'Додаткова генерація за рахунок відбитого світла.' },
      { label: 'Механічна міцність', value: 'Витримує навантаження до 5400 Па спереду та 2400 Па ззаду.' },
      { label: 'Гарантія', value: '12 років на продукт, 30 років на потужність.' },
    ],
    specFile: 'https://drive.google.com/file/d/1oAIphgIqpu-hP8_sINgjti2cRxBtIapt/view',
  },
};

const PanelDetails = () => {
  const { panelId } = useParams();
  const panel = panelData[panelId];
  const [showModal, setShowModal] = useState(false);

  if (!panel) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Панель не знайдено</h2>
        <Link to="/" className="text-brand-yellow underline">Повернутися на головну</Link>
      </div>
    );
  }

  // Breadcrumbs array
  const crumbs = [
    { name: 'Головна', path: '/' },
    { name: 'Каталог', path: '/panels' },
    { name: panel.title, path: `/panels/${panelId}` },
  ];

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="lg:sticky lg:top-24">
            <button
              className="focus:outline-none w-full"
              onClick={() => setShowModal(true)}
              aria-label="Відкрити фото у великому розмірі"
            >
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={panel.image} 
                  alt={panel.title} 
                  className="w-full h-auto rounded-lg object-contain cursor-zoom-in"
                />
              </div>
            </button>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{panel.title}</h1>
              <p className="text-xl text-gray-600">{panel.description}</p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ключові особливості</h2>
              <ul className="space-y-4">
                {panel.features.map((feature) => (
                  <li key={feature.label} className="flex items-start">
                    <svg className="h-6 w-6 text-brand-yellow flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{feature.label}:</span>
                      <p className="text-gray-600 mt-1">{feature.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Технічні характеристики</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {panel.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">{spec.label}</span>
                    <span className="text-base text-gray-900 mt-1">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Block */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <button 
                className="w-full bg-brand-yellow text-brand-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                onClick={() => window.location.href = '#contact'}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Запросити консультацію
              </button>
              
              {panel.specFile && (
                <a
                  href={panel.specFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 border-2 border-black bg-black text-brand-yellow rounded-lg font-bold text-lg hover:bg-brand-yellow hover:text-black transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Завантажити специфікацію
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for large image */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setShowModal(false)}
        >
          <img
            src={panel.image}
            alt={panel.title}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition"
            onClick={() => setShowModal(false)}
            aria-label="Закрити фото"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default PanelDetails; 