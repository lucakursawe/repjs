import { useEffect, useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js v3
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import arrow icons

export default function Profile() {
  const user = useUser(); // Get user from Supabase Auth
  const supabaseClient = useSupabaseClient(); // Supabase Client for database access
  const [calculations, setCalculations] = useState([]); // State for calculations
  const [loading, setLoading] = useState(true); // State for loading
  const [exerciseFilter, setExerciseFilter] = useState('Squat'); // State for exercise filter
  const [expandedId, setExpandedId] = useState(null); // State for toggle
  const [limit, setLimit] = useState(5); // State for pagination limit

  useEffect(() => {
    if (user) {
      fetchCalculations(); // Fetch calculations if user is logged in
    } else {
      setLoading(false); // Stop loading if user is not logged in
    }
  }, [user, exerciseFilter, limit]); // useEffect runs when user, exerciseFilter or limit changes

  const fetchCalculations = async () => {
    const { data, error } = await supabaseClient
      .from('e1rm')
      .select('*')
      .eq('user_id', user.id)
      .eq('exercise', exerciseFilter)
      .order('created_at', { ascending: false }) // Fetch the latest calculations
      .limit(limit); // Apply the limit for pagination

    if (error) {
      console.error('Error fetching calculations:', error); // Error handling
    } else {
      setCalculations(data); // Set calculations
    }
    setLoading(false); // Stop loading
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id); // Toggle the details view
  };

  const loadMore = () => {
    setLimit(limit + 5); // Increase the limit by 5
  };

  const getChartData = () => {
    const labels = calculations.map(calc => new Date(calc.created_at).toLocaleDateString()).reverse();
    const data = calculations.map(calc => calc.e1rm).reverse();
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
        <h2 className="text-2xl font-bold text-black">Please log in to view your profile.</h2> {/* Message for not logged in users */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 px-2 bg-white">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 text-black text-center">Welcome, {user.email}!</h2> {/* Welcome message for logged in users */}
      <div className="bg-white shadow-xl rounded-lg p-4 md:p-10 mb-4 w-full max-w-full md:max-w-4xl"> {/* Adjusted max-width for wider chart on larger screens */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exerciseFilter">Filter by Exercise:</label>
          <select
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <h4 className="text-lg font-semibold text-black mb-4 text-center">Total calculations for {exerciseFilter}: {calculations.length}</h4> {/* Total number of calculations */}
        {loading ? (
          <p className="text-black text-center">Loading...</p> // Loading state
        ) : calculations.length === 0 ? (
          <p className="text-black text-center">No calculations found.</p> // Message if no calculations are found
        ) : (
          <>
            <div className="w-full h-64 md:h-96">
              <Line data={getChartData()} options={{ maintainAspectRatio: false }} />
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
    </div>
  );
}
