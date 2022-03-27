const path = require('path')

class MultipleOutpathWebpackPlugin {
    apply(compiler) {
        // 输出之前
        compiler.hooks.emit.tapAsync('MultipleOutpathWebpackPlugin', (compilation, callback) => {
            compilation.chunks.forEach(chunk => {
                for (const fileName in Object.keys(compilation.assets)) {
                    console.log(fileName)
                    compilation.assets[ `${path.basename(fileName, '.js')}/js/index.js` ] = {
                        source() {
                            return value
                        },
                        size() {
                            return this.source().length
                        }
                    }
                }
            })
            for (let i of Object.keys(compilation.assets)) {
                delete compilation.assets[ i ]
            }
            callback()
        })
    }
}

module.exports = MultipleOutpathWebpackPlugin
