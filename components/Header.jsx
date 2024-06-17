import Link from 'next/link'; // Importiere Link-Komponente von Next.js
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'; // Importiere Supabase Auth-Helper
import { useRouter } from 'next/router'; // Importiere Router von Next.js

export default function Header() {
  const user = useUser(); // Hole den Benutzer von Supabase Auth
  const supabaseClient = useSupabaseClient(); // Supabase Client für Authentifizierung
  const router = useRouter(); // Next.js Router für Navigation

  const handleLogout = async () => {
    await supabaseClient.auth.signOut(); // Benutzer ausloggen
    router.push('/auth'); // Umleiten zur Authentifizierungsseite
  };

  const handleProfileClick = () => {
    if (user) {
      router.push('/profile'); // Umleiten zur Profilseite, wenn Benutzer eingeloggt ist
    } else {
      router.push('/auth'); // Umleiten zur Authentifizierungsseite, wenn Benutzer nicht eingeloggt ist
    }
  };

  return (
    <header className="bg-black text-white py-4 shadow-md"> {/* Header-Tag mit Klassen für Hintergrundfarbe, Textfarbe, Innenabstand und Schatten */}
      <div className="container mx-auto flex justify-between items-center px-4"> {/* Container-Div mit Flexbox für zentrierte Ausrichtung und Abstände */}
        <h1 className="text-2xl font-bold"> {/* Überschrift mit Klassen für Schriftgröße und Fettgedruckt */}
          <Link href="/" className="hover:text-primary-orange transition-colors duration-300">
            REP.js {/* Link zur Startseite mit Hover-Effekt */}
          </Link>
        </h1>
        <nav> {/* Navigationsbereich */}
          <ul className="flex space-x-4"> {/* Ungeordnete Liste mit Flexbox und Abstand zwischen den Listenelementen */}
            <li> {/* Listenelement */}
              <Link href="/" className="hover:text-primary-orange transition-colors duration-300">
                Home {/* Link zur Startseite */}
              </Link>
            </li>
            <li> {/* Listenelement */}
              <Link href="/about" className="hover:text-primary-orange transition-colors duration-300">
                About {/* Link zur Über-Seite */}
              </Link>
            </li>
            <li> {/* Listenelement */}
              <Link href="/help" className="hover:text-primary-orange transition-colors duration-300">
                Help {/* Link zur Hilfe-Seite */}
              </Link>
            </li>
            <li> {/* Listenelement */}
              <button
                onClick={handleProfileClick}
                className="hover:text-primary-orange transition-colors duration-300 focus:outline-none">
                Profile {/* Button zum Profil mit Klick-Event und Hover-Effekt */}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
