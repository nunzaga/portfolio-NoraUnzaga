import React from 'react';
import ThemeSelector from './ThemeSelector';

const BarraNavegacion = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Nombre que aparece en tu PDF [cite: 1] */}
        <span>Nora Unzaga Aranzabal</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#proyectos">PROYECTOS</a></li>
        <li><a href="#formacion">FORMACIÓN</a></li>
        <li><a href="#contacto">CONTACTO</a></li>
      </ul>
      <div className="theme-selector-container">
        <ThemeSelector theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default BarraNavegacion;