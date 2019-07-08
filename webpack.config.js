module.exports = {
  context: `${__dirname}/src`,
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'less-loader', // compiles Less to CSS, using Node Sass by default
        ],
      },
    ],
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js',
  },
};
