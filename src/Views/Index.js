import React from "react";
import styles from "./Index.module.css";
import Navbar from "../Components/Navbar";

export default function Index() {
  return (
    <section id="index" style={{ backgroundColor: "#FF9AA2" }}>
      <Navbar></Navbar>
      <section>
        <p>Bienvenido a mi portafolio...</p>
        <h1 >
          Hola
        </h1>
        <p>
          Mi nombre es{" "}
          <strong style={{ paddingLeft: 5 }}>Valeria Goyzueta</strong>
        </p>
        <p>Soy estudiante de la carrera de Ingeniería de software</p>
        <p>Tengo 20 años y muchas ganas de aprender :D</p>
        <p>
          Soy una persona proactiva, responsable, trabajadora y adaptable al
          cambio
        </p>
      </section>
    </section>
  );
}
