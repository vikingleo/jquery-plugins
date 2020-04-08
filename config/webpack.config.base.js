/**
 * webpack基础配置文件
 * @type {{}}
 */
const path = require('path')
const fs = require('fs')
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//css抽取
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//基础配置
const config = require('./config')
// 入口文件
let entriesFiles = {}
// html列表
let HTMLPlugins = []

// 遍历配置内的页面列表，并生成对应html和js
config.projectDir.forEach(project => {
    const htmlPlugin = new HtmlWebpackPlugin({
        title: project.title,
        filename: `${project.dir}/index.html`,
        template: path.resolve(__dirname, `${config.appDir}/${project.dir}/index.html`),
        chunks: [ project.dir, 'common' ],
        minify: true,
        hash: false,
        inject: 'head',
    })
    HTMLPlugins.push(htmlPlugin)
    // 如果存在js文件，入口文件就定为此
    if (fs.existsSync(path.resolve(__dirname, `${config.appDir}/${project.dir}/${project.js}/index.${config.devFileType}`))) {
        entriesFiles[ project.dir ] = path.resolve(__dirname, `${config.appDir}/${project.dir}/${project.js}/index.${config.devFileType}`)
    }
})

// 导出所有配置
module.exports = {
    entry: entriesFiles,
    devtool: process.env.NODE_ENV !== 'production' && "cheap-modules-source-map",
    output: {
        filename: '[name]/js/[name].js',
        path: path.resolve(__dirname, `../dist`),
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    // 需要用到的 loader
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            // js加载器
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ 'env' ],
                    },
                },
            },
            // 自定义字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ "file-loader" ],
            },
            // ejs加载器
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: () => [
                    {
                        loader: [ 'ts-loader' ],
                    },
                ],
            },

        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js','jsx' ],
    },
    plugins: [
        // 清理dist文件夹
        new CleanWebpackPlugin(),
        // 使用html生成插件生成的html路径
        ...HTMLPlugins,
        //    抽离css
        new MiniCssExtractPlugin({
            filename: '[name]/css/style.css',
        }),
    ],
}

