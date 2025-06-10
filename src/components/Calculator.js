import React, { useState } from 'react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    monthlyBill: '',
    roofArea: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSavings = () => {
    const monthlyBill = parseFloat(formData.monthlyBill);
    const roofArea = parseFloat(formData.roofArea);
    
    if (!monthlyBill || !roofArea) return;

    // Basic calculation
    const averagePanelPower = 300; // watts
    const panelsPerSqMeter = 0.15;
    const totalPanels = Math.floor(roofArea * panelsPerSqMeter);
    const systemPower = totalPanels * averagePanelPower / 1000; // kW
    const monthlyGeneration = systemPower * 120; // kWh per month
    const annualSavings = monthlyGeneration * 12 * 4; // UAH per year
    const systemCost = systemPower * 25000; // UAH per kW
    const paybackPeriod = systemCost / annualSavings;

    setResult({
      systemPower: systemPower.toFixed(1),
      panelCount: totalPanels,
      monthlyGeneration: monthlyGeneration.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1)
    });
  };

  const resetCalculator = () => {
    setFormData({
      monthlyBill: '',
      roofArea: ''
    });
    setResult(null);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 lg:py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3 sm:mb-4">
            ⚡ Калькулятор економії
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Розрахуйте потенційну економію від встановлення сонячних панелей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Calculator Form - Mobile Optimized */}
            <div className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-brand">
              <h3 className="text-xl sm:text-2xl font-semibold text-brand-black mb-4 sm:mb-6">
                💻 Введіть ваші дані
              </h3>
              
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-brand-black font-medium mb-3 text-sm sm:text-base">
                    Середній місячний рахунок за електроенергію (грн)
                  </label>
                  <input
                    type="number"
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleInputChange}
                    placeholder="2000"
                    className="w-full px-4 py-4 text-base rounded-brand border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-2">Введіть суму з останнього рахунку</p>
                </div>

                <div>
                  <label className="block text-brand-black font-medium mb-3 text-sm sm:text-base">
                    Площа даху (м²)
                  </label>
                  <input
                    type="number"
                    name="roofArea"
                    value={formData.roofArea}
                    onChange={handleInputChange}
                    placeholder="50"
                    className="w-full px-4 py-4 text-base rounded-brand border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-2">Орієнтовна площа придатна для панелей</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button
                  onClick={calculateSavings}
                  disabled={!formData.monthlyBill || !formData.roofArea}
                  className="flex-1 bg-brand-yellow hover:brand-gradient-hover text-brand-black px-6 py-4 rounded-brand font-semibold transition-all hover:shadow-brand-hover disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg touch-manipulation"
                >
                  🧮 Розрахувати економію
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-brand hover:bg-gray-100 transition-all font-medium touch-manipulation"
                >
                  🔄 Очистити
                </button>
              </div>
            </div>

            {/* Results - Mobile Optimized */}
            <div className={`transition-all duration-500 ${result ? 'bg-gradient-to-br from-brand-yellow to-yellow-400' : 'bg-gray-100'} p-5 sm:p-6 lg:p-8 rounded-brand text-brand-black`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                {result ? '📊 Ваші результати' : '💡 Результати розрахунку'}
              </h3>
              
              {result ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-brand">
                      <div className="text-lg sm:text-2xl font-bold">{result.systemPower} кВт</div>
                      <div className="text-xs sm:text-sm opacity-90">Потужність системи</div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-brand">
                      <div className="text-lg sm:text-2xl font-bold">{result.panelCount} шт</div>
                      <div className="text-xs sm:text-sm opacity-90">Сонячних панелей</div>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-brand">
                    <div className="text-lg sm:text-2xl font-bold">{result.monthlyGeneration} кВт·год</div>
                    <div className="text-xs sm:text-sm opacity-90">Виробництво на місяць</div>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-brand border-2 border-white border-opacity-30">
                    <div className="text-xl sm:text-2xl font-bold text-green-800">{parseInt(result.annualSavings).toLocaleString()} грн</div>
                    <div className="text-xs sm:text-sm opacity-90 font-medium">💰 Річна економія</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-brand">
                      <div className="text-lg sm:text-2xl font-bold">{parseInt(result.systemCost).toLocaleString()} грн</div>
                      <div className="text-xs sm:text-sm opacity-90">Вартість системи</div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-brand">
                      <div className="text-lg sm:text-2xl font-bold">{result.paybackPeriod} років</div>
                      <div className="text-xs sm:text-sm opacity-90">Термін окупності</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-brand-black text-brand-white py-4 rounded-brand font-semibold hover:bg-gray-800 transition-all text-base sm:text-lg mt-4 sm:mt-6 touch-manipulation"
                  >
                    📞 Отримати детальний розрахунок
                  </button>
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-4xl sm:text-6xl mb-4">🌞</div>
                  <p className="text-base sm:text-lg opacity-90 px-2">
                    Заповніть форму для розрахунку потенційної економії
                  </p>
                  <p className="text-sm opacity-75 mt-2">
                    Дізнайтеся за 30 секунд скільки ви зекономите
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info - Mobile Optimized */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
              <div className="text-xl sm:text-2xl font-bold text-brand-yellow mb-2">25 років</div>
              <div className="text-gray-600 text-xs sm:text-sm">Гарантія виробника</div>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
              <div className="text-xl sm:text-2xl font-bold text-brand-yellow mb-2">90%</div>
              <div className="text-gray-600 text-xs sm:text-sm">Ефективність після 25 років</div>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-brand">
              <div className="text-xl sm:text-2xl font-bold text-brand-yellow mb-2">0 грн</div>
              <div className="text-gray-600 text-xs sm:text-sm">Вартість обслуговування</div>
            </div>
          </div>

          {/* Disclaimer about calculations */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
              *Розрахунки є орієнтовними та базуються на середньостатистичних даних. Для отримання точної інформації залиште заявку або зателефонуйте за вказаним номером.
            </p>
          </div>

          {/* Mobile-specific CTA */}
          <div className="mt-8 sm:hidden">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-brand border border-green-200">
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-3">
                  💡 <strong>Хочете більш точний розрахунок?</strong>
                </p>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-brand-yellow text-brand-black py-3 rounded-brand font-semibold text-sm touch-manipulation"
                >
                  Отримати безкоштовну консультацію
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator; 