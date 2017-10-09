module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,  // path where our files are going to live
        name: 'pages'
      }
    },
    `gatsby-transformer-remark`
  ],
}
