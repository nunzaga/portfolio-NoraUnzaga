import React, { useState } from 'react';
import CartaProyecto from '../components/CartaProyecto';

const misProyectos = [
  { id: 1, nombre: 'Tamagotchi', tecnologia: 'JavaScript', descripcion_larga: 'Un juego retro...', imagen: 'url' },
  { id: 2, nombre: 'E-commerce', tecnologia: 'React', descripcion_larga: 'Tienda online...', imagen: 'url' },
];

const Proyectos = () => {
  const [filtro, setFiltro] = useState('Todos');

  const proyectosFiltrados = filtro === 'Todos' 
    ? misProyectos 
    : misProyectos.filter(p => p.tecnologia === filtro);

  return (
    <section id="proyectos">
      <h2>Mis Proyectos</h2>
      <select onChange={(e) => setFiltro(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
      </select>
      <div className="grid-proyectos">
        {proyectosFiltrados.map(p => <CartaProyecto key={p.id} proyecto={p} />)}
      </div>
    </section>
  );
};
export default Proyectos;