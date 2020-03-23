module.exports = {
  siteMetadata: {
    title: `Last Hope Animal Charity`,
  },
  plugins:  [`gatsby-plugin-react-helmet`,
              {
                resolve: `gatsby-plugin-typography`,
                options: {
                  pathToConfigModule: `src/utils/typography.js`,
                },
              }
            ],
}
