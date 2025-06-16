import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const panels = [
  {
    id: 'jinko-solar',
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
  {
    id: 'htsaae-xseries',
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
  {
    id: 'jinko-585',
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
    specFile: '',
  },
];

const PanelsCompare = () => {
  const [modalPanel, setModalPanel] = useState(null);
  const [openSpecs, setOpenSpecs] = useState({});
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderClick = () => {
    navigate('/');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleSpecs = (id) => {
    setOpenSpecs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
              <button
                className="mb-4 px-6 py-2 bg-brand-yellow text-brand-black rounded-lg font-semibold text-base hover:bg-yellow-400 transition"
                onClick={() => toggleSpecs(panel.id)}
                aria-expanded={!!openSpecs[panel.id]}
                aria-controls={`specs-${panel.id}`}
              >
                Детальніше <span className="text-xs text-gray-600">(Натисніть, щоб дізнатися більше)</span>
              </button>
              {openSpecs[panel.id] && (
                <div id={`specs-${panel.id}`} className="bg-blue-50 rounded-lg p-6 mb-4 animate-fade-in">
                  <h4 className="font-bold text-lg mb-4">Технічні характеристики:</h4>
                  <ul className="divide-y divide-blue-100">
                    {panel.specs.map((spec) => (
                      <li
                        key={spec.label}
                        className="py-2 flex flex-col md:flex-row md:items-center md:justify-between text-gray-800"
                      >
                        <span className="font-semibold block md:inline md:w-2/3">{spec.label}:</span>
                        <span className="block md:inline md:text-right md:w-1/3 mt-1 md:mt-0 break-words">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
                <button 
                  onClick={handleOrderClick}
                  className="flex-1 h-14 bg-brand-yellow text-brand-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-brand-hover transition"
                >
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