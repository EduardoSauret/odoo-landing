const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/main.js', // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Where to output the build files
    filename: 'bundle.js', // The name of the bundled JavaScript file
  },
  module: {
    rules: [
      // JavaScript rule
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // If you need to compile modern JS down to ES5
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // SCSS rule
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to a file
          'css-loader', // Turns CSS into commonjs
          'sass-loader', // Compiles Sass to CSS
        ],
      },
      // Images and Fonts rule
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: './assets/images/[name][ext][query]', // Adjust the output path as necessary
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your HTML file to use as a template
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // The name of the extracted CSS file
    }),
  ],
  devServer: {
    static: './dist', // The static files directory
    open: true, // To open the browser after server had been started
    compress: true, // Enable gzip compression for everything served
    port: 8100, // Port to run the server on
  },
};
