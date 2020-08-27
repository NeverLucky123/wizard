// vue.config.js
const TerserPlugin  = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === "production"
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/assets/wizard/dist'
        : '/'
    ,
    configureWebpack: {
        optimization: {
            minimize: true,
            minimizer: isProd ? [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true
                        },
                        output: {
                            comments: false
                        }
                    }
                })
            ] : []
        }
    }
}
