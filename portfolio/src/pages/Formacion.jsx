import React from 'react';

const Formacion = () => {
  // Datos de ejemplo basados en el diseño del PDF
  const estudios = [
    {
      titulo: "Grado en Diseño y Desarrollo de Software",
      centro: "Universidad de Deusto",
      periodo: "2021 - 2025"
    },
    {
      titulo: "Bachillerato Tecnológico",
      centro: "Instituto Ejemplo",
      periodo: "2019 - 2021"
    }
  ];

  return (
    <section id="formacion" className="formacion-section">
      <h2>FORMACIÓN</h2>
      <div className="formacion-list">
        {estudios.map((item, index) => (
          <div key={index} className="formacion-item">
            <h3>{item.titulo}</h3>
            <p className="centro">{item.centro}</p>
            <p className="periodo">{item.periodo}</p>
            {/* El texto "BCKBDKB..." del PDF representaría la descripción detallada */}
            <p className="descripcion-relleno">
              Desarrollo de competencias técnicas en programación, bases de datos y diseño de interfaces de usuario.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Formacion;