import Head from "next/head";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Stelle sicher, dass die notwendigen Imports vorhanden sind

const About = () => {
  return (
    <>
      <Head>
        <title>About - E1RM Calculator</title> {/* Titel der Seite */}
        <meta
          name="description"
          content="Erfahren Sie mehr über die E1RM Calculator Web-App, ihre Funktionen und wie sie Ihnen helfen kann, Ihr Krafttraining zu optimieren."
        />{" "}
        {/* Meta-Beschreibung */}
      </Head>
      <div className="container mx-auto p-4">
        {" "}
        {/* Container-Div mit zentrierter Ausrichtung und Padding */}
        <div className="w-full max-w-6xl mx-auto">
          {" "}
          {/* Wrapper-Div für konsistente Breite und zentrierte Ausrichtung */}
          <h1 className="text-3xl font-bold mb-4 text-primary-orange">
            About
          </h1>{" "}
          {/* Überschrift mit Klassen für Schriftgröße, Fettdruck und Farbe */}
          <div className="flex flex-wrap md:flex-nowrap items-center">
            {" "}
            {/* Flexbox-Div zur Anordnung der inneren Elemente */}
            <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center">
              {" "}
              {/* Div für den ersten Abschnitt mit voller Breite auf kleinen Bildschirmen und einem Drittel Breite auf mittleren und größeren Bildschirmen */}
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                {" "}
                {/* Weißer Hintergrund, Schatten, abgerundete Ecken und Padding */}
                <img
                  src="/luca.jpg"
                  alt="Luca"
                  className="rounded-full w-32 h-32 mb-4"
                />{" "}
                {/* Bild von Luca mit abgerundeten Ecken, fester Breite und Höhe und Abstand nach unten */}
                <h2 className="text-xl font-bold text-center mb-2">Luca</h2>{" "}
                {/* Untertitel mit Klassen für Schriftgröße, Fettdruck, zentrierten Text und Abstand nach unten */}
                <p className="text-center text-black">Informatikstudent</p>{" "}
                {/* Beschreibungstext mit zentriertem schwarzen Text */}
                <p className="text-center text-black">
                  Webdesign & Frontend-Entwicklung
                </p>{" "}
                {/* Zusätzliche Beschreibung */}
                <div className="mt-4">
                  {" "}
                  {/* Abstand nach oben */}
                  <h3 className="text-lg font-bold mb-2 text-primary-orange">
                    Socials
                  </h3>{" "}
                  {/* Untertitel für Social-Media-Links */}
                  <div className="flex space-x-4">
                    {" "}
                    {/* Flexbox-Div mit Abstand zwischen den Elementen */}
                    <a
                      href="https://linkedin.com/in/lucakursawe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="h-6 w-6 text-black hover:text-primary-orange duration-300" />{" "}
                      {/* LinkedIn-Icon mit Hover-Effekt */}
                    </a>
                    <a
                      href="https://github.com/lucakursawe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-6 w-6 text-black hover:text-primary-orange duration-300" />{" "}
                      {/* GitHub-Icon mit Hover-Effekt */}
                    </a>
                    <a
                      href="https://instagram.com/lucakursawe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="h-6 w-6 text-black hover:text-primary-orange duration-300" />{" "}
                      {/* Instagram-Icon mit Hover-Effekt */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-center">
              {" "}
              {/* Div für den zweiten Abschnitt mit voller Breite auf kleinen Bildschirmen und zwei Dritteln Breite auf mittleren und größeren Bildschirmen */}
              <div className="bg-white shadow-md rounded-lg p-4">
                {" "}
                {/* Weißer Hintergrund, Schatten, abgerundete Ecken und Padding */}
                <p className="mb-4">
                  Hallo! Ich bin{" "}
                  <strong className="text-primary-orange">Luca</strong>, ein
                  Informatikstudent, der sich leidenschaftlich für Webdesign und
                  Frontend-Entwicklung interessiert. Ich habe diesen Rechner
                  erstellt, um den Prozess der Berechnung des Gewichts für Ihren
                  nächsten Trainingssatz zu vereinfachen, basierend auf den
                  Ergebnissen Ihres vorherigen Satzes. Mein Ziel ist es, ihn so
                  benutzerfreundlich und effizient wie möglich zu gestalten,
                  damit Sie sich mehr auf Ihr Training konzentrieren und weniger
                  auf die Berechnungen.
                </p>{" "}
                {/* Begrüßungstext und Einführung */}
                <p className="mb-4">
                  Diese App basiert auf der{" "}
                  <strong className="text-primary-orange">RPE-Tabelle</strong>,
                  veröffentlicht von{" "}
                  <strong className="text-primary-orange">
                    Mike Tuchscherer
                  </strong>
                  , Gründer von Reactive Training Systems, die ich während
                  meines eigenen Trainings sehr nützlich fand.
                </p>{" "}
                {/* Erklärung der Grundlage der App */}
                <p className="mb-4">
                  Wenn Ihnen diese App hilft und Sie Anregungen oder Kommentare
                  haben, zögern Sie nicht, mich zu kontaktieren. Sie finden
                  meine Kontaktinformationen auf meiner{" "}
                  <strong className="text-primary-orange">
                    persönlichen Website
                  </strong>{" "}
                  oder verbinden Sie sich mit mir auf verschiedenen Foren und
                  sozialen Medien.
                </p>{" "}
                {/* Einladung zur Rückmeldung */}
                <p className="mb-4">
                  Wenn Sie neu im Gewichtheben sind und auf diese App gestoßen
                  sind, ist sie möglicherweise noch nicht das Richtige für Sie.
                  Aber wenn Sie daran interessiert sind, mehr über das
                  Gewichtheben zu erfahren, gibt es viele großartige Ressourcen,
                  um Ihnen den Einstieg zu erleichtern!
                </p>{" "}
                {/* Hinweis für Anfänger im Gewichtheben */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; // Exportiere die About-Komponente
