import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv !== "development";
// Common plugins
let plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  },new HtmlWebpackPlugin({
    title: 'Development',
  }),),
];
if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}
const entry = isProduction
  ? ["babel-polyfill", path.resolve(path.join(__dirname, "./server.js"))]
  : [
      "webpack/hot/poll?1000",
      "babel-polyfill",
      path.resolve(path.join(__dirname, "./server.js")),
    ];

export default {
  mode: "development",
  devtool: false,
  externals: [nodeExternals()],
  name: "server",
  plugins: plugins,
  target: "node",
  entry: './server.js',
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "public"),
    filename: "server.prod.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [
      ".webpack-loader.js",
      ".web-loader.js",
      ".loader.js",
      ".js",
      ".jsx",
    ],
    modules: [path.resolve(__dirname, "node_modules")],
  },
  module: {
    rules: [
      {
        test: /.(js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
    ],
  },
  devServer: {
    port: 4000, // port webpack-dev-server listens to, defaults to 8080
    hot: true
  },
};
