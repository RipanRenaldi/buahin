const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/js/script.js",
    output : {
        path : path.resolve(__dirname, "public"),
        filename : "bundle.js"
    },
    // loader
    module : {
        rules : [
            {
                // css loader
                test : /\.css$/i,
                use : ["style-loader","css-loader"]
            }
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