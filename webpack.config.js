const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : {
        app : "./src/js/script.js",
        faq : "./src/js/faq.js",
        upload : "./src/js/upload.js",
        test : "./src/js/result.js"
    },
    output : {
        path : path.resolve(__dirname, "public"),
        filename : "bundle.[name][contenthash].js",
        assetModuleFilename : "[name][ext]",
        clean:true
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
                test : /\.(jpg|jpeg|png|svg|json)$/i,
                type : "asset/resource"
            },

        ]
    },
    // hmtl template plugins
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/html/index.html",
            filename : "index.html",
            chunks : ["app"]
        }),
        new htmlWebpackPlugin({
            template : "./src/html/faq.html",
            filename : "faq.html",
            chunks : ["faq"]
        }),
        new htmlWebpackPlugin({
            template : "./src/html/upload.html",
            filename : "upload.html",
            chunks : ["upload"]
        }),
        new htmlWebpackPlugin({
            template : "./src/html/result.html",
            filename : "result.html",
            chunks : ["test"]
        })
    ]
}