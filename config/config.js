/**
 * webpack配置文件
 * @type {{}}
 */
// 生成html的URL
module.exports = {
    appDir: './src',
    //插件项目文件
    sourceDir: [
        {dir: 'jquery.juPicture', css: 'css', js: 'js', img: 'img', title: '基于jquery的图片上传插件'},
        {dir: 'jquery.juDrawer', css: 'css', js: 'js', img: 'img', title: '基于jquery的抽屉插件'}
    ],
    // css是否压缩
    minCss: true,
    minJs: true,
    // 生产模式输出公共目录
    outPath: '../dist',
    sourceExtName: ['es6','js'],

}
