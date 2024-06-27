import E1RMCalculation from "../components/e1rmcalc"; // Importiere die E1RMCalculation-Komponente
import Head from "next/head"; // Importiere Head für Metadaten

export default function Home() {
  // Definiere die Home-Komponente als Standardexport
  return (
    <>
      <Head>
        <title>Home - E1RM Calculator</title> {/* Titel der Seite */}
        <meta
          name="description"
          content="Berechnen Sie Ihre geschätzte maximale Einzelwiederholung (E1RM) basierend auf Wiederholungen, Gewicht und RPE. Verfolgen Sie Ihren Fortschritt und optimieren Sie Ihr Training mit unserer Web-App."
        />{" "}
        {/* Meta-Beschreibung */}
      </Head>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6 bg-white">
          {" "}
          {/* Hauptcontainer mit vertikaler Ausrichtung, Hintergrundfarbe und Innenabstand */}
          <div className="w-full max-w-6xl mx-auto">
            {" "}
            {/* Wrapper für konsistente Breite und zentrierte Ausrichtung */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-primary-orange">
              Reguliere dein Training mit{" "}
              <span className="block text-black">REP.js</span>{" "}
              {/* Überschrift mit speziellen Stil-Klassen */}
            </h1>
            <div className="flex flex-col-reverse lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
              {" "}
              {/* Flexbox-Container für responsive Anordnung */}
              <div className="lg:w-2/3 space-y-6 mt-8">
                {" "}
                {/* Bereich für Text auf großem Bildschirm (2/3 Breite) */}
                <p className="text-2xl text-black leading-relaxed">
                  <span className="font-bold text-primary-orange">REP.js</span>{" "}
                  hilft Ihnen, Ihre Workouts zu optimieren, indem es Ihre{" "}
                  <span className="font-bold text-primary-orange">
                    geschätzte maximale Einzelwiederholung (E1RM)
                  </span>{" "}
                  berechnet.
                  <br /> {/* Textabschnitte mit speziellen Stil-Klassen */}
                  Geben Sie Ihre{" "}
                  <span className="font-bold text-primary-orange">
                    Wiederholungen
                  </span>
                  , <span className="font-bold text-primary-orange">RPE</span>{" "}
                  und{" "}
                  <span className="font-bold text-primary-orange">Gewicht</span>{" "}
                  ein, um{" "}
                  <span className="font-bold text-primary-orange">
                    Echtzeit-Feedback
                  </span>{" "}
                  zu Ihrer Leistung zu erhalten.
                  <br /> {/* Weitere Textabschnitte */}
                  Passen Sie Ihre Trainingseinheiten an Ihre aktuellen{" "}
                  <span className="font-bold text-primary-orange">
                    Stärken
                  </span>{" "}
                  an, um einen{" "}
                  <span className="font-bold text-primary-orange">
                    stetigen Fortschritt
                  </span>{" "}
                  zu gewährleisten und das{" "}
                  <span className="font-bold text-primary-orange">
                    Verletzungsrisiko
                  </span>{" "}
                  zu minimieren.
                  <br /> {/* Weitere Textabschnitte */}
                  Geeignet für alle Fitnesslevel ermöglicht{" "}
                  <span className="font-bold text-primary-orange">
                    REP.js
                  </span>{" "}
                  eine{" "}
                  <span className="font-bold text-primary-orange">
                    effiziente
                  </span>{" "}
                  und{" "}
                  <span className="font-bold text-primary-orange">
                    effektive Autoregulation
                  </span>{" "}
                  Ihres Trainings.
                  <br /> {/* Weitere Textabschnitte */}
                </p>
              </div>
              <div className="lg:w-1/3 flex lg:justify-end lg:-mt-6">
                {" "}
                {/* Bereich für die E1RM-Berechnung auf großem Bildschirm (1/3 Breite) */}
                <E1RMCalculation /> {/* E1RM-Berechnungskomponente */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
