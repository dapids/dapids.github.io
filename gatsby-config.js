const path = require('path')

module.exports = {
  siteMetadata: {
    author: `@dapids`,
    description: `Software engineering fanatic. Passionate about ancient languages. Dreamer. Karma believer. Hugger.`,
    image: "/images/me.jpg",
    title: `David Sorrentino`,
    twitterUsername: "@dapids",
    url: "https://www.davidsorrentino.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `lato\:400,700`
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages'),
        ui: path.join(__dirname, 'src/ui'),
      },
    },
  ],
}
