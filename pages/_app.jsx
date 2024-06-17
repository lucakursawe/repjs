import '../styles/globals.css'; // Import global CSS styles
import { SessionContextProvider } from '@supabase/auth-helpers-react'; // Import SessionContextProvider from Supabase Auth-Helper
import { supabase } from '../utils/supabase'; // Import the Supabase instance
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import SpeedInsights from Vercel
import { ErrorBoundary } from 'react-error-boundary'; // Import ErrorBoundary from react-error-boundary

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
      <p>Something went wrong:</p> {/* Error message */}
      <pre>{error.message}</pre> {/* Display error message */}
      <button
        onClick={resetErrorBoundary}
        className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Try again {/* Retry button */}
      </button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}> {/* Context provider for Supabase session */}
      <div id="app" className="flex flex-col min-h-screen"> {/* Main app div with flexbox and minimum screen height */}
        <Header /> {/* Insert Header component */}
        <ErrorBoundary
          FallbackComponent={ErrorFallback} // Error fallback component
          onReset={() => {
            // Reset the state of the app to prevent the error from reoccurring
            // For example, reset local state or log the user out
          }}
        >
          <main className="flex-grow px-6 py-4"> {/* Main area with flexible growth and padding */}
            <Component {...pageProps} /> {/* Insert dynamic page */}
            <SpeedInsights /> {/* Insert SpeedInsights component */}
          </main>
        </ErrorBoundary>
        <Footer /> {/* Insert Footer component */}
      </div>
    </SessionContextProvider>
  );
}

export default MyApp; // Export the main app component
