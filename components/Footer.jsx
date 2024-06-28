import Link from "next/link"; // Importiere die Link-Komponente von Next.js
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Importiere Icon-Komponenten von react-icons

const Footer = () => {
  // Definiere die Footer-Komponente
  return (
    <footer className="bg-black text-white py-8">
      {" "}
      {/* Footer-Bereich mit Klassen für Hintergrundfarbe, Textfarbe und Innenabstand */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Container für zentrierte Ausrichtung und Innenabstand */}
        <div className="flex flex-wrap justify-between">
          {" "}
          {/* Flexbox für die Anordnung der Elemente */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            {" "}
            {/* Bereich für den ersten Abschnitt */}
            <h3 className="text-lg font-bold mb-2">Rep.js</h3>{" "}
            {/* Überschrift für den Abschnitt */}
            <p className="text-sm text-gray-400">
              © 2024 Rep.js. All rights reserved.
            </p>{" "}
            {/* Copyright-Text */}
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            {" "}
            {/* Bereich für den zweiten Abschnitt */}
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>{" "}
            {/* Überschrift für Schnelllinks */}
            <ul>
              {" "}
              {/* Ungeordnete Liste für Links */}
              <li className="mb-2">
                {" "}
                {/* Listenelement mit Abstand */}
                <Link
                  href="/"
                  className="text-sm hover:text-primary-orange transition-colors duration-300"
                >
                  Home
                </Link>{" "}
                {/* Link zur Startseite */}
              </li>
              <li className="mb-2">
                {" "}
                {/* Listenelement mit Abstand */}
                <Link
                  href="/about"
                  className="text-sm hover:text-primary-orange transition-colors duration-300"
                >
                  About
                </Link>{" "}
                {/* Link zur Über-Seite */}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            {" "}
            {/* Bereich für den dritten Abschnitt */}
            <h3 className="text-lg font-bold mb-2">Follow me</h3>{" "}
            {/* Überschrift für Social-Media-Links */}
            <ul className="flex space-x-4">
              {" "}
              {/* Ungeordnete Liste mit Flexbox und Abstand zwischen Elementen */}
              <li>
                {" "}
                {/* Listenelement */}
                <a
                  href="https://instagram.com/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-orange transition-colors duration-300"
                >
                  <FaInstagram size={24} />{" "}
                  {/* Instagram Icon mit Hover-Effekt */}
                </a>
              </li>
              <li>
                {" "}
                {/* Listenelement */}
                <a
                  href="https://linkedin.com/in/lucakursawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-orange transition-colors duration-300"
                >
                  <FaLinkedin size={24} />{" "}
                  {/* LinkedIn Icon mit Hover-Effekt */}
                </a>
              </li>
              <li>
                {" "}
                {/* Listenelement */}
                <a
                  href="https://github.com/lucakursawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-orange transition-colors duration-300"
                >
                  <FaGithub size={24} /> {/* GitHub Icon mit Hover-Effekt */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exportiere die Footer-Komponente
