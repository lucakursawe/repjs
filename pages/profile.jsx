import { useEffect, useState } from 'react'; // Importiere useEffect und useState Hooks von React
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'; // Importiere Supabase Auth-Helper
import { Line } from 'react-chartjs-2'; // Importiere Line-Komponente von react-chartjs-2
import 'chart.js/auto'; // Erforderlich für Chart.js v3
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importiere Pfeil-Icons von react-icons
import { useRouter } from 'next/router'; // Importiere useRouter von Next.js

export default function Profile() {
  const user = useUser(); // Hole den Benutzer von Supabase Auth
  const supabaseClient = useSupabaseClient(); // Supabase Client für Datenbankzugriff
  const router = useRouter(); // Initialisiere Router
  const [calculations, setCalculations] = useState([]); // Zustand für Berechnungen
  const [loading, setLoading] = useState(true); // Zustand für Ladeanzeige
  const [exerciseFilter, setExerciseFilter] = useState('Squat'); // Zustand für Übungsfilter
  const [expandedId, setExpandedId] = useState(null); // Zustand für Umschalten der Details
  const [limit, setLimit] = useState(5); // Zustand für Paginierungsgrenze

  useEffect(() => {
    if (user) {
      fetchCalculations(); // Berechnungen abrufen, wenn Benutzer eingeloggt ist
    } else {
      setLoading(false); // Ladeanzeige beenden, wenn Benutzer nicht eingeloggt ist
    }
  }, [user, exerciseFilter, limit]); // useEffect läuft, wenn sich Benutzer, Übungsfilter oder Limit ändert

  const fetchCalculations = async () => {
    const { data, error } = await supabaseClient
      .from('e1rm')
      .select('*')
      .eq('user_id', user.id)
      .eq('exercise', exerciseFilter)
      .order('created_at', { ascending: false }) // Die neuesten Berechnungen abrufen
      .limit(limit); // Limit für Paginierung anwenden

    if (error) {
      console.error('Error fetching calculations:', error); // Fehlerbehandlung
    } else {
      setCalculations(data); // Berechnungen setzen
    }
    setLoading(false); // Ladeanzeige beenden
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id); // Detailsansicht umschalten
  };

  const loadMore = () => {
    setLimit(limit + 5); // Limit um 5 erhöhen
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut(); // Benutzer ausloggen
    router.push('/auth'); // Umleiten zur Authentifizierungsseite
  };

  const getChartData = () => {
    const labels = calculations.map(calc => new Date(calc.created_at).toLocaleDateString()).reverse(); // Erstelle Labels für das Diagramm
    const data = calculations.map(calc => calc.e1rm).reverse(); // Erstelle Daten für das Diagramm
    return {
      labels,
      datasets: [
        {
          label: `E1RM Progression for ${exerciseFilter}`,
          data,
          fill: false,
          borderColor: '#FF5722',
          pointBackgroundColor: '#FF5722',
        }
      ]
    };
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white">
        <h2 className="text-2xl font-bold text-black">Please log in to view your profile.</h2> {/* Nachricht für nicht eingeloggte Benutzer */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 px-2 bg-white">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 text-black text-center">Welcome, {user.email}!</h2> {/* Begrüßungsnachricht für eingeloggte Benutzer */}
      <div className="bg-white shadow-xl rounded-lg p-4 md:p-10 mb-4 w-full max-w-full md:max-w-4xl"> {/* Angepasste maximale Breite für breiteres Diagramm auf größeren Bildschirmen */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exerciseFilter">Filter by Exercise:</label>
            <select
              className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
              id="exerciseFilter"
              name="exerciseFilter"
              value={exerciseFilter}
              onChange={(e) => setExerciseFilter(e.target.value)}
              aria-label="Select Exercise Filter"
            >
              <option value="Squat">Squat</option>
              <option value="Bench">Bench</option>
              <option value="Deadlift">Deadlift</option>
            </select>
          </div>
        </div>
        <h4 className="text-lg font-semibold text-black mb-4 text-center">Total calculations for {exerciseFilter}: {calculations.length}</h4> {/* Gesamtanzahl der Berechnungen */}
        {loading ? (
          <p className="text-black text-center">Loading...</p> // Ladeanzeige
        ) : calculations.length === 0 ? (
          <p className="text-black text-center">No calculations found.</p> // Nachricht, wenn keine Berechnungen gefunden wurden
        ) : (
          <>
            <div className="w-full h-64 md:h-96">
              <Line data={getChartData()} options={{ maintainAspectRatio: false }} /> {/* Liniendiagramm mit Daten */}
            </div>
            
            <ul className="mt-4">
              {calculations.map(calc => (
                <li key={calc.id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDetails(calc.id)}>
                    <div>
                      <p>
                        <strong className="text-primary-orange">Date:</strong> {new Date(calc.created_at).toLocaleDateString()}
                        <span> - <strong className="text-primary-orange">E1RM (kg):</strong> {calc.e1rm}</span>
                      </p>
                    </div>
                    <div>
                      {expandedId === calc.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  {expandedId === calc.id && (
                    <div className="mt-2">
                      <p><strong className="text-primary-orange">Weight (kg):</strong> {calc.weightKg}</p>
                      <p><strong className="text-primary-orange">Reps:</strong> {calc.reps}</p>
                      <p><strong className="text-primary-orange">RPE:</strong> {calc.rpe}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {calculations.length >= limit && (
              <div className="flex justify-center mt-4">
                <button onClick={loadMore} className="bg-primary-orange text-white px-4 py-2 rounded">
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <button
            onClick={handleLogout}
            className="text-black px-4 py-2 rounded hover:text-primary-orange transition-colors duration-300 focus:outline-none"
          >
            Logout
          </button>
    </div>
  );
}
