import { useEffect, useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js v3

export default function Profile() {
  const user = useUser(); // Get user from Supabase Auth
  const supabaseClient = useSupabaseClient(); // Supabase Client for database access
  const [calculations, setCalculations] = useState([]); // State for calculations
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    if (user) {
      fetchCalculations(); // Fetch calculations if user is logged in
    } else {
      setLoading(false); // Stop loading if user is not logged in
    }
  }, [user]); // useEffect runs when user changes

  const fetchCalculations = async () => {
    const { data, error } = await supabaseClient
      .from('e1rm')
      .select('*')
      .eq('user_id', user.id); // Fetch user calculations

    if (error) {
      console.error('Error fetching calculations:', error); // Error handling
    } else {
      setCalculations(data); // Set calculations
    }
    setLoading(false); // Stop loading
  };

  const getChartData = () => {
    const labels = calculations.map(calc => new Date(calc.created_at).toLocaleDateString());
    const data = calculations.map(calc => calc.e1rm);
    return {
      labels,
      datasets: [
        {
          label: 'E1RM Progression',
          data,
          fill: true,
          borderColor: 'black',
          tension: 0.1,
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
        <h4 className="text-lg font-semibold text-black mb-4 text-center">Total calculations: {calculations.length}</h4> {/* Total number of calculations */}
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
                  <div className="popover-container">
                    <p className="cursor-pointer">
                      <strong className="text-primary-orange">Date:</strong> {new Date(calc.created_at).toLocaleString()}
                    </p>
                    <div className="popover-content">
                      <p><strong className="text-primary-orange">E1RM (kg):</strong> {calc.e1rm}</p> {/* Display E1RM */}
                      <p><strong className="text-primary-orange">Weight (kg):</strong> {calc.weightKg}</p> {/* Display weight */}
                      <p><strong className="text-primary-orange">Reps:</strong> {calc.reps}</p> {/* Display reps */}
                      <p><strong className="text-primary-orange">RPE:</strong> {calc.rpe}</p> {/* Display RPE */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
