module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyle's Stuff`,
        short_name: `Kyle's Stuff`,
        description: `Kyle Floros's web dev projects and notes`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3f3f37`,
        display: `standalone`,
        lang: `en`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-react-helmet`,
  ],
}
