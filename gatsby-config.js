module.exports = {
  siteMetadata: {
    title: `David Sorrentino - Tech Lead @ ProntoPro`,
    description: `Frontend Architect. Fullstack TypeScript Engineer. Software development enthusiast. Currently working with: React, React Native, Redux, Reselect, Immutable.js, Node.js, Jest, Webpack.`,
    author: `@dapids`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
