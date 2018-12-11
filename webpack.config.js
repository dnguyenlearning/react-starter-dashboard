const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
module.exports = {
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            },
            {
                test: /^.((?!cssmodule).)*\.css$/,
                loaders: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    resolve:{
        alias: {
            variables: path.resolve(__dirname, './variable.scss'),
            styled_variables$: path.resolve(__dirname, './styled_component_variables.js'),
            "utils": path.join(__dirname, "/src/utils"),
            "components": path.join(__dirname, "/src/components"),
            "services": path.join(__dirname, "/src/services"),
            "routes": path.join(__dirname,"./src/app/routes"),
            client$: path.resolve(__dirname, './src/client.js')

        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
};
