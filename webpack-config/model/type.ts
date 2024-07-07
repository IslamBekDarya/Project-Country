export interface IPath {
    main: string;
    detail: string;
    app: string;
    output: string;
    
    devServer: string;
    indexHTML: string;
    detailHTML: string;
    faviconFROM: string;
    faviconTO: string;
}

export type TypeMods = "development" | "production"

export interface IConfigWebpack {
    paths: IPath;
    mode: TypeMods
}