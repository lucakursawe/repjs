"use client";

import { supabase } from '../utils/supabase';
import React, { useState } from 'react';
import { useUser } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';

export default function E1RMCalculation() {
  const [reps, setReps] = useState(''); // Zustand für Wiederholungen
  const [rpe, setRpe] = useState(''); // Zustand für RPE
  const [weightKg, setWeightKg] = useState(''); // Zustand für Gewicht in kg
  const [result, setResult] = useState(''); // Zustand für das Ergebnis
  const user = useUser(); // Benutzer aus der Supabase Auth

  const handleSubmit = async (event) => {
    event.preventDefault();

    const e1rm = calculateE1RM(parseFloat(reps), parseFloat(rpe), parseFloat(weightKg)); // Berechne E1RM
    if (e1rm !== null) {
      let resultMessage = `Your Estimated One Rep Max (E1RM) is: ${e1rm.toFixed(2)} kg`; // Ergebnisnachricht
      if (user) {
        const { data, error } = await supabase
          .from('e1rm')
          .insert([{
            user_id: user.id,
            reps: parseFloat(reps),
            rpe: parseFloat(rpe),
            weightKg: parseFloat(weightKg),
            e1rm: e1rm.toFixed(2)
          }]); // Speichere Daten in der Supabase
        if (error) {
          console.error('Error saving data to Supabase:', error); // Fehlerbehandlung
        } else {
          console.log('Data saved successfully:', data);
        }
      } else {
        resultMessage += '. Please log in to save your calculation and view past results.'; // Hinweis für nicht eingeloggte Benutzer
      }
      setResult(resultMessage); // Setze Ergebnisnachricht
    } else {
      setResult("Invalid Input! Please check your inputs."); // Fehlernachricht bei ungültigen Eingaben
    }
  };

  const calculateE1RM = (reps, rpe, weightKg) => {
    const rpeChart = {
      1: { 10: 100, 9.5: 97.8, 9.0: 95.5, 8.5: 92.2, 8.0: 89.2, 7.5: 86.3, 7.0: 83.7, 6.5: 81.1, 6.0: 78.6 },
      2: { 10: 95.5, 9.5: 93.9, 9.0: 92.2, 8.5: 90.7, 8.0: 89.2, 7.5: 87.8, 7.0: 86.3, 6.5: 85.0, 6.0: 83.7 },
      3: { 10: 92.2, 9.5: 90.7, 9.0: 89.2, 8.5: 87.8, 8.0: 86.3, 7.5: 85.0, 7.0: 83.7, 6.5: 82.5, 6.0: 81.1 },
      4: { 10: 89.2, 9.5: 87.8, 9.0: 86.3, 8.5: 85.0, 8.0: 83.7, 7.5: 82.5, 7.0: 81.1, 6.5: 80.0, 6.0: 78.6 },
      5: { 10: 86.3, 9.5: 85.0, 9.0: 83.7, 8.5: 82.5, 8.0: 81.1, 7.5: 80.0, 7.0: 78.6, 6.5: 77.5, 6.0: 76.4 },
      6: { 10: 83.7, 9.5: 82.5, 9.0: 81.1, 8.5: 80.0, 8.0: 78.6, 7.5: 77.5, 7.0: 76.4, 6.5: 75.4, 6.0: 74.3 },
      7: { 10: 81.1, 9.5: 80.0, 9.0: 78.6, 8.5: 77.5, 8.0: 76.4, 7.5: 75.4, 7.0: 74.3, 6.5: 73.3, 6.0: 72.2 },
      8: { 10: 78.6, 9.5: 77.4, 9.0: 76.2, 8.5: 75.1, 8.0: 73.9, 7.5: 72.3, 7.0: 70.7, 6.5: 69.4, 6.0: 68.0 },
      9: { 10: 76.2, 9.5: 75.1, 9.0: 73.9, 8.5: 72.3, 8.0: 70.7, 7.5: 69.4, 7.0: 68.0, 6.5: 66.7, 6.0: 65.3 },
      10: { 10: 73.9, 9.5: 72.3, 9.0: 70.7, 8.5: 69.4, 8.0: 68.0, 7.5: 66.7, 7.0: 65.3, 6.5: 64.0, 6.0: 62.6 },
      11: { 10: 70.7, 9.5: 69.4, 9.0: 68.0, 8.5: 66.7, 8.0: 65.3, 7.5: 64.0, 7.0: 62.6, 6.5: 61.3, 6.0: 59.9 },
      12: { 10: 68.0, 9.5: 66.7, 9.0: 65.3, 8.5: 64.0, 8.0: 62.6, 7.5: 61.3, 7.0: 59.9, 6.5: 58.6, 6.0: 57.4 },
    };

    rpe = parseFloat(rpe);
    if (rpeChart[reps] && rpeChart[reps][rpe]) {
      const e1rmPercentage = rpeChart[reps][rpe]; // Prozentsatz des E1RM aus der Tabelle
      const e1rmValue = weightKg / (e1rmPercentage / 100); // Berechne E1RM
      return e1rmValue;
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg px-10 pt-8 pb-10 mb-4 max-w-lg w-full">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weightKg">Weight (kg):</label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="weightKg"
            name="weightKg"
            min="0"
            required
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)} // Update weight
            aria-label="Weight in kilograms"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reps">Reps:</label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="reps"
            name="reps"
            min="1"
            max="12"
            required
            value={reps}
            onChange={(e) => setReps(e.target.value)} // Update reps
            aria-label="Repetitions"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rpe">RPE:</label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="rpe"
            name="rpe"
            min="6"
            max="10"
            step="0.5"
            required
            value={rpe}
            onChange={(e) => setRpe(e.target.value)} // Update RPE
            aria-label="Rate of Perceived Exertion"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-primary-orange text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-orange-600"
            type="submit"
          >
            Calculate E1RM
          </button>
        </div>
      </form>

      {result && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-4 bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-lg font-bold text-primary-orange">{result}</h2>
        </motion.div>
      )}
    </div>
  );
}