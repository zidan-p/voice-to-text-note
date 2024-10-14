/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // slate-700
        "primary": "#334155",
        // slate-600
        "primary-light": "#475569",
        //slate-800
        "primary-dark": "#1e293b",

        "secondary": "#f1f5f9",
        "secondary-light": "#f8fafc",
        "secondary-dark": "#e2e8f0",

        "success": "#16a34a",
        "success-dark" : "#12552D",
        "warning" : "#FFA50D",
        "danger"  : "#DC2525",
      }
    },
  },
  plugins: [],
}

