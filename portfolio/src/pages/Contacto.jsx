import React, { useState } from 'react';

const Contacto = () => {
  // Estado para manejar un formulario básico (opcional, pero suma puntos)
  const [mensaje, setMensaje] = useState({ nombre: '', email: '', texto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${mensaje.nombre}, me pondré en contacto contigo pronto.`);
  };

  return (
    <section id="contacto" className="contacto-section">
      <h2>CONTACTO</h2>
      
      <div className="contacto-container">
        <div className="contacto-info">
          <p><strong>TELÉFONO:</strong> +34 XXX XX XX XX</p> [cite: 40]
          <p><strong>EMAIL:</strong> nora.unzaga@ejemplo.com</p> [cite: 41]
          <p><strong>LINKEDIN:</strong> linkedin.com/in/nora-unzaga</p> [cite: 41]
          <p><strong>GITHUB:</strong> github.com/NoraUnzaga</p>
        </div>

      </div>
    </section>
  );
};

export default Contacto;