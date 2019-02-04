module.exports = {
  siteMetadata: {
    title: 'Aaron Lampros',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        jsxPragma: 'jsx',
      },
    },
  ],
}
