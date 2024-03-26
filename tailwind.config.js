/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens:{
        'widescreen':{"raw":'(min-aspect-ratio:9/2)'},
        'tallscreen':{"raw":'(min-aspect-ratio:13/20)'},

      },
    },
  },
  plugins: [],
}

