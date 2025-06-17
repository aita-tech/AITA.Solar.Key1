import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {/* Animated Checkmark */}
        <div className="w-24 h-24 mx-auto mb-8">
          <svg className="w-full h-full text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke-current" strokeWidth="2" cx="12" cy="12" r="10" fill="none" />
            <path
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12l3 3 5-5"
              fill="none"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-brand-black mb-4">
          Дякуємо за вашу заявку!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Ми зв'яжемося з вами найближчим часом для уточнення деталей.
        </p>

        <div className="bg-white p-6 rounded-brand shadow-lg">
          <h2 className="text-xl font-semibold text-brand-black mb-4">
            Що відбуватиметься далі:
          </h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">1</span>
              <span>Онлайн консультація з експертом</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">2</span>
              <span>Технічна оцінка та планування</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">3</span>
              <span>Індивідуальний розрахунок та пропозиція</span>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Перенаправлення на головну сторінку через кілька секунд...
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage; 