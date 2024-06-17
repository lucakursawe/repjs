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
    },
  },
  plugins: [],
}
