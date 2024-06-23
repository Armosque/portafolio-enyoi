/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },

      colors: {
        "green-color": "#27AE60",
        "gray-color": "#828282",
        "card-color": "#212121",
        "color-bg": "#171717",
        "menu-color": "#172554",
    },
    backgroundImage: {
      "open-menu": "url('../assets/menu.svg')",
      "close-menu": "url('../assets/close.svg')",
    },
    animation: {
      moveUpDown: 'moveUpDown 2s infinite',
    },
    keyframes: {
      moveUpDown: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      }
    }

    },
  },
  plugins: [],
}

