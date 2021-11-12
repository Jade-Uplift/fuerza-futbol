module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: [
    "./src/components/*.js",
    "./src/components/**/*.js",
    "./src/data/*.js",
    "./src/pages/*.js"
  ]
};
