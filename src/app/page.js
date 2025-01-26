'use client'
import Image from "next/image";
import estilo from "../styles/estilo.css";

export default function Home() {
  return (
    <div>
      <header>
        <img src="../resources/logo.png" alt="Logo"/>
        <nav>
          <ul className="listaNav">
            <li>Ejemplo 1</li>
            <li>Ejemplo 2</li>
            <li>Ejemplo 3</li>
          </ul>
        </nav>
      </header>
      <main>
          <div id="imagen1">
              <img src="../resources/imagen1.png" alt="imagen1" />
          </div>
          <div id="imagen2">
              <img src="../resources/imagen2.png" alt="imagen2" />
          </div>
          <div id="imagen3">
              <img src="../resources/imagen3.png" alt="imagen2" />
          </div>
      </main>
      <footer >
        <p>footer</p>
      </footer>
    </div>
  );
}
