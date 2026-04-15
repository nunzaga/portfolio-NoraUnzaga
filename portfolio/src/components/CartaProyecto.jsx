import React, { useRef } from 'react';

const CartaProyecto = ({ proyecto }) => {
  const modalRef = useRef(null); // Segundo Hook: useRef

  return (
    <div className="card">
      <img src={proyecto.imagen} alt={proyecto.nombre} />
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.tecnologia}</p>
      <button onClick={() => modalRef.current.showModal()}>Ver detalles</button>

      <dialog ref={modalRef} className="modal">
        <h2>{proyecto.nombre}</h2>
        <p>{proyecto.descripcion_larga}</p>
        <p><strong>Tecnologías:</strong> {proyecto.tecnologia}</p>
        <button onClick={() => modalRef.current.close()}>Cerrar</button>
      </dialog>
    </div>
  );
};

export default CartaProyecto;