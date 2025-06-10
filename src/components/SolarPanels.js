import React from "react";
import { Link } from 'react-router-dom';

const panels = [
  {
    brand: "Jinko Solar",
    model: "Tiger Neo N-type",
    code: "JKM550N-72HL4-V",
    power: "550 Вт",
    image: "/Jinko Solar Panels.webp",
    detailsPath: "/panel/jinko-solar",
    moreLink: "/panel/jinko-solar",
    description:
      "Двостороння сонячна панель з технологією N-type, антирефлексійним склом і підвищеною ефективністю до 22%. Ідеально підходить для побудови домашніх та промислових СЕС.",
    features: [
      "Bifacial module with dual glass",
      "N-type"
    ]
  },
  {
    brand: "HT-SAAE",
    model: "HT54-18X",
    code: "HT54-18X",
    power: "545 Вт",
    image: "/ht saae.webp",
    detailsPath: "/panel/htsaae-xseries",
    moreLink: "/panel/htsaae-xseries",
    description:
      "Потужна сонячна панель для дому та бізнесу з технологією Half-Cell та двосторонньою генерацією. Надійність, перевірена космічною галуззю.",
    features: [
      "Half-Cell / PERC / Bifacial",
      "N-type"
    ]
  }
];

const SolarPanels = () => (
  <section id="solar-panels" className="py-12 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {panels.map((panel, idx) => (
          <div
            key={panel.model}
            className="rounded-2xl shadow-lg p-8 bg-white flex flex-col justify-between h-full"
          >
            <img
              src={panel.image}
              alt={panel.brand + ' ' + panel.model}
              className="w-full h-48 object-contain rounded-xl shadow mb-6 bg-gray-50"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{panel.brand}</h2>
              <h3 className="text-2xl font-bold text-blue-500 mb-6">{panel.model}</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="text-gray-700 font-medium mb-1">Модель: {panel.code}</div>
                <div className="text-gray-700 font-medium mb-4">Потужність: {panel.power}</div>
                <Link
                  to="/panels"
                  className="inline-flex items-center px-6 py-2 border-2 border-brand-yellow text-brand-yellow bg-white rounded-lg font-semibold hover:bg-brand-yellow hover:text-brand-black transition mb-2"
                >
                  <span className="mr-2">→</span> Дізнатися більше
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-300">
                <p className="text-gray-700 text-base">{panel.description}</p>
              </div>
              <ul className="mb-8 space-y-2">
                {panel.features.map((feature) => (
                  <li key={feature} className="flex items-center text-blue-700 font-medium">
                    <span className="mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-3 bg-brand-yellow text-brand-black rounded-lg font-bold text-lg hover:bg-yellow-400 hover:shadow-brand-hover transition"
            >
              Замовити
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolarPanels; 