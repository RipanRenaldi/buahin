const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/js/script.js",
    output : {
        path : path.resolve(__dirname, "public"),
        filename : "bundle.js",
        assetModuleFilename : "[name][ext]"
    },
    // loader
    module : {
        rules : [
            {
                // css loader
                test : /\.css$/i,
                use : ["style-loader","css-loader"]
            },
            {
                test : /\.(jpg|jpeg|png|svg)$/i,
                type : "asset/resource"
            },

        ]
    },
    // hmtl template plugins
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/html/index.html",
            filename : "index.html"
        })
    ]
}