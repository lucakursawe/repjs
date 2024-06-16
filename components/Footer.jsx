import Link from 'next/link'; // Importiere Link-Komponente von Next.js
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importiere Icon-Komponenten von react-icons

const Footer = () => { // Definiere die Footer-Komponente
  return (
    <footer className="bg-black text-white py-8"> {/* Footer-Tag mit Klassen für Hintergrundfarbe, Textfarbe und Innenabstand */}
      <div className="container mx-auto px-4"> {/* Container-Div mit Klassen für zentrierte Ausrichtung und Innenabstand */}
        <div className="flex flex-wrap justify-between"> {/* Flexbox-Div für die Anordnung der inneren Elemente */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0"> {/* Div für den ersten Bereich mit voller Breite auf kleinen Bildschirmen und ein Drittel Breite auf mittleren und größeren Bildschirmen */}
            <h3 className="text-lg font-bold mb-2">Rep.js</h3> {/* Überschrift für den Bereich mit Klassen für Schriftgröße und Fettgedruckt */}
            <p className="text-sm text-gray-400">© 2024 Rep.js. All rights reserved.</p> {/* Paragraph mit kleiner Schriftgröße und grauer Farbe */}
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0"> {/* Div für den zweiten Bereich */}
            <h3 className="text-lg font-bold mb-2">Quick Links</h3> {/* Überschrift für die Schnelllinks */}
            <ul> {/* Ungeordnete Liste für die Links */}
              <li className="mb-2"> {/* Listenelement mit Abstand nach unten */}
                <Link href="/" className="text-sm hover:text-primary-orange transition-colors duration-300">Home</Link> {/* Link zur Startseite mit Klassen für kleine Schriftgröße, Hover-Effekt und Farbwechsel */}
              </li>
              <li className="mb-2"> {/* Listenelement mit Abstand nach unten */}
                <Link href="/about" className="text-sm hover:text-primary-orange transition-colors duration-300">About</Link> {/* Link zur Über-Seite */}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0"> {/* Div für den dritten Bereich */}
            <h3 className="text-lg font-bold mb-2">Follow us</h3> {/* Überschrift für die Social Media Links */}
            <ul className="flex space-x-4"> {/* Ungeordnete Liste mit Flexbox und Abstand zwischen den Listenelementen */}
              <li> {/* Listenelement */}
                <a href="https://instagram.com/lucakursawe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-orange transition-colors duration-300">
                  <FaInstagram size={24} /> {/* Instagram Icon mit Hover-Effekt */}
                </a>
              </li>
              <li> {/* Listenelement */}
                <a href="https://linkedin.com/lucakursawe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-orange transition-colors duration-300">
                  <FaLinkedin size={24} /> {/* LinkedIn Icon mit Hover-Effekt */}
                </a>
              </li>
              <li> {/* Listenelement */}
                <a href="https://github.com/lucakursawe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-orange transition-colors duration-300">
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
