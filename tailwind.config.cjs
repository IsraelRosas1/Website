module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#EE4C2C'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            p: { color: '#fff' },
            strong: { color: '#fff' },
            li: { color: '#fff' },
            h1: { color: '#fff' },
            h2: { color: '#fff' },
            h3: { color: '#fff' },
            h4: { color: '#fff' },
            blockquote: { color: 'rgba(255, 255, 255, 0.9)' },
            code: { color: '#fff' },
            a: { color: '#EE4C2C' },
          }
        }
      }
    }
  },
  plugins: [
  require('@tailwindcss/typography'),
  // ... other plugins
],
}
