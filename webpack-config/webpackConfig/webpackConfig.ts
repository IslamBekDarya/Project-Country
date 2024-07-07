import { webpackPlugins } from "../webpackPlugins/webpackPlugins";
import { webpackDevserver } from "../WebpackDevserver/webpackDevserver";
import { webpackLoader } from "../webpackLoader/webpackLoader";
import { webpackResolve } from "../webpackResolve/webpackResolve";
import webpack from "webpack";
import { IConfigWebpack } from "../model/type";

export function webpackConfig(
  configWebpack:IConfigWebpack
  ): webpack.Configuration {
    const {paths, mode} = configWebpack;

    return  {
        mode,
        entry: {
          main: paths.main,
          detail: paths.detail,
          app: paths.app,
        },
        output: {
          path: paths.output,
          filename: "[name].[contenthash].js",
          clean: true,
        },
        plugins: webpackPlugins(configWebpack),
        devServer: webpackDevserver(),
        module: webpackLoader(),
        resolve: webpackResolve(),
        devtool: 'inline-source-map'
      }
}