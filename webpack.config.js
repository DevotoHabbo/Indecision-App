// entry -> output
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
          {
            test:/\.s?css$/i,
            use: ['style-loader', 'css-loader','sass-loader']
          }
        ]
      },
      devtool:'cheap-module-eval-source-map',
      devServer:{
        contentBase: path.join(__dirname,'public')
      }
}