import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthPage() {
  const session = useSession();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push('/');
  }, [session]);

  const customTheme = {
    default: {
      colors: {
        brand: '#FF5722',
        background: '#FFFFFF',
        text: '#000000',
        inputBackground: '#F3F4F6',
        inputText: '#1F2937',
        inputBorder: '#D1D5DB',
        inputFocusBorder: '#FF5722',
        inputPlaceholder: '#9CA3AF',
      },
      classes: {
        input: 'rounded-lg',
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <Auth supabaseClient={supabaseClient} appearance={{ theme: customTheme }} theme="default" providers={[]} />
      </div>
    </div>
  );
}
