import React from 'react';
import { Link } from 'react-router-dom';
import { panelData } from './PanelDetails';

const FeaturedPanelCard = ({ panel, id }) => {
  // Find the power spec from the specs array
  const powerSpec = panel.specs.find(spec => 
    spec.label.includes('ПОТУЖНІСТЬ') || 
    spec.label.includes('PMAX')
  );

  return (
    <div className="flex-shrink-0 w-5/6 sm:w-80 snap-center">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 h-full">
        <div className="aspect-w-16 aspect-h-9 bg-gray-50">
          <img
            src={panel.image}
            alt={panel.title}
            className="w-full h-48 object-contain p-4"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {panel.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {panel.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {powerSpec && (
                <div className="text-sm text-gray-500">
                  Потужність: <span className="font-semibold text-gray-900">{powerSpec.value}</span>
                </div>
              )}
              <div className="text-sm text-gray-500">
                Бренд: <span className="font-semibold text-gray-900">{panel.brand}</span>
              </div>
            </div>
            
            <Link 
              to={`/panel/${id}`}
              className="text-brand-yellow font-semibold hover:text-brand-yellow-dark transition-colors"
            >
              Детальніше →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedPanels = () => {
  // Get first 4 panels for the carousel
  const featuredPanels = Object.entries(panelData).slice(0, 4);

  return (
    <section id="solar-panels" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ключові компоненти вашої станції
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Виберіть надійне обладнання для вашої сонячної електростанції
          </p>
        </div>

        {/* Horizontal scrollable carousel */}
        <div className="flex overflow-x-auto space-x-4 py-4 snap-x snap-mandatory scrollbar-hide">
          {featuredPanels.map(([id, panel]) => (
            <FeaturedPanelCard key={id} id={id} panel={panel} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/panels"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-black bg-brand-yellow hover:bg-brand-yellow-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow"
          >
            Переглянути все обладнання
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPanels; 