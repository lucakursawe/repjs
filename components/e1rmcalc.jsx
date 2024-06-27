"use client";

import { supabase } from "../utils/supabase"; // Importiere die Supabase-Konfiguration
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react"; // Hook für die Benutzerauthentifizierung von Supabase
import { motion } from "framer-motion"; // Animationen mit Framer Motion
import Head from "next/head"; // Head-Element für die Seiten-Metadaten
import { Line } from "react-chartjs-2"; // Diagramme mit React Chart.js 2
import CountUp from "react-countup"; // Zahlenticker für Animationen

export default function E1RMCalculation() {
  const [exercise, setExercise] = useState("Squat"); // State für die gewählte Übung
  const [reps, setReps] = useState(""); // State für die Wiederholungen
  const [rpe, setRpe] = useState(""); // State für die RPE-Skala
  const [weightKg, setWeightKg] = useState(""); // State für das Gewicht in Kilogramm
  const [result, setResult] = useState(null); // State für das Ergebnis der Berechnung
  const [progress, setProgress] = useState(0); // State für den Fortschritt der Berechnung
  const resultRef = useRef(null); // Referenz für das Ergebnis-Element
  const user = useUser(); // Aktuell angemeldeter Benutzer mit dem Supabase-Authentifizierungs-Hook

  // Funktion zum Absenden des Formulars
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Berechnung des geschätzten 1RM
    const e1rm = calculateE1RM(
      parseFloat(reps),
      parseFloat(rpe),
      parseFloat(weightKg)
    );
    if (e1rm !== null) {
      let resultMessage = `Dein geschätztes 1RM für ${exercise} beträgt: ${e1rm.toFixed(
        2
      )} kg`;
      if (user) {
        const { data, error } = await supabase.from("e1rm").insert([
          {
            user_id: user.id,
            exercise,
            reps: parseFloat(reps),
            rpe: parseFloat(rpe),
            weightKg: parseFloat(weightKg),
            e1rm: e1rm.toFixed(2),
          },
        ]);
        if (error) {
          console.error("Fehler beim Speichern der Daten in Supabase:", error);
        } else {
          console.log("Daten erfolgreich gespeichert:", data);
        }
      } else {
        resultMessage +=
          ". Bitte melde dich an, um deine Berechnung zu speichern und vergangene Ergebnisse anzusehen.";
      }
      setResult(e1rm);
      setProgress((e1rm / 300) * 100); // Annahme: Maximalwert für die Fortschrittsanzeige ist 300 kg
    } else {
      setResult("Ungültige Eingabe! Bitte überprüfe deine Eingaben.");
    }
  };

  // Effekt, um bei Ergebnis die Ansicht zu scrollen
  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  // Funktion zur Berechnung des 1RM basierend auf Wiederholungen und RPE
  const calculateE1RM = (reps, rpe, weightKg) => {
    const rpeChart = {
      1: {
        10: 100,
        9.5: 97.8,
        9.0: 95.5,
        8.5: 92.2,
        8.0: 89.2,
        7.5: 86.3,
        7.0: 83.7,
        6.5: 81.1,
        6.0: 78.6,
      },
      2: {
        10: 95.5,
        9.5: 93.9,
        9.0: 92.2,
        8.5: 90.7,
        8.0: 89.2,
        7.5: 87.8,
        7.0: 86.3,
        6.5: 85.0,
        6.0: 83.7,
      },
      3: {
        10: 92.2,
        9.5: 90.7,
        9.0: 89.2,
        8.5: 87.8,
        8.0: 86.3,
        7.5: 85.0,
        7.0: 83.7,
        6.5: 82.5,
        6.0: 81.1,
      },
      4: {
        10: 89.2,
        9.5: 87.8,
        9.0: 86.3,
        8.5: 85.0,
        8.0: 83.7,
        7.5: 82.5,
        7.0: 81.1,
        6.5: 80.0,
        6.0: 78.6,
      },
      5: {
        10: 86.3,
        9.5: 85.0,
        9.0: 83.7,
        8.5: 82.5,
        8.0: 81.1,
        7.5: 80.0,
        7.0: 78.6,
        6.5: 77.5,
        6.0: 76.4,
      },
      6: {
        10: 83.7,
        9.5: 82.5,
        9.0: 81.1,
        8.5: 80.0,
        8.0: 78.6,
        7.5: 77.5,
        7.0: 76.4,
        6.5: 75.4,
        6.0: 74.3,
      },
      7: {
        10: 81.1,
        9.5: 80.0,
        9.0: 78.6,
        8.5: 77.5,
        8.0: 76.4,
        7.5: 75.4,
        7.0: 74.3,
        6.5: 73.3,
        6.0: 72.2,
      },
      8: {
        10: 78.6,
        9.5: 77.4,
        9.0: 76.2,
        8.5: 75.1,
        8.0: 73.9,
        7.5: 72.3,
        7.0: 70.7,
        6.5: 69.4,
        6.0: 68.0,
      },
      9: {
        10: 76.2,
        9.5: 75.1,
        9.0: 73.9,
        8.5: 72.3,
        8.0: 70.7,
        7.5: 69.4,
        7.0: 68.0,
        6.5: 66.7,
        6.0: 65.3,
      },
      10: {
        10: 73.9,
        9.5: 72.3,
        9.0: 70.7,
        8.5: 69.4,
        8.0: 68.0,
        7.5: 66.7,
        7.0: 65.3,
        6.5: 64.0,
        6.0: 62.6,
      },
      11: {
        10: 70.7,
        9.5: 69.4,
        9.0: 68.0,
        8.5: 66.7,
        8.0: 65.3,
        7.5: 64.0,
        7.0: 62.6,
        6.5: 61.3,
        6.0: 59.9,
      },
      12: {
        10: 68.0,
        9.5: 66.7,
        9.0: 65.3,
        8.5: 64.0,
        8.0: 62.6,
        7.5: 61.3,
        7.0: 59.9,
        6.5: 58.6,
        6.0: 57.4,
      },
    };

    rpe = parseFloat(rpe);
    if (rpeChart[reps] && rpeChart[reps][rpe]) {
      const e1rmPercentage = rpeChart[reps][rpe];
      const e1rmValue = weightKg / (e1rmPercentage / 100);
      // Gerundet auf 2,5 kg Schritte
      return e1rmValue - (e1rmValue % 2.5);
    } else {
      return null;
    }
  };

  return (
    <>
      <Head>
        <title>E1RM Rechner - REP.js</title>
        <meta
          name="description"
          content="Berechne dein geschätztes One Rep Max (1RM) basierend auf deinem letzten Workout-Set. Optimiere dein Krafttraining mit dem 1RM Rechner."
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
              Übung:
            </label>
            <select
              className="shadow appearance-none border border-black rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange"
              id="exercise"
              name="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              aria-label="Übung auswählen"
            >
              <option value="Squat">Kniebeuge</option>
              <option value="Bench">Bankdrücken</option>
              <option value="Deadlift">Kreuzheben</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="weightKg"
            >
              Gewicht (kg):
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
              aria-label="Gewicht in Kilogramm"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="reps"
            >
              Wiederholungen:
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
              aria-label="Anzahl der Wiederholungen"
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
              aria-label="Rate der gefühlten Anstrengung"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-primary-orange text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-orange-600"
              type="submit"
            >
              1RM Berechnen
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
                {/* Zusätzliche Inhalte für das Ergebnis, falls vorhanden */}
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </>
  );
}
