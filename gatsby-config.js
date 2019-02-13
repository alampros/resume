module.exports = {
  siteMetadata: {
    title: 'Aaron Lampros',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-nested')()],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-resolve-src',
    'pretty-html',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        jsxPragma: 'jsx',
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-133753267-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Aaron Lampros | Resume',
        short_name: '@alampros',
        start_url: '/',
        background_color: '#4FC1B7',
        theme_color: '#4FC1B7',
        display: 'standalone',
        icon: 'static/aaron-sm.jpg',
        include_favicon: true,
      },
    },
  ],
}
