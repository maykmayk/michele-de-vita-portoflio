/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      accent: '#F34914',
      day: "#FFFFFF",
      day100: '#F6F5F5',
      day400: '#7F7975',
      day700: '#2A2827',
      day900: '#1D0B01',
    },
    extend: {
      spacing: {
        '128': '32rem',
      },
      letterSpacing: {
        tighter: '-0.0em', 
      },
      fontFamily: {
        'dm-medium': ['DM-Medium', 'sans-serif'],
        'dm-semibold': ['DM-SemiBold', 'sans-serif'],
        'ibm-mono': ['IBM-Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

