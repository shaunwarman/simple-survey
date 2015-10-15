module.exports = {
    entry: {
        javascript: [__dirname + "/client/js/index.jsx",
                    __dirname + "/server/components/HomePage.jsx"
        ],
        html: __dirname + "/client/index.html"
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