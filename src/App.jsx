
import React from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Formacion from './pages/Formacion';
import Contacto from './pages/Contacto';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './components/ThemeManager';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <BarraNavegacion theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Inicio />
        <Proyectos />
        <Formacion />
        <Contacto />
      </main>
    </div>
  );
}

export default App;