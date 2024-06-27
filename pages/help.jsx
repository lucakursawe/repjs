import React from "react"; // Importiere React
import Head from "next/head"; // Importiere Head für Metadaten

const AboutQA = () => {
  // Definiere die AboutQA-Komponente
  return (
    <>
      <Head>
        <title>F&A - REP.js</title> {/* Titel der Seite */}
        <meta
          name="description"
          content="Erfahren Sie mehr über Rating Perceived Exertion (RPE), seine Vorteile und wie Sie es in Ihrem Training implementieren können. Finden Sie Tipps für Anfänger und fortgeschrittene Benutzer, um Ihr Training zu optimieren."
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
            Fragen und Antworten
          </h1>{" "}
          {/* Überschrift mit Klassen für Schriftgröße, Fettdruck und unteren Abstand */}
          <h2 className="text-2xl font-bold mb-4">Was ist RPE?</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Was ist RPE?" */}
          <p className="mb-4">
            <strong className="text-primary-orange">
              Rating Perceived Exertion (RPE)
            </strong>{" "}
            ist eine numerische Skala, die verwendet wird, um die Intensität von
            Übungen zu messen, basierend darauf, wie hart Sie arbeiten.
            Ursprünglich von Gunnar Borg für das Ausdauertraining entwickelt,
            wurde sie für das Krafttraining angepasst, um den Aufwand während
            der Sätze besser zu bewerten.
          </p>{" "}
          {/* Erklärung dessen, was RPE ist, mit Betonung auf dem Begriff "Rating Perceived Exertion (RPE)" */}
          <h2 className="text-2xl font-bold mb-4">Warum RPE verwenden?</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Warum RPE verwenden?" */}
          <p className="mb-4">
            RPE hilft Sportlern, ihre Trainingsbelastung und -intensität
            effektiver zu steuern. Es ermöglicht Anpassungen basierend auf
            täglichen Schwankungen in Stärke und Energieleveln und stellt
            sicher, dass Sie mit der angemessenen Intensität trainieren.
          </p>{" "}
          {/* Erklärung, warum RPE verwendet wird */}
          <h2 className="text-2xl font-bold mb-4">RPE-Skala</h2>{" "}
          {/* Zwischenüberschrift für die Frage "RPE-Skala" */}
          <p className="mb-4">
            Die RPE-Skala basiert auf{" "}
            <strong className="text-primary-orange">
              repetitions in reserve (RIR)
            </strong>{" "}
            am Ende eines Satzes:
          </p>{" "}
          {/* Erklärung, dass die RPE-Skala auf "repetitions in reserve (RIR)" basiert */}
          <ul className="mb-4 list-disc list-inside">
            <li>
              <strong className="text-primary-orange">10 RPE:</strong> Konnte
              keine weiteren Wiederholungen oder Gewicht ohne Formverlust machen
            </li>
            <li>
              <strong className="text-primary-orange">9 RPE:</strong> Konnte 1
              weitere Wiederholung machen
            </li>
            <li>
              <strong className="text-primary-orange">8 RPE:</strong> Konnte 2
              weitere Wiederholungen machen
            </li>
            <li>
              <strong className="text-primary-orange">7 RPE:</strong> Konnte 3
              weitere Wiederholungen machen
            </li>
            <li>
              <strong className="text-primary-orange">5-6 RPE:</strong> Konnte
              4-6 weitere Wiederholungen machen
            </li>
            <li>
              <strong className="text-primary-orange">1-4 RPE:</strong> Sehr
              leichte bis leichte Anstrengung
            </li>
          </ul>{" "}
          {/* Liste der RPE-Skala mit Erklärungen für jedes Level */}
          <h2 className="text-2xl font-bold mb-4">Vorteile von RPE</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Vorteile von RPE" */}
          <p className="mb-4">Die Verwendung von RPE ermöglicht:</p>{" "}
          {/* Einführung in die Liste der Vorteile von RPE */}
          <ul className="mb-4 list-disc list-inside">
            <li>
              <strong className="text-primary-orange">
                Besseres Ermüdungsmanagement
              </strong>
            </li>
            <li>
              <strong className="text-primary-orange">
                Persönliche Trainingsintensität
              </strong>
            </li>
            <li>
              <strong className="text-primary-orange">
                Anpassungen an tägliche Leistungsschwankungen
              </strong>
            </li>
          </ul>{" "}
          {/* Liste der Vorteile von RPE */}
          <h2 className="text-2xl font-bold mb-4">
            Implementierung von RPE im Training
          </h2>{" "}
          {/* Zwischenüberschrift für die Frage "Implementierung von RPE im Training" */}
          <p className="mb-4">
            Um RPE effektiv zu verwenden, schätzen Sie zunächst Ihr RPE nach
            jedem Satz ein. Mit der Zeit werden Sie genauer im Einschätzen Ihres
            Aufwandes. Dies hilft Ihnen dabei, die geeignete Belastung für jeden
            Satz auszuwählen und sicherzustellen, dass Sie effektiv trainieren,
            ohne zu überlasten oder unterzutrainieren.
          </p>{" "}
          {/* Erklärung, wie man RPE im Training implementiert */}
          <h2 className="text-2xl font-bold mb-4">Tipps für Anfänger</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Tipps für Anfänger" */}
          <p className="mb-4">
            Anfänger sollten zunächst RPE verwenden, um ihre wahrgenommene
            Anstrengung nach jedem Satz aufzuzeichnen. Mit zunehmender Erfahrung
            können Sie beginnen, RPE zur Steuerung Ihrer Trainingsbelastungen zu
            verwenden. Es ist wichtig, bei Ihren Schätzungen konservativ zu
            bleiben, um häufiges Training bis zum Versagen zu vermeiden, was zu
            übermäßiger Ermüdung und Beeinträchtigung des Fortschritts führen
            kann.
          </p>{" "}
          {/* Tipps für Anfänger zur Verwendung von RPE */}
          <h2 className="text-2xl font-bold mb-4">
            Fortgeschrittene Verwendung von RPE
          </h2>{" "}
          {/* Zwischenüberschrift für die Frage "Fortgeschrittene Verwendung von RPE" */}
          <p className="mb-4">
            Erfahrene Heber können RPE verwenden, um ihre Trainingsprogramme zu
            verfeinern. Durch Anpassung der Belastungen basierend auf der
            täglichen Leistung können Heber ihre Trainings-effizienz und ihren
            Fortschritt maximieren. RPE kann auch in Verbindung mit prozentual
            basiertem Training verwendet werden, um einen umfassenderen Ansatz
            zu bieten.
          </p>{" "}
          {/* Erklärung, wie fortgeschrittene Benutzer RPE verwenden können */}
        </div>
      </div>
    </>
  );
};

export default AboutQA; // Exportiere die AboutQA-Komponente
