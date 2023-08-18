import React from "react";
import "./App.css";

const Card = ({ usuario, falla }) => {
  return (
    <div>
      {usuario.map((usuario, index) => (
        <div className="exito" key={index}>
          <h2>El envio a sido exitoso</h2>
          <p>Nombre :{usuario.nombre}</p>
          <p>Pais : {usuario.pais}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
