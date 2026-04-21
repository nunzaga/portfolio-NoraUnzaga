import React from 'react';

const Formacion = () => {
  const estudios = [
    {
      titulo: "Grado en Ingeniería Informática en Gestión y Sistemas de la Información ",
      centro: "UPV/EHU",
      periodo: "2022 - ...",
      descripcion: "Gestión de sistemas de información, bases de datos y arquitectura de software. Enfoque en proyectos tecnológicos y optimización de procesos."
    },
    {
      titulo: "Bachillerato Tecnológico",
      centro: "Instituto Usandizaga Peñaflorida",
      periodo: "2020 - 2022",
      descripcion: "Fundamentos en matemáticas, física y tecnología. Base analítica para la ingeniería."
    }
  ];

  return (
    <section id="formacion" className="formacion-section">
      <h2>FORMACIÓN</h2>
      <div className="formacion-contenido">
        <div className="formacion-imagen">
          <img 
            src="/src/assets/foto-trabajando.png" 
            alt="Formación académica" 
            className="formacion-img"
          />
        </div>
        <div className="formacion-textos">
          {estudios.map((item, index) => (
            <div key={index} className="formacion-item">
              <h3>{item.titulo}</h3>
              <p className="centro">{item.centro}</p>
              <p className="periodo">{item.periodo}</p>
              <p className="descripcion">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacion;