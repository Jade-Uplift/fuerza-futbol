module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-codebushi',
      options: {
        tailwindConfig: 'tailwind.config.js'
      }
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    }
  ]
};
