import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function AuthPage() {
  const session = useSession(); // Verwende die Session-Hook von Supabase
  const supabaseClient = useSupabaseClient(); // Verwende den Supabase-Client für die Authentifizierung
  const router = useRouter(); // Verwende den Next.js Router für die Navigation

  useEffect(() => {
    if (session) router.push("/"); // Weiterleitung zur Startseite, wenn eine Session besteht
  }, [session]);

  // Benutzerdefiniertes Farbschema für die Authentifizierungskomponente
  const customTheme = {
    default: {
      colors: {
        brand: "#FF5722",
        background: "#FFFFFF",
        text: "#000000",
        inputBackground: "#F3F4F6",
        inputText: "#1F2937",
        inputBorder: "#D1D5DB",
        inputFocusBorder: "#FF5722",
        inputPlaceholder: "#9CA3AF",
      },
      classes: {
        input: "rounded-lg", // Abgerundete Ecken für Eingabefelder
      },
    },
  };

  return (
    <>
      <Head>
        <title>Anmelden - REP.js</title> {/* Titel der Seite */}
        <meta
          name="description"
          content="Melden Sie sich an oder registrieren Sie sich, um auf die E1RM Calculator Web-App zuzugreifen und Ihren Fortschritt zu speichern."
        />{" "}
        {/* Meta-Beschreibung */}
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Flexbox für zentrierte Ausrichtung */}
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
          {" "}
          {/* Maximale Breite, Abstand zwischen den Elementen, Padding, Hintergrund, abgerundete Ecken und Schatten */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Melden Sie sich bei Ihrem Konto an
          </h2>{" "}
          {/* Überschrift mit zentriertem Text, größerer Schrift und Fettdruck */}
          <Auth
            supabaseClient={supabaseClient}
            appearance={{ theme: customTheme }}
            theme="default"
            providers={[]}
          />{" "}
          {/* Authentifizierungskomponente mit Supabase-Client, benutzerdefiniertem Erscheinungsbild und leeren Anbietern */}
        </div>
      </div>
    </>
  );
}
