import React from "react";

function Gimnasios({ gimnasio }) {
  return (
    <div className="gimnasio-card">
      <header>
        <img src={gimnasio.logo} alt="Logo Gimnasio" className="logo" />
        <h2 className="nombre">{gimnasio.nombre}</h2>
        <p className="ubicacion">{gimnasio.direccion}</p>
        <p> <a href={gimnasio.maps}>Ver direccion</p>
      </header>

      <div className="info">
        <h3>Días de clase</h3>
        <ul>
          {gimnasio.horarios.map((horario, idx) => (
            <li key={idx}>{horario}</li>
          ))}
        </ul>

        <h3>Profesores</h3>
        <ul>
          {gimnasio.instructores.map((instructor, idx) => (
            <li key={idx}>{instructor}</li>
          ))}
        </ul>
      </div>

      <div className="acciones">
        <a
          href={gimnasio.whatsapp}
          className="boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        {/* ✅ Renderizar redes solo si existen y no están vacías */}
        {gimnasio.redes?.length > 0 &&
          gimnasio.redes.map((red, idx) => (
            <a
              key={idx}
              href={red.url}
              className="boton"
              target="_blank"
              rel="noopener noreferrer"
            >
              {red.nombre}
            </a>
          ))}
      </div>
    </div>
  );
}

export default Gimnasios;
