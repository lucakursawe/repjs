/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './auth/**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to right, #FF5722, #FFA726)',
      },
    },
  },
  plugins: [],
}
