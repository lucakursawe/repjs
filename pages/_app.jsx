import "../styles/globals.css"; // Importiere globale CSS-Stile
import { SessionContextProvider } from "@supabase/auth-helpers-react"; // Importiere SessionContextProvider von Supabase Auth-Helper
import { supabase } from "../utils/supabase"; // Importiere die Supabase-Instanz
import Header from "../components/Header"; // Importiere die Header-Komponente
import Footer from "../components/Footer"; // Importiere die Footer-Komponente
import { SpeedInsights } from "@vercel/speed-insights/next"; // Importiere SpeedInsights von Vercel
import { ErrorBoundary } from "react-error-boundary"; // Importiere ErrorBoundary von react-error-boundary

// Fehler-Fallback-Komponente
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
      <p>Etwas ist schiefgelaufen:</p> {/* Fehlermeldung */}
      <pre>{error.message}</pre> {/* Zeige Fehlermeldung an */}
      <button
        onClick={resetErrorBoundary}
        className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Versuche es erneut {/* Button zum Wiederholen */}
      </button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      {" "}
      {/* Kontext-Anbieter für Supabase-Sitzung */}
      <div id="app" className="flex flex-col min-h-screen">
        {" "}
        {/* Haupt-Div der App mit Flexbox und minimaler Bildschirmhöhe */}
        <Header /> {/* Header-Komponente einfügen */}
        <ErrorBoundary
          FallbackComponent={ErrorFallback} // Fehler-Fallback-Komponente
          onReset={() => {
            // Setze den Zustand der App zurück, um zu verhindern, dass der Fehler erneut auftritt
            // Zum Beispiel lokalen Zustand zurücksetzen oder Benutzer ausloggen
          }}
        >
          <main className="flex-grow px-6 py-4">
            {" "}
            {/* Hauptbereich mit flexiblem Wachstum und Padding */}
            <Component {...pageProps} />{" "}
            {/* Dynamische Seitenkomponente einfügen */}
            <SpeedInsights /> {/* SpeedInsights-Komponente einfügen */}
          </main>
        </ErrorBoundary>
        <Footer /> {/* Footer-Komponente einfügen */}
      </div>
    </SessionContextProvider>
  );
}

export default MyApp; // Exportiere die Haupt-App-Komponente
