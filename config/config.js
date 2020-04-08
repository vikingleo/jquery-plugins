/**
 * webpack配置文件
 * @type {{}}
 */
// 生成html的URL
module.exports = {
    appDir: '../src',
    projectDir: [
        {dir: 'jquery.vkFileUpload', css: 'css', js: 'js', img: 'img', title: '基于jquery的图片上传插件'},
    ],
    // css是否压缩
    minCss: true,
    // 开发模式输出目录
    devServerOutput: '../dist',
    // 生产模式输出公共目录
    productionOutput: '../dist',
    //开发模式，ts|js
    devFileType: 'ts',

}
