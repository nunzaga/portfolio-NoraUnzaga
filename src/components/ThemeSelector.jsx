import React from 'react';

const ThemeSelector = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
    </button>
  );
};

export default ThemeSelector;