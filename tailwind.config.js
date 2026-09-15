/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#16202E',
          dark: '#0E151F',
          light: '#1F2C3F',
          subtle: '#28384E'
        },
        overseas: {
          DEFAULT: '#446CB5',
          hover: '#36599B',
          light: '#EEF3FB',
          border: '#D3E0F3'
        },
        linkedin: {
          DEFAULT: '#0A66C2',
          hover: '#084E96',
          dark: '#004182',
          light: '#E8F3FF'
        },
        surface: {
          DEFAULT: '#F8FAFC',
          card: '#FFFFFF',
          subtle: '#F1F5F9'
        },
        content: {
          primary: '#16202E',
          secondary: '#595F69',
          muted: '#8B95A5'
        }
      },
      fontFamily: {
        heading: ['"Inter Tight"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        'clean': '0 4px 20px -2px rgba(22, 32, 46, 0.06)',
        'elevated': '0 12px 32px -4px rgba(22, 32, 46, 0.12)',
        'blue-glow': '0 0 25px -3px rgba(68, 108, 181, 0.25)',
        'linkedin-glow': '0 0 25px -3px rgba(10, 102, 194, 0.3)'
      }
    },
  },
  plugins: [],
}
