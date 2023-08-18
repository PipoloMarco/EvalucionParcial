import { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [errores, setError] = useState("");
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");

  const agregarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  const agregarDatos = (e) => {
    if (nombre.length >= 3 && pais.length > 6) {
      e.preventDefault();
      agregarUsuario({ nombre, pais });
      setNombre("");
      setPais("");
      setError("");
    } else {
      e.preventDefault();
      setError("Error ingrese los datos correctos de nuevo");
    }
  };

  return (
    <>
      <h1>Formulario</h1>
      <h2>Ingrese sus Datos</h2>
      <div className="formulario">
        <form onSubmit={agregarDatos}>
          <div>
            <h2>ingrese su nombre</h2>
            <input
              type="text"
              placeholder="ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div>
            <h2>ingrese un pais con mas de 6 carateres</h2>
            <input
              type="text"
              placeholder="ingrese su un pais"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
        <h2 className="error">{errores}</h2>

        <Card usuario={usuarios} />
      </div>
    </>
  );
};

export default App;
