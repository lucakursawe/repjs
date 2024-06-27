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
          content="Calculate your estimated one-rep max (E1RM) based on reps, weight, and RPE. Track your progress and optimize your training with our web app."
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
              Regulate your training with{" "}
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
                  helps you optimize your workouts by calculating your{" "}
                  <span className="font-bold text-primary-orange">
                    estimated one-rep max (E1RM)
                  </span>
                  .
                  <br /> {/* Textabschnitte mit speziellen Stil-Klassen */}
                  Enter your{" "}
                  <span className="font-bold text-primary-orange">
                    reps
                  </span>,{" "}
                  <span className="font-bold text-primary-orange">RPE</span>,
                  and{" "}
                  <span className="font-bold text-primary-orange">weight</span>{" "}
                  to get{" "}
                  <span className="font-bold text-primary-orange">
                    real-time feedback
                  </span>{" "}
                  on your performance.
                  <br /> {/* Weitere Textabschnitte */}
                  Adjust your workouts to your current{" "}
                  <span className="font-bold text-primary-orange">
                    strengths
                  </span>{" "}
                  to ensure{" "}
                  <span className="font-bold text-primary-orange">
                    steady progress
                  </span>{" "}
                  and minimize the{" "}
                  <span className="font-bold text-primary-orange">
                    risk of injury
                  </span>
                  .
                  <br /> {/* Weitere Textabschnitte */}
                  Suitable for all fitness levels,{" "}
                  <span className="font-bold text-primary-orange">
                    REP.js
                  </span>{" "}
                  allows for{" "}
                  <span className="font-bold text-primary-orange">
                    efficient
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-primary-orange">
                    effective autoregulation
                  </span>{" "}
                  of your training.
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
