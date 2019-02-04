exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  })
}
