import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',
    path: __dirname + '/build/assets/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json']
  },

  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader' },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', exclude: /node_modules/, test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  devServer: {
    hot: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3010/graphql'
      }
    }
  }

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // }
}

export default config
