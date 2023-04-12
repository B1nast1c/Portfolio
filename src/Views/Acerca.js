import React from "react";
import Image from "../Images/Perfil.jpg";
import styles from "./Acerca.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Acerca() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    textSmall: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textSmallEnter = () => setCursorVariant("textSmall");
  const textLeave = () => setCursorVariant("default");

  return (
    <section
      className={styles.acerca}
      id="acerca"
      style={{ backgroundColor: "#FFDAC1" }}
    >
      <div className={styles.description}>
        <h3>BIENVENID@...</h3>
        <p>
          Mi nombre es{" "}
          <span onMouseEnter={textSmallEnter} onMouseLeave={textLeave}>
            Valeria Goyzueta
          </span>
          , estudiante de la Universidad la Salle de Arequipa
        </p>
        <p>
          En el año 2020, y cuando la pandemia empezaba decidí hacer del
          desarrollo web mi pasión y la razón por la que me quedaría en la
          carrera
        </p>
        <p>
          Apasionada en desarrollar páginas web y muy pronto aplicaciones
          móviles
        </p>
        <p>
          Soy una persona <span onMouseEnter={textSmallEnter} onMouseLeave={textLeave}>
            proactiva, amable, responsable
          </span> y si, también me gusta el kpop :D
        </p>
      </div>
      <div className={styles.center}>
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className={styles.name}
        >
          Acerca
        </h2>
        <div className={styles.image}>
          <img src={Image} alt="foto" />
        </div>
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className={styles.name}
        >
          de mi
        </h2>
      </div>
      <div className={styles.skills}>
        <h3>MIS HABILIDADES...</h3>
        <div className={styles.list}>
          <div className={styles.item}>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={styles.logo}
            >
              <i className="fab fa-html5"></i>
              <h4>HTML</h4>
            </div>
          </div>
          <div className={styles.item}>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={styles.logo}
            >
              <i className="fab fa-css3-alt"></i>
              <h4>CSS</h4>
            </div>
          </div>
          <div className={styles.item}>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={styles.logo}
            >
              <i className="fab fa-react"></i>
              <h4>React</h4>
            </div>
          </div>
          <div className={styles.item}>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={styles.logo}
            >
              <i className="fab fa-js"></i>
              <h4>JavaScript</h4>
            </div>
          </div>
          <div className={styles.item}>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className={styles.logo}
            >
              <i className="fab fa-vuejs"></i>
              <h4>Vue</h4>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </section>
  );
}
