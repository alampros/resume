exports.onCreateWebpackConfig = function({ actions, plugins }) {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    plugins: [
      plugins.provide({
        React: 'react',
      }),
    ],
  })
}
