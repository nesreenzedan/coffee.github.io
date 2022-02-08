var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
        publicPath: "",
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1239,
        writeToDisk: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },


        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),


        new HtmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html",
        }),
        new HtmlWebpackPlugin({
            filename: "product1.html",
            template: "./src/product1.html",
        }),
        new HtmlWebpackPlugin({
            filename: "product3.html",
            template: "./src/product3.html",
        }),
        new HtmlWebpackPlugin({
            filename: "content.html",
            template: "./src/content.html",
        }),
        new HtmlWebpackPlugin({
            filename: "agents.html",
            template: "./src/agents.html",
        }),

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new OptimizeCssAssetsPlugin({}),

    ],

};
