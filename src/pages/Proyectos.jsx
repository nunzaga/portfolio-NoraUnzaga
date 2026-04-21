import React, { useState } from 'react';
import CartaProyecto from '../components/CartaProyecto';

import tamagotchiImg from '../assets/Tamagotchi.png';
import unoImg from '../assets/UNO.png';
import vitoMaiteImg from '../assets/VitoMaite.png';
import detectorImg from '../assets/detector.png';
import floristeriaImg from '../assets/Floristeria.png';

const misProyectos = [
  { id: 1, nombre: 'Tamagotchi', tecnologia: 'Java', descripcion_larga: 'Mascota virtual interactiva con sistema de alimentación, limpieza, juego y estadísticas de salud.', imagen: tamagotchiImg },
  { id: 2, nombre: 'UNO', tecnologia: 'Java', descripcion_larga: 'Juego de cartas UNO desarrollado en Java con lógica completa de turnos, reglas especiales y gestión de baraja.', imagen: unoImg },
  { id: 3, nombre: 'VitoMaite', tecnologia: 'Java', descripcion_larga: 'Clon de Tinder con autenticación de usuarios, sistema de matches y chat en tiempo real.', imagen: vitoMaiteImg },
  { id: 4, nombre: 'Detector de Humedad y Temperatura', tecnologia: 'NodeRed', descripcion_larga: 'Sistema IoT que monitorea temperatura y humedad, muestra datos en tiempo real con gráficos interactivos y alertas automáticas.', imagen: detectorImg },
  { id: 5, nombre: 'Floristeria', tecnologia: 'Odoo', descripcion_larga: 'Simulación de negocio de floristería con gestión de inventario, ventas, facturación y clientes.', imagen: floristeriaImg },


];

const Proyectos = () => {
  const [filtro, setFiltro] = useState('Todos');

  const proyectosFiltrados = filtro === 'Todos' 
    ? misProyectos 
    : misProyectos.filter(p => p.tecnologia === filtro);

  return (
    <section id="proyectos">
      <h2>MIS PROYECTOS</h2>
      <select onChange={(e) => setFiltro(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Odoo">ERP</option>
        <option value="Java">Java</option>
        <option value="NodeRed">NodeRed</option>
      </select>
      <div className="grid-proyectos">
        {proyectosFiltrados.map(p => <CartaProyecto key={p.id} proyecto={p} />)}
      </div>
    </section>
  );
};
export default Proyectos;