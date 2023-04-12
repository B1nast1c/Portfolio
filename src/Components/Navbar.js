import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function NavBar() {
  const [fix, setfix] = useState(false);

  function Scrolling() {
    if (window.scrollY >= window.innerHeight - 60) {
      setfix(true);
      console.log(window.scrollY);
    } else {
      setfix(false);
    }
  }
  
  window.addEventListener("scroll", Scrolling);
  return (
    <nav className={fix ? "navbar" : "hidden"}>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={400}
          >
            Home
          </Link>
        </li>
        <li>
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
        <li>
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
        <li>
          <Link
            activeClass="active"
            to="trabajos"
            spy={true}
            smooth={true}
            duration={400}
          >
            Trabajos
          </Link>
        </li>
        <li>
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
      </ul>
    </nav>
  );
}
