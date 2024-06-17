import { useEffect, useState } from 'react'; 
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'; 
import { Line } from 'react-chartjs-2'; 
import 'chart.js/auto'; 
import { FaChevronDown, FaChevronUp, FaTrash } from 'react-icons/fa'; 
import { useRouter } from 'next/router'; 

export default function Profile() {
  const user = useUser(); 
  const supabaseClient = useSupabaseClient(); 
  const router = useRouter(); 
  const [calculations, setCalculations] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [exerciseFilter, setExerciseFilter] = useState('Squat'); 
  const [expandedId, setExpandedId] = useState(null); 
  const [limit, setLimit] = useState(5); 

  useEffect(() => {
    if (user) {
      fetchCalculations(); 
    } else {
      setLoading(false); 
    }
  }, [user, exerciseFilter, limit]); 

  const fetchCalculations = async () => {
    const { data, error } = await supabaseClient
      .from('e1rm')
      .select('*')
      .eq('user_id', user.id)
      .eq('exercise', exerciseFilter)
      .order('created_at', { ascending: false }) 
      .limit(limit); 

    if (error) {
      console.error('Error fetching calculations:', error); 
    } else {
      setCalculations(data); 
    }
    setLoading(false); 
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id); 
  };

  const loadMore = () => {
    setLimit(limit + 5); 
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut(); 
    router.push('/auth'); 
  };

  const handleDelete = async (id) => {
    const { error } = await supabaseClient
      .from('e1rm')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting calculation:', error);
    } else {
      setCalculations(calculations.filter(calc => calc.id !== id));
    }
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
          pointBackgroundColor: '#black',
        }
      ]
    };
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white">
        <h1 className="text-2xl font-bold text-primary-orange">Please log in to view your profile.</h1> 
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-10 text-black text-center">Welcome, {user.email}!</h3> 
        <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 mb-6 w-full max-w-full md:max-w-4xl">
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
          <h4 className="text-lg font-semibold text-black mb-4 text-center">Total calculations for {exerciseFilter}: {calculations.length}</h4> 
          {loading ? (
            <p className="text-black text-center">Loading...</p>
          ) : calculations.length === 0 ? (
            <p className="text-black text-center">No calculations found.</p>
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
                          <strong className="text-black"></strong> <strong>{new Date(calc.created_at).toLocaleDateString()}</strong>
                          <span> - <strong className="text-black"></strong> <strong>{calc.e1rm} kg </strong></span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        {expandedId === calc.id ? <FaChevronUp /> : <FaChevronDown />}
                        <button onClick={(e) => {e.stopPropagation(); handleDelete(calc.id);}} className="ml-2 text-red-600 hover:text-red-800">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    {expandedId === calc.id && (
                      <div className="mt-2">
                        <p><strong className="text-black">Weight (kg):</strong> <strong>{calc.weightKg}</strong></p>
                        <p><strong className="text-black">Reps:</strong> <strong>{calc.reps}</strong></p>
                        <p><strong className="text-black">RPE:</strong> <strong>{calc.rpe}</strong></p>
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
    </div>
  );
}
