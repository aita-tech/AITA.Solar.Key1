import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PanelFilters from './PanelFilters';
import { panelData } from './PanelDetails';
import Breadcrumbs from './Breadcrumbs';

const PanelSummaryCard = ({ panel, id }) => {
  // Find the power spec from the specs array
  const powerSpec = panel.specs.find(spec => 
    spec.label.includes('ПОТУЖНІСТЬ') || 
    spec.label.includes('PMAX')
  );

  return (
    <Link to={`/panel/${id}`} className="block group">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-w-16 aspect-h-9 bg-gray-50">
          <img
            src={panel.image}
            alt={panel.title}
            className="w-full h-48 object-contain p-4"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
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
            
            <div className="text-brand-yellow font-semibold group-hover:underline flex items-center">
              Детальніше
              <svg 
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const PanelsCatalog = () => {
  // State for filters and sorting
  const [filters, setFilters] = useState({ brand: 'all', power: 'all' });
  const [sortBy, setSortBy] = useState('default');

  // Breadcrumbs array
  const crumbs = [
    { name: 'Головна', path: '/' },
    { name: 'Сонячні панелі', path: '/panels' },
  ];

  // Extract unique brands from panel data
  const brands = useMemo(() => {
    const uniqueBrands = new Set(Object.values(panelData).map(panel => panel.brand));
    return Array.from(uniqueBrands);
  }, []);

  // Define power ranges
  const powerRanges = [
    { label: 'Будь-яка потужність', value: 'all' },
    { label: 'До 500 Вт', value: '0-500' },
    { label: '500-600 Вт', value: '500-600' },
    { label: '600-700 Вт', value: '600-700' },
    { label: '700+ Вт', value: '700+' },
  ];

  // Filter and sort panels
  const filteredAndSortedPanels = useMemo(() => {
    let result = Object.entries(panelData);

    // Apply filters
    if (filters.brand !== 'all') {
      result = result.filter(([_, panel]) => panel.brand === filters.brand);
    }

    if (filters.power !== 'all') {
      result = result.filter(([_, panel]) => {
        const powerSpec = panel.specs.find(spec => 
          spec.label.includes('ПОТУЖНІСТЬ') || 
          spec.label.includes('PMAX')
        );
        if (!powerSpec) return false;
        
        const power = parseInt(powerSpec.value);
        switch (filters.power) {
          case '0-500': return power < 500;
          case '500-600': return power >= 500 && power < 600;
          case '600-700': return power >= 600 && power < 700;
          case '700+': return power >= 700;
          default: return true;
        }
      });
    }

    // Apply sorting
    result.sort(([_, panelA], [__, panelB]) => {
      const powerA = parseInt(panelA.specs.find(spec => 
        spec.label.includes('ПОТУЖНІСТЬ') || 
        spec.label.includes('PMAX')
      )?.value || '0');
      
      const powerB = parseInt(panelB.specs.find(spec => 
        spec.label.includes('ПОТУЖНІСТЬ') || 
        spec.label.includes('PMAX')
      )?.value || '0');

      switch (sortBy) {
        case 'power-asc':
          return powerA - powerB;
        case 'power-desc':
          return powerB - powerA;
        default:
          return 0;
      }
    });

    return result;
  }, [filters, sortBy]);

  // Add cleanup effect
  useEffect(() => {
    // Store original overflow value
    const originalOverflow = document.body.style.overflow;
    
    return () => {
      // Restore original overflow value
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs crumbs={crumbs} />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Сонячні панелі</h1>
          <p className="text-gray-600">
            Виберіть оптимальну сонячну панель для вашого проекту
          </p>
        </div>

        {/* Filters */}
        <PanelFilters
          filters={filters}
          setFilters={setFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
          brands={brands}
          powerRanges={powerRanges}
        />

        {/* Results Count */}
        <div className="text-sm text-gray-500 mb-6">
          Знайдено {filteredAndSortedPanels.length} панелей
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedPanels.map(([id, panel]) => (
            <PanelSummaryCard
              key={id}
              id={id}
              panel={panel}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedPanels.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Панелі не знайдено
            </h3>
            <p className="text-gray-500">
              Спробуйте змінити параметри фільтрації
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelsCatalog; 