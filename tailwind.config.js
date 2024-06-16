module.exports = {
  content: ['./{pages,components,auth}/**/*.{js,ts,jsx,tsx,mdx}'],
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