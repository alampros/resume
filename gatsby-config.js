const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const git = require('git-rev-sync')
const pkg = require('./package.json')

const branch = process.env.BRANCH || git.branch()

module.exports = {
  siteMetadata: {
    title: 'Aaron Lampros',
    shortHash: git.short(),
    hash: git.long(),
    branch,
    package: pkg,
    lastUpdated: git.date(),
  },
  plugins: [
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        cssLoaderOptions: {
          esModule: true,
          modules: {
            namedExport: true,
          },
        },
        postCssPlugins: [
          autoprefixer,
          postcssNested,
          postcssPresetEnv,
        ],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-dts-css-modules',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-resolve-src',
    'pretty-html',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-133753267-1',
      },
    },
    {
      resolve: 'gatsby-plugin-fullstory',
      options: {
        fs_org: 'MFBHQ',
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
    'gatsby-plugin-offline'
  ],
}
