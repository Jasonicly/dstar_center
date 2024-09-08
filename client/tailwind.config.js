// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-pearl-gray': '#f8f6ee',
        'custom-blue': '#6f77e8',
        'custom-misty-red': '#b05b4b',
        'custom-palmhouse': '#91bfa2',
        'custom-primrose': '#fef6b3',
        'custom-goose-gray': '#b5b8b3',
        'custom-beige': '#FFFDD0',
        'custom-white': '#FAFAFA',
        'custom-cloud': '#A1E6E2',
      },
      animation: {
        'fluid-wave': 'fluid 6s ease-in-out infinite',
        'fade-in-scale': 'fadeInScale 2s ease-in-out',
      },
      keyframes: {
        fluid: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeInScale: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  
};
