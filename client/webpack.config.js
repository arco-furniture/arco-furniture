const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { EnvironmentPlugin } = require('webpack')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined
const webpack = require('webpack')
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} )

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 4450,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    clean: true,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      API: process.env.API,
      LOCATION_KEY: process.env.LOCATION_KEY,
      GEOHELPER_KEY: process.env.GEOHELPER_KEY
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-preset-env')
                ],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'ts-loader',
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};