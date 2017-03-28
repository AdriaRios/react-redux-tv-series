const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // entry point
    entry: [
        './src/sass/style.scss',
        './src/js/index.js'
    ],
    // JavaScrip bundle file
    output: {
        path: '/',
        filename: './dist/js/bundle.js'
    },
    // Setup server
    devServer: {
        inline: true,
        port: 8081,
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        // JS, JSX and SASS loaders
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/css/style.css')
    ],
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};