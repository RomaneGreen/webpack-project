
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
         rules: [ {
            text: /\.(.js|.jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            text: /\.(.js|.jsx)$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
          }
         ]
       
    },
    resolve:{
        extensions: ['js','jsx']
    }
}