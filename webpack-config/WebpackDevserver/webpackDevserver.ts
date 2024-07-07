import path from "path";
import {Configuration} from 'webpack-dev-server';


export function webpackDevserver(): Configuration {
    return {
        static: {
        directory: path.join(__dirname, "build"),
      },
      compress: true,
      port: 3001,
      hot: true,
      open: true,
    }
}