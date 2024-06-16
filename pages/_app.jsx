import '../styles/globals.css';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from '../utils/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <div id="app" className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </SessionContextProvider>
  );
}

export default MyApp;
