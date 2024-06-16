import React from 'react'; // Importiere React

const AboutQA = () => { // Definiere die AboutQA-Komponente
  return (
    <div className="container mx-auto p-4"> {/* Container-Div mit zentrierter Ausrichtung und Innenabstand */}
      <h1 className="text-3xl font-bold mb-4">Q&A</h1> {/* Überschrift mit Klassen für Schriftgröße, Fettgedruckt und Abstand nach unten */}
      
      <h2 className="text-2xl font-bold mb-4">What is RPE?</h2> {/* Unterüberschrift für die Frage "What is RPE?" */}
      <p className="mb-4">
        <strong className="text-primary-orange">Rating Perceived Exertion (RPE)</strong> is a numerical scale used to measure the intensity of exercise based on how hard you feel you’re working. Originally developed by Gunnar Borg for endurance training, it has been adapted for resistance training to better gauge effort during sets.
      </p> {/* Erklärung, was RPE ist, mit Hervorhebung des Begriffs "Rating Perceived Exertion (RPE)" */}

      <h2 className="text-2xl font-bold mb-4">Why Use RPE?</h2> {/* Unterüberschrift für die Frage "Why Use RPE?" */}
      <p className="mb-4">
        RPE helps lifters manage their training load and intensity more effectively. It allows for adjustments based on daily fluctuations in strength and energy levels, ensuring that you train at the appropriate intensity.
      </p> {/* Erklärung, warum RPE verwendet wird */}

      <h2 className="text-2xl font-bold mb-4">RPE Scale</h2> {/* Unterüberschrift für die Frage "RPE Scale" */}
      <p className="mb-4">
        The RPE scale is based on <strong className="text-primary-orange">repetitions in reserve (RIR)</strong> at the end of a set:
      </p> {/* Erklärung, dass die RPE-Skala auf "repetitions in reserve (RIR)" basiert */}
      <ul className="mb-4 list-disc list-inside">
        <li><strong className="text-primary-orange">10 RPE:</strong> Could not do more reps or load without form failure</li>
        <li><strong className="text-primary-orange">9 RPE:</strong> Could do 1 more rep</li>
        <li><strong className="text-primary-orange">8 RPE:</strong> Could do 2 more reps</li>
        <li><strong className="text-primary-orange">7 RPE:</strong> Could do 3 more reps</li>
        <li><strong className="text-primary-orange">5-6 RPE:</strong> Could do 4-6 more reps</li>
        <li><strong className="text-primary-orange">1-4 RPE:</strong> Very light to light effort</li>
      </ul> {/* Liste der RPE-Skala mit Erklärungen für jede Stufe */}

      <h2 className="text-2xl font-bold mb-4">Benefits of RPE</h2> {/* Unterüberschrift für die Frage "Benefits of RPE" */}
      <p className="mb-4">
        Using RPE allows for:
      </p> {/* Einleitung der Liste der Vorteile von RPE */}
      <ul className="mb-4 list-disc list-inside">
        <li><strong className="text-primary-orange">Better fatigue management</strong></li>
        <li><strong className="text-primary-orange">Personalized training intensity</strong></li>
        <li><strong className="text-primary-orange">Adjustments for daily performance variability</strong></li>
      </ul> {/* Liste der Vorteile von RPE */}

      <h2 className="text-2xl font-bold mb-4">Implementing RPE in Training</h2> {/* Unterüberschrift für die Frage "Implementing RPE in Training" */}
      <p className="mb-4">
        To use RPE effectively, start by estimating your RPE after each set. Over time, you will become more accurate in gauging your effort. This helps in selecting the appropriate load for each set, ensuring you train effectively without overreaching or undertraining.
      </p> {/* Erklärung, wie man RPE im Training umsetzt */}

      <h2 className="text-2xl font-bold mb-4">Tips for Beginners</h2> {/* Unterüberschrift für die Frage "Tips for Beginners" */}
      <p className="mb-4">
        Beginners should initially use RPE to record their perceived effort after each set. With experience, you can start using RPE to guide your training loads. It is important to stay conservative with your estimates to avoid training to failure too often, which can lead to excessive fatigue and hinder progress.
      </p> {/* Tipps für Anfänger zur Verwendung von RPE */}

      <h2 className="text-2xl font-bold mb-4">Advanced Use of RPE</h2> {/* Unterüberschrift für die Frage "Advanced Use of RPE" */}
      <p className="mb-4">
        Experienced lifters can use RPE to fine-tune their training programs. By adjusting loads based on daily performance, lifters can maximize their training efficiency and progress. RPE can also be used in conjunction with percentage-based training to provide a more comprehensive approach.
      </p> {/* Erklärung, wie fortgeschrittene Benutzer RPE verwenden können */}
    </div>
  );
};

export default AboutQA; // Exportiere die AboutQA-Komponente
