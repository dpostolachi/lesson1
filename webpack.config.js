const path = require('path')

module.exports = {
    entry: {
        js: [
            'babel-polyfill', path.join( __dirname, 'src/index.js'  )
        ]
    },
    mode: 'development',
    target: 'web',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
}
