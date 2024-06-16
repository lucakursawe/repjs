import { Auth } from '@supabase/auth-ui-react'; // Import Auth component from Supabase
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'; // Import hooks for session and Supabase client
import { useRouter } from 'next/router'; // Import useRouter hook from Next.js
import { useEffect } from 'react'; // Import useEffect hook from React

export default function AuthPage() {
  const session = useSession(); // Get current session from Supabase
  const supabaseClient = useSupabaseClient(); // Get Supabase client
  const router = useRouter(); // Get router from Next.js

  // Redirect to homepage if a session is active
  useEffect(() => {
    if (session) {
      router.push('/'); // Redirect to homepage if session exists
    }
  }, [session]); // Run useEffect when session changes

  // Define custom theme for Supabase Auth UI
  const customTheme = {
    default: {
      colors: {
        brand: '#FF5722', // Set brand color to orange
        background: '#FFFFFF', // Set background color to white
        text: '#000000', // Set text color to black
        inputBackground: '#F3F4F6', // Set input background to light gray
        inputText: '#1F2937', // Set input text color to dark gray
        inputBorder: '#D1D5DB', // Set input border color to light gray
        inputFocusBorder: '#FF5722', // Set input focus border color to orange
        inputPlaceholder: '#9CA3AF', // Set placeholder color to medium gray
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Auth
          supabaseClient={supabaseClient} // Pass Supabase client to Auth component
          appearance={{ theme: customTheme }} // Pass custom theme for appearance
          theme="default" // Set default theme
        />
      </div>
    </div>
  );
}
