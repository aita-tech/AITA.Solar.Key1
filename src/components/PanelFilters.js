import React from 'react';

const PanelFilters = ({ 
  filters, 
  setFilters, 
  sortBy, 
  setSortBy,
  brands,
  powerRanges 
}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
      {/* Brand Filter */}
      <div className="w-full sm:w-auto">
        <select
          value={filters.brand}
          onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
          className="block w-full sm:w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-brand-yellow focus:outline-none focus:ring-brand-yellow sm:text-sm"
        >
          <option value="all">Всі бренди</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Power Range Filter */}
      <div className="w-full sm:w-auto">
        <select
          value={filters.power}
          onChange={(e) => setFilters(prev => ({ ...prev, power: e.target.value }))}
          className="block w-full sm:w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-brand-yellow focus:outline-none focus:ring-brand-yellow sm:text-sm"
        >
          {powerRanges.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Control */}
      <div className="w-full sm:w-auto">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="block w-full sm:w-48 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-brand-yellow focus:outline-none focus:ring-brand-yellow sm:text-sm"
        >
          <option value="default">Сортувати за: замовчуванням</option>
          <option value="power-desc">Потужність (спадання)</option>
          <option value="power-asc">Потужність (зростання)</option>
        </select>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={() => {
          setFilters({ brand: 'all', power: 'all' });
          setSortBy('default');
        }}
        className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow"
      >
        Скинути фільтри
      </button>
    </div>
  );
};

export default PanelFilters; 