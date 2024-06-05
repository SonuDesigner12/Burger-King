/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: 'selector',
  theme: {
    extend: {
      keyframe: {
        move: {
          "50%": {
            transform: 'translateY(-1rem)'
          }
        },
        animation: {
          moveingY: 'move 2s linear infinite'
        }
      }
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

