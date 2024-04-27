/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'surface-darkest': '#ffffff',     // White for highest contrast background
        'surface-dark': '#f4f4f8',        // Very light gray for less critical background elements
        'surface-mid': '#e0e0e0',         // Light gray, provides subtle contrast against white
        'surface-mid-dark': '#cccccc',    // Mid-tone gray, good for secondary text
        'surface-mid-light': '#b8b8b8',   // Darker gray for important text or UI elements
        'surface-light-dark': '#a3a3a3',  // Even darker gray, stands out well for icons or buttons
        'surface-light': '#8f8f8f',       // Close to dark gray, excellent for contrast with white
        'primary': '#6200ee',             // A vibrant, deep purple for primary buttons and links
        'secondary': '#3700B3'            // A deeper purple for secondary accents and features
      },
    },
  },
  plugins: [
    // Place for any additional plugins needed
  ],
});
