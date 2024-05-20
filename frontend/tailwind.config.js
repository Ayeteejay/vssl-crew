const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        ink:"#000000",
        bronze:"#9C794F",
        smoke:"#FFFFFF",
        iron:"#222222",
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        swim:{
          "0%, 100%":{transform:"translate(0,0) rotate(0deg)"},
          '50%':{transform:"translate(-35%,200%) rotate(25deg)"},
        },
        compass:{
          "0%, 100%":{transform:"rotate(0deg)"},
          '50%':{transform:"rotate(360deg)"},
        },
        float:{
          "0%, 100%":{transform:"translate(0,0)"},
          '50%':{transform:"translate(0, 50px)"},
        },
        bubble_float_1:{
          "0%, 100%":{transform:"translate(0,0)"},
          '50%':{transform:"translate(0, 25px)"},
        },
        bubble_float_2:{
          "0%, 100%":{transform:"translate(0,0)"},
          '50%':{transform:"translate(0, -10px)"},
        },
        bubble_float_3:{
          "0%, 100%":{transform:"translate(0,0)"},
          '50%':{transform:"translate(0, 5px)"},
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'swim': 'swim 10s ease-in-out infinite',
        'compass': 'compass 20s ease-in-out infinite',
        'float': "float 5s ease-in-out infinite",
        'bubble-float-1':"bubble_float_1 8s ease-in-out infinite",
        'bubble-float-2':"bubble_float_2 4s ease-in-out infinite",
        'bubble-float-3':"bubble_float_3 6s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
