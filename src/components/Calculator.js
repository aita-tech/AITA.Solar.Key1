import React, { useState } from 'react';

const Calculator = () => {
  const [formData, setFormData] = useState({
    monthlyBill: '',
    roofArea: ''
  });
  const [results, setResults] = useState(null);

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

    // Real-world calculation constants
    const averagePanelPower = 585; // watts - minimum power of actual panels
    const panelsPerSqMeter = 0.5; // panels per square meter based on modern panel size
    const totalPanels = Math.floor(roofArea * panelsPerSqMeter);
    const systemPower = totalPanels * averagePanelPower / 1000; // kW
    const monthlyGeneration = systemPower * 120; // kWh per month
    const totalGeneratedValue = monthlyGeneration * 4; // UAH per month
    const actualBillSavings = Math.min(monthlyBill, totalGeneratedValue);
    const potentialIncome = totalGeneratedValue - actualBillSavings;
    const newBill = Math.max(0, monthlyBill - actualBillSavings);
    const annualSavings = (actualBillSavings + potentialIncome) * 12; // UAH per year
    const systemCost = systemPower * 25000; // UAH per kW
    const paybackPeriod = systemCost / annualSavings;

    setResults({
      systemPower: systemPower.toFixed(1),
      panelCount: totalPanels,
      monthlyGeneration: monthlyGeneration.toFixed(0),
      monthlySavings: actualBillSavings.toFixed(0),
      potentialIncome: potentialIncome.toFixed(0),
      newBill: newBill.toFixed(0),
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
    setResults(null);
  };

  const formatCurrency = (amount) => {
    return parseInt(amount).toLocaleString() + ' грн';
  };

  return (
    <section id="calculator" className="relative py-12 sm:py-16 lg:py-20 scroll-mt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>
        </div>
      </div>

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
          {!results ? (
            // Input Form
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
          ) : (
            // Unified Dashboard Results Display
            <>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-brand-black mb-6">
                  Ваш персональний розрахунок
                </h3>
                {/* Main Financial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Bill Metrics */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Ваші поточні витрати</p>
                      <p className="text-2xl font-bold text-gray-800">{formatCurrency(formData.monthlyBill)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Новий місячний рахунок</p>
                      <p className="text-2xl font-bold text-brand-black">{formatCurrency(results.newBill)}</p>
                    </div>
                  </div>
                  {/* Right: Savings Metrics */}
                  <div className="space-y-4 flex flex-col justify-center">
                    <div>
                      <p className="text-sm text-brand-black/80">Місячна економія на рахунку</p>
                      <p className="text-4xl font-bold text-green-600">{formatCurrency(results.monthlySavings)}</p>
                    </div>
                  </div>
                </div>
                {/* Separator */}
                <hr className="my-6" />
                {/* Technical Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-brand text-center">
                    <p className="text-sm text-gray-600">Потужність системи</p>
                    <p className="text-xl font-bold text-brand-black">{results.systemPower} кВт</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-brand text-center">
                    <p className="text-sm text-gray-600">Кількість панелей</p>
                    <p className="text-xl font-bold text-brand-black">{results.panelCount} шт</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-brand text-center">
                    <p className="text-sm text-gray-600">Термін окупності</p>
                    <p className="text-xl font-bold text-brand-black">{results.paybackPeriod} років</p>
                  </div>
                </div>
                {/* Annual Savings (below technicals for compactness) */}
                <div className="text-center mb-6">
                  <p className="text-sm text-brand-black/80">Загальна річна економія</p>
                  <p className="text-2xl font-bold text-green-800">{formatCurrency(results.annualSavings)}</p>
                </div>
              </div>
              {/* CTA Buttons Block */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 bg-brand-black text-white py-4 rounded-brand font-semibold hover:bg-gray-800 transition-all text-base sm:text-lg"
                >
                  📞 Отримати детальний розрахунок та консультацію
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-brand hover:bg-gray-100 transition-all font-medium"
                >
                  🔄 Розрахувати знову
                </button>
              </div>
            </>
          )}

          {/* Disclaimer */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
              *Розрахунки є орієнтовними та базуються на середньостатистичних даних. Для отримання точної інформації залиште заявку або зателефонуйте за вказаним номером.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/40 to-white/0 pointer-events-none z-20"></div>
    </section>
  );
};

export default Calculator; 