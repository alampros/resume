const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    title: 'Aaron Lampros',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          autoprefixer,
          postcssNested,
          postcssPresetEnv,
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-netlify',
    'gatsby-plugin-resolve-src',
    // 'pretty-html',
    // {
    //   resolve: 'gatsby-plugin-gtag',
    //   options: {
    //     trackingId: 'UA-133753267-1',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-fullstory',
    //   options: {
    //     fs_org: 'MFBHQ',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Aaron Lampros | Resume',
    //     short_name: '@alampros',
    //     start_url: '/',
    //     background_color: '#4FC1B7',
    //     theme_color: '#4FC1B7',
    //     display: 'standalone',
    //     icon: 'static/aaron-sm.jpg',
    //     include_favicon: true,
    //   },
    // },
    // 'gatsby-plugin-offline'
  ],
}
