/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  important: '#root',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sauce One"', 'system-ui', 'sans-serif'],
      },
      colors: {
        nexora: {
          navy: '#003966',
          blue: '#0059a7',
          action: '#0067bd',
          soft: '#eaf4ff',
          line: '#cfe0f5',
          text: '#1d2733',
          muted: '#667085',
        },
      },
      boxShadow: {
        nexora: '0 24px 52px rgba(0, 66, 126, 0.12)',
      },
    },
  },
  plugins: [],
};
