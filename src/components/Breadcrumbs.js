import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="mb-6" aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.path || crumb.name} className="flex items-center">
              {!isLast ? (
                <Link
                  to={crumb.path}
                  className="text-gray-600 hover:text-brand-yellow transition-colors"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gray-800 font-semibold">{crumb.name}</span>
              )}
              {!isLast && (
                <span className="mx-2 text-gray-400">&gt;</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 