const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(
      {
        themes: {
          light: {
            // ...
            colors: {
              background: '#f4f4f5', // zinc-100
              foreground: '#27272a', // zinc-800
              primary: {
                DEFAULT: "#2e1065", // violet-950
      
              },
              focus: "#2e1065",
            },
          },
          dark: {
            // ...
            colors: {
              background: '#020617', // slate-950
              foreground: '#e4e4e7', // zinc-200
              primary: {
                DEFAULT: "#7c3aed", // violet-600
      
              },
              focus: "#7c3aed",
            },
          },
          // ... custom themes
        },
      }
    ),
   
  ],
}

