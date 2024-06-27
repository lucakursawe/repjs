import Link from "next/link"; // Importiere die Link-Komponente von Next.js
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"; // Importiere die Supabase Auth-Helper
import { useRouter } from "next/router"; // Importiere den Router von Next.js
import { useState } from "react"; // Importiere useState für die Zustandsverwaltung

export default function Header() {
  const user = useUser(); // Hole den Benutzer von Supabase Auth
  const supabaseClient = useSupabaseClient(); // Supabase Client für die Authentifizierung
  const router = useRouter(); // Next.js Router für die Navigation

  const [menuOpen, setMenuOpen] = useState(false); // Zustand für das Burger-Menü

  const handleLogout = async () => {
    await supabaseClient.auth.signOut(); // Benutzer ausloggen
    router.push("/auth"); // Umleiten zur Authentifizierungsseite
  };

  const handleProfileClick = () => {
    if (user) {
      router.push("/profile"); // Umleiten zur Profilseite, wenn Benutzer eingeloggt ist
    } else {
      router.push("/auth"); // Umleiten zur Authentifizierungsseite, wenn Benutzer nicht eingeloggt ist
    }
  };

  return (
    <header className="bg-black text-white py-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link
            href="/"
            className="hover:text-primary-orange transition-colors duration-300"
          >
            REP.js
          </Link>
        </h1>
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 hover:text-primary-orange transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className="hidden lg:flex lg:items-center lg:space-x-4">
          <ul className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
            <li>
              <Link
                href="/"
                className="hover:text-primary-orange transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary-orange transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="hover:text-primary-orange transition-colors duration-300"
              >
                Help
              </Link>
            </li>
            <li>
              <button
                onClick={handleProfileClick}
                className="hover:text-primary-orange transition-colors duration-300 focus:outline-none"
              >
                Profile
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      {/* Pop-Out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-32 bg-primary-orange text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button
          className="text-white focus:outline-none p-4"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="w-6 h-6 hover:text-black transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="space-y-4 p-4">
          <li>
            <Link
              href="/"
              className="hover:text-black transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-black transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/help"
              className="hover:text-black transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Help
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                handleProfileClick();
                setMenuOpen(false);
              }}
              className="hover:text-black transition-colors duration-300 focus:outline-none"
            >
              Profile
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
