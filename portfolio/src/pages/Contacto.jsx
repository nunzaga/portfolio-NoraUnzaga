import React, { useState } from 'react';

const Contacto = () => {
  
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
          <p><strong>TELÉFONO:</strong> +34 111 11 11 11</p> 
          <p><strong>EMAIL:</strong> nora.unzaga@gmail.com</p> 
          <p><strong>LINKEDIN:</strong> linkedin.com/in/nora-unzaga</p> 
          <p><strong>GITHUB:</strong> github.com/NoraUnzaga</p>
        </div>

      </div>
    </section>
  );
};

export default Contacto;