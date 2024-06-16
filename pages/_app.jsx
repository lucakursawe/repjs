import '../styles/globals.css';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from '../utils/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ErrorBoundary } from 'react-error-boundary';

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Try again</button>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <div id="app" className="flex flex-col min-h-screen">
        <Header />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // Reset the state of your app so the error doesn't happen again
            // For example, you might want to clear some local state or log the user out
          }}
        >
          <main className="flex-grow px-6 py-4">
            <Component {...pageProps} />
            <SpeedInsights />
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </SessionContextProvider>
  );
}

export default MyApp;
