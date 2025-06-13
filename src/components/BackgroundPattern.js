import React from 'react';

const BackgroundPattern = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPattern; 