import React from "react"; // Importiere React
import Head from "next/head"; // Importiere Head für Metadaten

const AboutQA = () => {
  // Definiere die AboutQA-Komponente
  return (
    <>
      <Head>
        <title>Q&A - REP.js</title> {/* Titel der Seite */}
        <meta
          name="description"
          content="Learn more about Rating Perceived Exertion (RPE), its benefits, and how to implement it into your training. Find tips for beginners and advanced users to optimize your training."
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
            Questions and Answers
          </h1>{" "}
          {/* Überschrift mit Klassen für Schriftgröße, Fettdruck und unteren Abstand */}
          <h2 className="text-2xl font-bold mb-4">What is RPE?</h2>{" "}
          {/* Zwischenüberschrift für die Frage "What is RPE?" */}
          <p className="mb-4">
            <strong className="text-primary-orange">
              Rating Perceived Exertion (RPE)
            </strong>{" "}
            is a numerical scale used to measure the intensity of exercises
            based on how hard you are working. Originally developed by Gunnar
            Borg for endurance training, it has been adapted for strength
            training to better assess effort during sets.
          </p>{" "}
          {/* Erklärung dessen, was RPE ist, mit Betonung auf dem Begriff "Rating Perceived Exertion (RPE)" */}
          <h2 className="text-2xl font-bold mb-4">Why use RPE?</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Why use RPE?" */}
          <p className="mb-4">
            RPE helps athletes manage their training load and intensity more
            effectively. It allows adjustments based on daily fluctuations in
            strength and energy levels, ensuring you train with the appropriate
            intensity.
          </p>{" "}
          {/* Erklärung, warum RPE verwendet wird */}
          <h2 className="text-2xl font-bold mb-4">RPE Scale</h2>{" "}
          {/* Zwischenüberschrift für die Frage "RPE Scale" */}
          <p className="mb-4">
            The RPE scale is based on{" "}
            <strong className="text-primary-orange">
              repetitions in reserve (RIR)
            </strong>{" "}
            at the end of a set:
          </p>{" "}
          {/* Erklärung, dass die RPE-Skala auf "repetitions in reserve (RIR)" basiert */}
          <ul className="mb-4 list-disc list-inside">
            <li>
              <strong className="text-primary-orange">10 RPE:</strong> Could not
              do any more reps or add weight without losing form
            </li>
            <li>
              <strong className="text-primary-orange">9 RPE:</strong> Could do 1
              more rep
            </li>
            <li>
              <strong className="text-primary-orange">8 RPE:</strong> Could do 2
              more reps
            </li>
            <li>
              <strong className="text-primary-orange">7 RPE:</strong> Could do 3
              more reps
            </li>
            <li>
              <strong className="text-primary-orange">5-6 RPE:</strong> Could do
              4-6 more reps
            </li>
            <li>
              <strong className="text-primary-orange">1-4 RPE:</strong> Very
              light to light effort
            </li>
          </ul>{" "}
          {/* Liste der RPE-Skala mit Erklärungen für jedes Level */}
          <h2 className="text-2xl font-bold mb-4">Benefits of RPE</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Benefits of RPE" */}
          <p className="mb-4">Using RPE allows:</p>{" "}
          {/* Einführung in die Liste der Vorteile von RPE */}
          <ul className="mb-4 list-disc list-inside">
            <li>
              <strong className="text-primary-orange">
                Better fatigue management
              </strong>
            </li>
            <li>
              <strong className="text-primary-orange">
                Personalized training intensity
              </strong>
            </li>
            <li>
              <strong className="text-primary-orange">
                Adjustments to daily performance fluctuations
              </strong>
            </li>
          </ul>{" "}
          {/* Liste der Vorteile von RPE */}
          <h2 className="text-2xl font-bold mb-4">
            Implementing RPE in Training
          </h2>{" "}
          {/* Zwischenüberschrift für die Frage "Implementing RPE in Training" */}
          <p className="mb-4">
            To effectively use RPE, start by estimating your RPE at the end of
            each set. Over time, you'll become more accurate in assessing your
            effort. This helps you select the appropriate load for each set,
            ensuring you train effectively without overreaching or
            undertraining.
          </p>{" "}
          {/* Erklärung, wie man RPE im Training implementiert */}
          <h2 className="text-2xl font-bold mb-4">Tips for Beginners</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Tips for Beginners" */}
          <p className="mb-4">
            Beginners should initially use RPE to record their perceived effort
            after each set. As you gain experience, you can start using RPE to
            guide your training loads. It's important to remain conservative in
            your estimates to avoid frequent training to failure, which can lead
            to excessive fatigue and hinder progress.
          </p>{" "}
          {/* Tipps für Anfänger zur Verwendung von RPE */}
          <h2 className="text-2xl font-bold mb-4">Advanced Use of RPE</h2>{" "}
          {/* Zwischenüberschrift für die Frage "Advanced Use of RPE" */}
          <p className="mb-4">
            Experienced lifters can use RPE to refine their training programs.
            By adjusting loads based on daily performance, lifters can maximize
            their training efficiency and progress. RPE can also be used in
            conjunction with percentage-based training to provide a more
            comprehensive approach.
          </p>{" "}
          {/* Erklärung, wie fortgeschrittene Benutzer RPE verwenden können */}
        </div>
      </div>
    </>
  );
};

export default AboutQA; // Exportiere die AboutQA-Komponente
