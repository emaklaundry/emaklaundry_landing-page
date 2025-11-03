import React from 'react';

export const NavLink = ({ children, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-fuchsia-600 text-white'
        : 'text-gray-700 hover:bg-fuchsia-100 hover:text-fuchsia-700'
    }`}
  >
    {children}
  </button>
);


