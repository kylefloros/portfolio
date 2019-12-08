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
        icons: [
          {
            src: `images/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `images/apple-touch-icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `images/favicon-32x32-icon.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-lodash`,
  ],
}
