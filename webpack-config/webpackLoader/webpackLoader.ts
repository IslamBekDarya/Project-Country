import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function webpackLoader(): webpack.ModuleOptions {
    return {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader",
            ],
            exclude: /node_modules/,
            // use: {
            //   loader: "babel-loader",
            //   options: {
            //     presets: ["@babel/preset-env"],
            //   },
            // },
            // test: /\.(png|jpe?g|gif|svg)$/i,
            // use: [
            //   {
            //     loader: "file-loader",
            //     options: {
            //       name: 'assets/images/[name].[ext]',
            //     },
            //   },
              
            // ],
          },
        ],
      }
}