import React from "react";
import Image from "../Images/Perfil.jpg";
import styles from "./Home.module.css";
import { Link } from "react-scroll";

export default function Home(props) {
  return (
    <section className={styles.home} id="home">
      <div className={`${styles.sections} ${styles.menu}`}>
        <li className={`${styles.lihover} ${styles.color1}`}>
          <Link
            activeClass="active"
            to="index"
            spy={true}
            smooth={true}
            duration={400}
          >
            Introducción
          </Link>
        </li>
        <li className={`${styles.lihover} ${styles.color2}`}>
          <Link
            activeClass="active"
            to="acerca"
            spy={true}
            smooth={true}
            duration={400}
          >
            Acerca
          </Link>
        </li>
        <li className={`${styles.lihover} ${styles.color3}`}>
          <Link
            activeClass="active"
            to="trabajos"
            spy={true}
            smooth={true}
            duration={300}
          >
            Trabajos
          </Link>
        </li>
        <li
        className={`${styles.lihover} ${styles.color4}`}>
          <Link
            activeClass="active"
            to="mensaje"
            spy={true}
            smooth={true}
            duration={400}
          >
            Mensaje
          </Link>
        </li>
        <br />
        <div className={styles.autor}>
          <small>
            Portafolio hecho por{" "}
            <span className={styles.nombre}>Valeria Goyzueta</span>
            <br />
          </small>
          <small>Ⓒ 2022</small>
        </div>
      </div>
      <div className={`${styles.sections} ${styles.data}`}>
        <div className={styles.image}>
          <img src={Image} alt="foto" />
        </div>
        <div className={styles.info}>
          <h1>Valeria Goyzueta</h1>
          <p>
            Hola, Soy estudiante de la carrera de Ingeniería de Software en la
            Universidad La Salle
          </p>
          <div className={styles.redes}>
            <li>
              <a
                href="https://www.facebook.com/valeria.goyzuetatorres/"
                target="blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/valeria-goyzueta-torres-7294b51bb/"
                target="blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </div>
        </div>
      </div>
      {props.cursor}
    </section>
  );
}
