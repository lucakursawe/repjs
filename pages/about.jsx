import React from 'react'; // Importiere React
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importiere Icon-Komponenten von react-icons

const About = () => { // Definiere die About-Komponente
  return (
    <div className="container mx-auto p-4"> {/* Container-Div mit zentrierter Ausrichtung und Innenabstand */}
      <h1 className="text-3xl font-bold mb-4">About</h1> {/* Überschrift mit Klassen für Schriftgröße, Fettgedruckt und Abstand nach unten */}
      <div className="flex flex-wrap md:flex-nowrap items-center"> {/* Flexbox-Div für die Anordnung der inneren Elemente */}
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center"> {/* Div für den ersten Bereich mit voller Breite auf kleinen Bildschirmen und ein Drittel Breite auf mittleren und größeren Bildschirmen */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"> {/* Weißer Hintergrund, Schatten, abgerundete Ecken und Innenabstand */}
            <img src="/luca.jpg" alt="Luca" className="rounded-full w-32 h-32 mb-4"/> {/* Bild von Luca mit runden Ecken, fester Breite und Höhe und Abstand nach unten */}
            <h2 className="text-xl font-bold text-center mb-2">Luca</h2> {/* Unterüberschrift mit Klassen für Schriftgröße, Fettgedruckt, zentrierten Text und Abstand nach unten */}
            <p className="text-center text-black">Computer Science Student</p> {/* Beschreibungstext mit zentriertem schwarzen Text */}
            <p className="text-center text-black">Web Design & Frontend Development</p> {/* Weitere Beschreibung */}
            <div className="mt-4"> {/* Abstand nach oben */}
              <h3 className="text-lg font-bold mb-2 text-primary-orange">Socials</h3> {/* Unterüberschrift für soziale Medien */}
              <div className="flex space-x-4"> {/* Flexbox-Div mit Abstand zwischen den Elementen */}
                <a href="https://linkedin.com/in/lucakursawe" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-6 w-6 text-black hover:text-primary-orange"/> {/* LinkedIn Icon mit Hover-Effekt */}
                </a>
                <a href="https://github.com/lucakursawe" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-6 w-6 text-black hover:text-primary-orange"/> {/* GitHub Icon mit Hover-Effekt */}
                </a>
                <a href="https://instagram.com/lucakursawe" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-6 w-6 text-black hover:text-primary-orange"/> {/* Instagram Icon mit Hover-Effekt */}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-4 flex flex-col justify-center"> {/* Div für den zweiten Bereich mit voller Breite auf kleinen Bildschirmen und zwei Drittel Breite auf mittleren und größeren Bildschirmen */}
          <div className="bg-white shadow-md rounded-lg p-4"> {/* Weißer Hintergrund, Schatten, abgerundete Ecken und Innenabstand */}
            <p className="mb-4">
              Hi! I'm <strong className="text-primary-orange">Luca</strong>, a computer science student passionate about web design and frontend development. I created this calculator to simplify the process of calculating the weight to load for your next workout set based on the results of your previous set. My goal is to make it as user-friendly and efficient as possible, so you can focus more on your workout and less on the calculations.
            </p> {/* Begrüßungstext und Einführung */}
            <p className="mb-4">
              This app is based on the <strong className="text-primary-orange">RPE table</strong> published by <strong className="text-primary-orange">Mike Tuchscherer</strong>, Founder of Reactive Training Systems, which I found incredibly useful during my own training.
            </p> {/* Erklärung der Grundlage der App */}
            <p className="mb-4">
              If you find this app helpful and have any suggestions or comments, feel free to reach out to me. You can find my contact information on my <strong className="text-primary-orange">personal website</strong> or connect with me on various forums and social media platforms.
            </p> {/* Einladung, Feedback zu geben */}
            <p className="mb-4">
              If you're new to weightlifting and stumbled upon this app, it might not be for you just yet. But if you're interested in learning more about lifting weights, there are plenty of great resources out there to get you started!
            </p> {/* Hinweis für Anfänger im Gewichtheben */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; // Exportiere die About-Komponente
