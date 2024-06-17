module.exports = {
  content: ['./{pages,components,auth}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'], // Custom mono font
      },
      colors: {
        'primary-orange': '#FF5722', // Custom primary orange color
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to right, #FF5722, #FFA726)', // Custom gradient background
      },
    },
  },
  plugins: [],
}
