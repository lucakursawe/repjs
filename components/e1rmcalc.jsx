"use client";

import { supabase } from "../utils/supabase"; // Supabase
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react"; // Hook für Supabase Authentifizierung
import { motion } from "framer-motion"; // Animationen mit Framer Motion
import Head from "next/head"; // Head-Element für SEO
import { Line } from "react-chartjs-2"; // Chart.js für Diagramme
import CountUp from "react-countup"; // React CountUp für animierte Zahlen

export default function E1RMCalculation() {
  const [exercise, setExercise] = useState("Squat"); // State für Übungsauswahl
  const [reps, setReps] = useState(""); // State für Wiederholungen
  const [rpe, setRpe] = useState(""); // State für RPE
  const [weightKg, setWeightKg] = useState(""); // State für Gewicht in kg
  const [result, setResult] = useState(null); // State für Ergebnis
  const [progress, setProgress] = useState(0); // State für Fortschritt
  const resultRef = useRef(null); // Ref für Ergebnis-Element
  const user = useUser(); // Supabase Authentifizierung für Benutzer (optional)

const handleSubmit = async (event) => {
  // Verhindert das Standardverhalten des Formulars, um ein Neuladen der Seite zu vermeiden
  event.preventDefault();

  // Berechnet das geschätzte One-Rep Max (E1RM) basierend auf den eingegebenen Werten
  const e1rm = calculateE1RM(
    parseFloat(reps), // Konvertiert die Wiederholungen von String zu Float
    parseFloat(rpe), // Konvertiert die RPE von String zu Float
    parseFloat(weightKg) // Konvertiert das Gewicht von String zu Float
  );

  // Überprüft, ob die Berechnung des E1RM erfolgreich war
  if (e1rm !== null) {
    // Erstellt eine Ergebnisnachricht mit dem berechneten E1RM-Wert
    let resultMessage = `Your estimated 1RM for ${exercise} : ${e1rm.toFixed(
      2
    )} kg`;

    // Überprüft, ob der Nutzer angemeldet ist
    if (user) {
      // Versucht, die Daten in die Supabase-Datenbank einzufügen
      const { data, error } = await supabase.from("e1rm").insert([
        {
          user_id: user.id, // Benutzer-ID aus dem aktuellen Nutzer
          exercise, // Art der Übung
          reps: parseFloat(reps), // Anzahl der Wiederholungen
          rpe: parseFloat(rpe), // RPE-Wert
          weightKg: parseFloat(weightKg), // Gewicht in Kilogramm
          e1rm: e1rm.toFixed(2), // Berechneter E1RM-Wert, auf 2 Dezimalstellen gerundet
        },
      ]);

      // Überprüft, ob beim Speichern der Daten ein Fehler aufgetreten ist
      if (error) {
        console.error("Error saving data to database:", error); // Loggt den Fehler in die Konsole
      } else {
        console.log("Data successfully stored in database", data); // Bestätigt den erfolgreichen Datenbankeintrag
      }
    } else {
      // Fügt eine Nachricht hinzu, die den Nutzer auffordert, sich anzumelden
      resultMessage +=
        ". Please login to review your calculated data and visualize your progress.";
    }

    // Setzt den Zustand des Ergebnisses mit dem berechneten E1RM-Wert
    setResult(e1rm);

    // Aktualisiert den Fortschritt basierend auf dem berechneten E1RM-Wert
    setProgress((e1rm / 300) * 100); // Annahme: Der maximale Fortschrittswert ist 300 kg
  } else {
    // Setzt den Zustand des Ergebnisses mit einer Fehlermeldung
    setResult("Invalid input! Please check your inputs."); // Meldet ungültige Eingaben
  }
};


  // Effect to scroll to view on result
  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  // Funktion zur Berechnung des geschätzten One-Rep Max (E1RM) basierend auf den eingegebenen Werten
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

    rpe = parseFloat(rpe); // Konvertiert die RPE in eine Gleitkommazahl
    if (rpeChart[reps] && rpeChart[reps][rpe]) { // Überprüft, ob die RPE-Werte für die Wiederholungen vorhanden sind
      const e1rmPercentage = rpeChart[reps][rpe]; // Holt den Prozentsatz des E1RM aus der Tabelle 
      const e1rmValue = weightKg / (e1rmPercentage / 100); // Berechnet das E1RM basierend auf dem Prozentsatz
      // Rundet das E1RM auf das nächste Vielfache von 2,5 kg
      return e1rmValue - (e1rmValue % 2.5); // Gibt das berechnete E1RM zurück
    } else { 
      return null; 
    }
  };

  return (
    <>
      <Head>
        <title>E1RM Calculator - REP.js</title>
        <meta
          name="description"
          content="Calculate your estimated One Rep Max (1RM) based on your last workout set. Optimize your strength training with the 1RM calculator."
        />
      </Head>
      <div className="flex flex-wrap justify-center items-start mt-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg px-10 pt-8 pb-10 mb-4 max-w-lg w-full"
        >
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="exercise"
            >
              Exercise:
            </label>
            <select
              className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
              id="exercise"
              name="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              aria-label="Select exercise"
            >
              <option value="Squat">Squat</option>
              <option value="Bench">Bench Press</option>
              <option value="Deadlift">Deadlift</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="weightKg"
            >
              Weight (kg):
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
              type="number"
              id="weightKg"
              name="weightKg"
              step="0.1"
              min="0"
              required
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              aria-label="Weight in kilograms"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="reps"
            >
              Repetitions:
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
              type="number"
              id="reps"
              name="reps"
              min="1"
              max="12"
              required
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              aria-label="Number of repetitions"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="rpe"
            >
              RPE:
            </label>
            <input
              className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
              type="number"
              id="rpe"
              name="rpe"
              min="6"
              max="10"
              step="0.5"
              required
              value={rpe}
              onChange={(e) => setRpe(e.target.value)}
              aria-label="Rate of perceived exertion"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-primary-orange text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-orange-600"
              type="submit"
            >
              Calculate 1RM
            </button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg text-black border border-gray-200 flex flex-col items-center"
              ref={resultRef}
            >
              <h2 className="text-2xl font-bold text-black mb-2">
                <CountUp start={0} end={result} duration={2.5} decimals={2} />{" "}
                kg
              </h2>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-primary-orange rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center mb-4">
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </>
  );
}
