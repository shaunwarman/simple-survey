module.exports = {
    entry: {
        javascript: [__dirname + "/client/js/index.jsx"]
    },
    output: {
        filename: "app.js",
        path: __dirname + "/build"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};