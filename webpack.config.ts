import webpack from 'webpack';


import { webpackConfig} from './webpack-config';
import { IPath, TypeMods } from './webpack-config/model/type';
import path from 'path';

const paths: IPath = {
    main: path.resolve(__dirname, "src", "js/index.ts"),
    detail: path.resolve(__dirname, "src/js", "detail.ts"),
    app: path.resolve(__dirname, "src/js", "app.ts"),
    output: path.resolve(__dirname, "build"),
    devServer: path.join(__dirname, "build"),
    indexHTML: path.resolve(__dirname, "src", "index.html"),
    detailHTML: path.resolve(__dirname, "src/pages", "detail.html"),
    faviconFROM: path.resolve(__dirname, "src/assets/favicon"),
    faviconTO: path.resolve(__dirname, "build", "assets/favicon")
}

interface ENV {
    mode: TypeMods;
}

export default (env:ENV ) => {

    const mode = env.mode

    const config: webpack.Configuration = webpackConfig({
        paths,
        mode
    });
    
    return config
};

