const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            // Creates 'style' noeds from JS strings
          { loader: 'style-loader' },
          { // Translates CSS into CommonJS
            loader: 'css-loader', 
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          { // Autoprefixes CSS // not working..
            loader: 'postcss-loader',
            options: { 
              sourceMap: true,
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          { // Transpiles SCSS to CSS
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ]
      }
    ]
  }
};
