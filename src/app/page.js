'use client'
import Image from "next/image";
import estilo from "../styles/estilo.css";

export default function Home() {
  return (
    <div>
      <header>
        <img id="logo" src="https://i.imgur.com/WUtsRM9.png" alt="Logo"/>
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
          </div>
          <div id="imagen2">
              
          </div>
          <div id="imagen3">
              
          </div>
      </main>
      <footer >
        <p>footer</p>
      </footer>
    </div>
  );
}
