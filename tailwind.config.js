/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.125rem',
      '2xl': '1.375rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'system-ui']
      },
      borderRadius: {
        '3xl': '2.5rem',
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}

