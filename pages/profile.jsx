import { useEffect, useState } from "react"; // Importiere useEffect und useState von React
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"; // Importiere useUser und useSupabaseClient von Supabase
import { Line } from "react-chartjs-2"; // Importiere Line-Komponente von react-chartjs-2 für Diagramme
import "chart.js/auto"; // Importiere 'chart.js/auto' für automatische Chart.js-Konfiguration
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa"; // Importiere Icons von react-icons/fa für Pfeile und Mülleimer
import { useRouter } from "next/router"; // Importiere useRouter von Next.js für die Navigation
import Head from "next/head"; // Importiere Head für Metadaten

export default function Profile() {
  // Definiere die Profile-Komponente als Standardexport
  const user = useUser(); // Verwende useUser-Hook von Supabase für den aktuellen Benutzer
  const supabaseClient = useSupabaseClient(); // Verwende useSupabaseClient-Hook von Supabase für den Supabase-Client
  const router = useRouter(); // Verwende useRouter-Hook von Next.js für den Router
  const [calculations, setCalculations] = useState([]); // Zustand für Berechnungen (E1RM) mit leerem Array initialisieren
  const [loading, setLoading] = useState(true); // Zustand für Ladezustand mit true initialisieren
  const [exerciseFilter, setExerciseFilter] = useState("Squat"); // Zustand für Übungsfilter mit 'Squat' initialisieren
  const [expandedId, setExpandedId] = useState(null); // Zustand für erweiterte ID mit null initialisieren
  const [limit, setLimit] = useState(5); // Zustand für Limit mit 5 initialisieren

  useEffect(() => {
    // Effekt-Hook für Datenabruf und -aktualisierung basierend auf Benutzer, Übungsfilter und Limit
    if (user) {
      // Wenn ein Benutzer vorhanden ist
      fetchCalculations(); // Berechnungen abrufen
    } else {
      // Andernfalls
      setLoading(false); // Ladezustand auf false setzen
    }
  }, [user, exerciseFilter, limit]); // Abhängigkeiten für den Effekt-Hook

  const fetchCalculations = async () => {
    // Funktion zum Abrufen der Berechnungen
    const { data, error } = await supabaseClient // Daten von Supabase-Client abrufen
      .from("e1rm") // Tabelle 'e1rm'
      .select("*") // Alle Spalten auswählen
      .eq("user_id", user.id) // Filtern nach Benutzer-ID
      .eq("exercise", exerciseFilter) // Filtern nach Übung
      .order("created_at", { ascending: false }) // Nach 'created_at' absteigend sortieren
      .limit(limit); // Limit festlegen

    if (error) {
      // Bei einem Fehler
      console.error("Error fetching calculations:", error); // Fehlermeldung ausgeben
    } else {
      // Andernfalls
      setCalculations(data); // Berechnungen setzen
    }
    setLoading(false); // Ladezustand auf false setzen
  };

  const toggleDetails = (id) => {
    // Funktion zum Umschalten von Details
    setExpandedId(expandedId === id ? null : id); // Erweiterte ID aktualisieren
  };

  const loadMore = () => {
    // Funktion zum Laden weiterer Daten
    setLimit(limit + 5); // Limit um 5 erhöhen
  };

  const handleLogout = async () => {
    // Funktion zum Abmelden
    await supabaseClient.auth.signOut(); // Abmelden über Supabase-Client
    router.push("/auth"); // Zur Authentifizierungsseite navigieren
  };

  const handleDelete = async (id) => {
    // Funktion zum Löschen einer Berechnung
    const { error } = await supabaseClient // Fehler behandeln
      .from("e1rm") // Tabelle 'e1rm'
      .delete() // Löschen
      .eq("id", id); // Nach ID filtern

    if (error) {
      // Bei einem Fehler
      console.error("Error deleting calculation:", error); // Fehlermeldung ausgeben
    } else {
      // Andernfalls
      setCalculations(calculations.filter((calc) => calc.id !== id)); // Berechnungen aktualisieren
    }
  };

  const getChartData = () => {
    // Funktion zur Datenvorbereitung für das Diagramm
    const labels = calculations
      .map((calc) => new Date(calc.created_at).toLocaleDateString())
      .reverse(); // Datumslabels in umgekehrter Reihenfolge
    const data = calculations.map((calc) => calc.e1rm).reverse(); // E1RM-Daten in umgekehrter Reihenfolge
    return {
      // Rückgabe der Daten für das Diagramm
      labels,
      datasets: [
        {
          label: `E1RM Development for ${exerciseFilter}`, // Beschriftung des Diagramms
          data,
          fill: false,
          borderColor: "#FF5722",
          pointBackgroundColor: "#000",
        },
      ],
    };
  };

  if (!user) {
    // Wenn kein Benutzer angemeldet ist
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white">
        {" "}
        {/* Container für zentrierte Anzeige */}
        <h1 className="text-2xl font-bold text-primary-orange">
          Please sign in to view your profile.
        </h1>{" "}
        {/* Anzeige für Benutzer, der sich anmelden soll */}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Profile - REP.js</title> {/* Titel für die Profilseite */}
        <meta
          name="description"
          content="Manage your profile, view your progress, and update your personal information in the E1RM Calculator Web App."
        />{" "}
        {/* Meta-Beschreibung */}
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6 bg-white">
        {" "}
        {/* Hauptcontainer */}
        <div className="w-full max-w-6xl mx-auto">
          {" "}
          {/* Wrapper für Inhalt */}
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-10 text-black text-left">
            {user.email}
          </h3>{" "}
          {/* E-Mail des Benutzers als Überschrift */}
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 mb-6 w-full max-w-full md:max-w-4xl">
            {" "}
            {/* Container für Profilinformationen */}
            <div className="flex justify-between items-center mb-6">
              {" "}
              {/* Container für Filter und Zähler */}
              <div>
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="exerciseFilter"
                >
                  Filter by exercise:
                </label>{" "}
                {/* Label für Übungsauswahl */}
                <select
                  className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
                  id="exerciseFilter"
                  name="exerciseFilter"
                  value={exerciseFilter}
                  onChange={(e) => setExerciseFilter(e.target.value)}
                  aria-label="Filter exercise"
                >
                  <option value="Squat">Squat</option>{" "}
                  {/* Optionen für Übungsauswahl */}
                  <option value="Bench">Bench Press</option>
                  <option value="Deadlift">Deadlift</option>
                </select>
              </div>
            </div>
            <h4 className="text-lg text-black mb-4 text-left">
              Total calculations for {exerciseFilter}: {calculations.length}
            </h4>{" "}
            {/* Anzeige der Gesamtzahl der Berechnungen */}
            {loading ? ( // Wenn geladen wird
              <p className="text-black text-center">Loading...</p> // Ladeanzeige
            ) : calculations.length === 0 ? ( // Wenn keine Berechnungen vorhanden sind
              <p className="text-gray text-center">No calculations found.</p> // Keine Berechnungen gefunden
            ) : (
              // Andernfalls
              <>
                {" "}
                {/* Fragment für Anzeige von Berechnungen */}
                <div className="w-full h-64 md:h-96">
                  <Line
                    data={getChartData()}
                    options={{ maintainAspectRatio: false }}
                  />{" "}
                  {/* Diagramm anzeigen */}
                </div>
                <ul className="mt-4">
                  {" "}
                  {/* Liste für Berechnungen */}
                  {calculations.map(
                    (
                      calc // Mapping der Berechnungen
                    ) => (
                      <li
                        key={calc.id}
                        className="mb-4 p-4 bg-white rounded-lg shadow-sm"
                      >
                        {" "}
                        {/* Eintrag für jede Berechnung */}
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleDetails(calc.id)}
                        >
                          {" "}
                          {/* Container für Klickbereich */}
                          <div>
                            <p>
                              <strong className="text-black"></strong>{" "}
                              <strong>
                                {new Date(calc.created_at).toLocaleDateString()}
                              </strong>{" "}
                              {/* Anzeige des Datums */}
                              <span>
                                {" "}
                                - <strong className="text-black"></strong>{" "}
                                <strong>{calc.e1rm} kg </strong>
                              </span>{" "}
                              {/* Anzeige des E1RM */}
                            </p>
                          </div>
                          <div className="flex items-center">
                            {" "}
                            {/* Container für Icons */}
                            {expandedId === calc.id ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}{" "}
                            {/* Pfeil für Details */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(calc.id);
                              }}
                              className="ml-2 text-red-600 hover:text-red-800"
                            >
                              {" "}
                              {/* Löschen-Button */}
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                        {expandedId === calc.id && ( // Wenn Details erweitert sind
                          <div className="mt-2">
                            <p>
                              <strong className="text-black">
                                Weight (kg):
                              </strong>{" "}
                              <strong>{calc.weightKg}</strong>
                            </p>{" "}
                            {/* Gewichtsanzeige */}
                            <p>
                              <strong className="text-black">Reps:</strong>{" "}
                              <strong>{calc.reps}</strong>
                            </p>{" "}
                            {/* Anzeige der Wiederholungen */}
                            <p>
                              <strong className="text-black">RPE:</strong>{" "}
                              <strong>{calc.rpe}</strong>
                            </p>{" "}
                            {/* Anzeige der RPE */}
                          </div>
                        )}
                      </li>
                    )
                  )}
                </ul>
                {calculations.length >= limit && ( // Wenn mehr Berechnungen vorhanden sind als das Limit
                  <div className="flex justify-center mt-4">
                    {" "}
                    {/* Container für "Mehr laden"-Button */}
                    <button
                      onClick={loadMore}
                      className="bg-primary-orange text-white px-4 py-2 rounded"
                    >
                      {" "}
                      {/* Button zum Laden weiterer Berechnungen */}
                      Load more
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          <button // Abmelden-Button
            onClick={handleLogout}
            className="text-black px-4 py-2 rounded hover:text-primary-orange transition-colors duration-300 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
