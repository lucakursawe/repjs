import { Auth } from '@supabase/auth-ui-react'; // Auth-Komponente von Supabase importieren
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'; // useSession und useSupabaseClient Hooks importieren
import { useRouter } from 'next/router'; // useRouter Hook von Next.js importieren
import { useEffect } from 'react'; // useEffect Hook von React importieren

export default function AuthPage() {
  const session = useSession(); // Aktuelle Sitzung von Supabase erhalten
  const supabaseClient = useSupabaseClient(); // Supabase Client erhalten
  const router = useRouter(); // Router von Next.js erhalten

  useEffect(() => {
    if (session) {
      router.push('/'); // Wenn Sitzung vorhanden, zur Startseite weiterleiten
    }
  }, [session]); // useEffect wird ausgeführt, wenn sich die Sitzung ändert

  const customTheme = {
    default: {
      colors: {
        brand: '#FF5722', // Markenfarbe auf Orange setzen
        background: '#FFFFFF', // Hintergrund auf Weiß setzen
        text: '#000000', // Textfarbe auf Schwarz setzen
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Sign in to your account
          </h2>
        </div>
        <Auth
          supabaseClient={supabaseClient} // Supabase Client an Auth-Komponente übergeben
          appearance={{ theme: customTheme }} // Benutzerdefiniertes Thema für das Aussehen
          theme="default" // Standardthema festlegen
        />
      </div>
    </div>
  );
}
