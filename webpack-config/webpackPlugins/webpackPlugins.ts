import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import { IConfigWebpack } from "../model/type";


export function webpackPlugins(configWebpack:IConfigWebpack): webpack.WebpackPluginInstance[] {

    const {paths} = configWebpack

    return [
        new HtmlWebpackPlugin({
          template: paths.indexHTML,
          filename: "index.html",
          title: "Main Page Rest Countries",
          chunks: ["main", "app"],
        }),
        new HtmlWebpackPlugin({
          template: paths.detailHTML,
          filename: "pages/detail.html",
          title: "Detail Page Rest Countries",
          chunks: ["detail", "app"],
        }),
        new MiniCssExtractPlugin({
          filename: "styles/[name].[contenthash].css",
          chunkFilename: "styles/[name].[contenthash].css",
        }),
        new webpack.ProgressPlugin(),
        new CopyPlugin({
          patterns: [
            {
              from: paths.faviconFROM,
              to: paths.faviconTO,
            },
          ],
        }),
      ]
}