import Link from 'next/link';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function Header() {
  const user = useUser(); // Get user from Supabase Auth
  const supabaseClient = useSupabaseClient(); // Supabase Client for authentication
  const router = useRouter(); // Next.js Router for navigation

  const handleLogout = async () => {
    await supabaseClient.auth.signOut(); // Sign out user
    router.push('/auth'); // Redirect to auth page
  };

  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:text-primary transition-colors duration-300">
            REP.js
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-primary transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-primary transition-colors duration-300">
                Help
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/profile" className="hover:text-primary transition-colors duration-300">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-primary transition-colors duration-300 focus:outline-none"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/auth" className="hover:text-primary transition-colors duration-300">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
