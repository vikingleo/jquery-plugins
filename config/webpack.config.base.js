/**
 * webpack配置文件
 * @type {{}}
 */
const fs = require('fs')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MultipleOutpathWebpackPlugin = require('./plugins/multiple-outpath-webpack-plugin')
const {sourceDir, appDir, minJs, outPath} = require('./config')
/**
 * 拼接所有目录下的js路径
 * @returns {string[]}
 */
const entries = () => {
    let files = {}
    for (let {dir, css, js, img, title} of sourceDir) {
        for (let file of fs.readdirSync(`${appDir}/${dir}/${js}`)) {
            files[ dir ] = `${appDir}/${dir}/${js}/${file}`
        }
    }
    return files
}
console.log(entries())
module.exports = {
    entry: entries(),
    output: {
        path: path.resolve(__dirname, outPath),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js|\.es6|\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MultipleOutpathWebpackPlugin()
    ],
    optimization: {
        minimize: minJs
    }
}
