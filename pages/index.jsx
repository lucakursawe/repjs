import E1RMCalculation from '../components/e1rmcalc'; // Importiere die E1RMCalculation-Komponente

export default function Home() { // Definiere die Home-Komponente
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-12 bg-white"> {/* Haupt-Div mit Flexbox für zentrierte Ausrichtung, minimaler Höhe des Bildschirms, Innenabstand und weißem Hintergrund */}
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-10 sm:mb-20 text-center sm:text-left text-primary-orange mx-auto max-w-6xl">
        Autoregulate Your Training with <span className="font-bold text-primary-orange">REP.js</span>
      </h1> {/* Überschrift mit Klassen für Schriftgröße, Fettgedruckt, Abstand nach unten, linkem Text, orangefarbener Textfarbe, zentrierter Ausrichtung und maximaler Breite */}
      <div className="w-full max-w-6xl mx-auto pb-20 sm:pb-40"> {/* Container-Div mit voller Breite, maximaler Breite, zentrierter Ausrichtung und großem Innenabstand am unteren Rand */}
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-10 lg:space-y-0"> {/* Flexbox-Div für die Anordnung der inneren Elemente, vertikale Anordnung auf kleinen Bildschirmen und horizontale Anordnung auf großen Bildschirmen */}
          <div className="lg:w-2/3 space-y-10"> {/* Div für den Textbereich mit zwei Drittel Breite auf großen Bildschirmen und Abstand zwischen den Elementen */}
            <p className="text-2xl text-left text-black leading-relaxed">
              <span className="font-bold text-primary-orange">REP.js</span> helps you optimize your workouts by calculating your <span className="font-bold text-primary-orange">Estimated One Rep Max (E1RM)</span>.<br />
              Enter your repetitions, RPE, and weight to get real-time feedback on your performance.<br />
              Tailor your training sessions to your current strength levels, ensuring steady progress and minimizing injury risks.<br />
              Suitable for all fitness levels, <span className="font-bold text-primary-orange">REP.js</span> enables efficient and effective autoregulation of your training.<br />
              Start your journey towards smarter training and better results today!
            </p> {/* Textabsatz mit Klassen für Schriftgröße, linken Text, schwarze Textfarbe und entspannten Zeilenabstand. Enthält mehrere hervorgehobene Textabschnitte in orange */}
          </div>
          <div className="lg:w-1/3"> {/* Div für den E1RMCalculation-Bereich mit einem Drittel Breite auf großen Bildschirmen */}
            <E1RMCalculation /> {/* Einfügen der E1RMCalculation-Komponente */}
          </div>
        </div>
      </div>
    </div>
  );
}
