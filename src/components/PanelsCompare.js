import React, { useState } from 'react';

const panels = [
  {
    id: 'jinko-solar',
    title: 'Tiger Neo N-type',
    brand: 'Jinko Solar',
    image: '/Jinko Solar Panels.webp',
    description: 'Двостороння сонячна панель з технологією N-type, антирефлексійним склом і підвищеною ефективністю. Модель 72HL4-BDV потужністю 575-600 Вт ідеально підходить для побудови домашніх та промислових СЕС.',
    specs: [
      { label: 'Модель', value: 'JKM575-600N-72HL4-BDV' },
      { label: 'Потужність', value: '575-600 Вт' },
      { label: 'Ефективність', value: 'до 23.93%' },
      { label: 'Розміри', value: '2278 × 1134 × 30 мм' },
      { label: 'Вага', value: '31.5 кг' },
      { label: 'Клас захисту', value: 'IP68' },
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
  {
    id: 'htsaae-xseries',
    title: 'HTSAEE X-series',
    brand: 'HT-SAAE',
    image: '/ht saae.webp',
    description: 'Високоефективна сонячна панель HT72-18X(ND)-F з технологією Half-Cell та двосторонньою генерацією. Надійність та якість, підтверджені космічною галуззю.',
    specs: [
      { label: 'Модель', value: 'HT72-18X(ND)-F' },
      { label: 'Потужність', value: '585-605 Вт' },
      { label: 'Ефективність', value: 'до 24.6%' },
      { label: 'Розміри', value: '2278 × 1134 × 30 мм' },
      { label: 'Вага', value: '32.5 ±0.5 кг' },
      { label: 'Клас захисту', value: 'IP68' },
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
];

const PanelsCompare = () => {
  const [modalPanel, setModalPanel] = useState(null);

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Порівняйте наші сонячні панелі</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {panels.map(panel => (
            <div key={panel.id} className="h-full flex flex-col justify-between border rounded-2xl shadow-lg p-8 bg-white">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2 mt-2">{panel.title}</h3>
              <div className="flex justify-center items-start mb-6 min-h-[320px]">
                <button
                  className="focus:outline-none w-full"
                  onClick={() => setModalPanel(panel)}
                  aria-label="Відкрити фото у великому розмірі"
                >
                  <img src={panel.image} alt={panel.title} className="w-full max-w-md max-h-80 rounded-xl object-contain cursor-zoom-in" />
                </button>
              </div>
              <div className="mb-4 text-lg text-gray-700">{panel.description}</div>
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h4 className="font-bold text-lg mb-4">Технічні характеристики:</h4>
                <ul className="space-y-2">
                  {panel.specs.map((spec) => (
                    <li key={spec.label} className="flex justify-between text-gray-800">
                      <span className="font-semibold">{spec.label}:</span> <span>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-lg mb-4">Ключові особливості:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {panel.features.map((feature) => (
                    <li key={feature.label}>
                      <span className="font-semibold">{feature.label}:</span> {feature.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 h-14 bg-brand-yellow text-brand-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-brand-hover transition">
                  Замовити
                </button>
                <a
                  href={panel.specFile}
                  download
                  className="flex-1 h-14 inline-flex items-center justify-center px-6 py-3 bg-brand-yellow text-brand-black rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-brand-hover transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                  Завантажити специфікацію
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for large image */}
      {modalPanel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setModalPanel(null)}
        >
          <img
            src={modalPanel.image}
            alt={modalPanel.title}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition"
            onClick={() => setModalPanel(null)}
            aria-label="Закрити фото"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default PanelsCompare; 