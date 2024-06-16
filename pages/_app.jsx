import '../styles/globals.css'; // Importiere globale CSS-Styles
import { SessionContextProvider } from '@supabase/auth-helpers-react'; // Importiere SessionContextProvider von Supabase Auth-Helper
import { supabase } from '../utils/supabase'; // Importiere die Supabase-Instanz
import Header from '../components/Header'; // Importiere die Header-Komponente
import Footer from '../components/Footer'; // Importiere die Footer-Komponente
import { SpeedInsights } from "@vercel/speed-insights/next"; // Importiere SpeedInsights von Vercel
import { ErrorBoundary } from 'react-error-boundary'; // Importiere ErrorBoundary von react-error-boundary

// Fehler-Fallback-Komponente
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
      <p>Something went wrong:</p> {/* Nachricht, dass ein Fehler aufgetreten ist */}
      <pre>{error.message}</pre> {/* Anzeige der Fehlermeldung */}
      <button onClick={resetErrorBoundary} className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Try again {/* Button, um es erneut zu versuchen */}
      </button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}> {/* Kontextanbieter für Supabase-Session */}
      <div id="app" className="flex flex-col min-h-screen"> {/* Haupt-Div des Apps mit Flexbox und minimaler Höhe des Bildschirms */}
        <Header /> {/* Einfügen der Header-Komponente */}
        <ErrorBoundary
          FallbackComponent={ErrorFallback} // Fehler-Fallback-Komponente
          onReset={() => {
            // Zustand der App zurücksetzen, damit der Fehler nicht erneut auftritt
            // Zum Beispiel könnte lokaler Zustand zurückgesetzt oder der Benutzer ausgeloggt werden
          }}
        >
          <main className="flex-grow px-6 py-4"> {/* Hauptbereich mit flexiblem Wachstum und Innenabstand */}
            <Component {...pageProps} /> {/* Einfügen der dynamischen Seite */}
            <SpeedInsights /> {/* Einfügen der SpeedInsights-Komponente */}
          </main>
        </ErrorBoundary>
        <Footer /> {/* Einfügen der Footer-Komponente */}
      </div>
    </SessionContextProvider>
  );
}

export default MyApp; // Exportiere die Haupt-App-Komponente
