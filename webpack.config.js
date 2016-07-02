module.exports = {

  devtool: 'source-map',
  entry: './app-client.js',
  output: {
    filename: 'public/bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }

};
