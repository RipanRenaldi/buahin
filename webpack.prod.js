const {merge} = require("webpack-merge");
const commonConfigJS = require("./webpack.config.js");

module.exports = merge(commonConfigJS,{
    mode : "production",
    devtool : false,
    module : {
        rules : [
            {
                // babel loader
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
})