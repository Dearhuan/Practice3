const path = require('path');
// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导出模块，必须这样写，webpack定制的写法，webpack的命令使用
module.exports = {
    mode: 'development', // 可以设置为开发模式或者生产模式 production
    entry: './src/index.js', // 配置我需要处理的入口模块
    output: {
        filename: '[hash].js', // 把入口模块所有的模块，通通打包进bundle.js文件里面
        path: path.resolve(__dirname, 'dist') // 配置打包输出的地方
    },
    module: {
        rules: [
            // 处理.txt后缀的文件 raw-loader加载器去把webpack拓展了一些功能
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.jade$/,
                use: 'jade-loader'
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss|css$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            }
        ]
    },
    // 监听文件变动，自动编译文件
    // watch: true,
    // webpack本身没有的，额外增加的东西就叫插件
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        // new HtmlWebpackPlugin()
    ],
    // 配置webpack的服务器
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};