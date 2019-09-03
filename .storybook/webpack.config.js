const { resolve, join } = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config }) => {
  config.plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  )
  config.resolve.alias = {
    ...config.resolve.alias, 
    "../../theme.config$": join(__dirname, "../src/semantic-ui/theme.config"),
    "../semantic-ui/site": join(__dirname, "../src/semantic-ui/site")
  }
  config.module.rules
  .push(
    {
      test: /\.(ts|tsx)?$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader"),
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        }
      ],
      include: [resolve(__dirname, "../src")]
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development'
          }
        },
        'css-loader',
        'less-loader'
      ]
    }
  )
  config.resolve.extensions.push('.ts', '.tsx');
  config.profile = true;
  config.parallelism = 1;
  return config;
};