const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                [
                  "babel-plugin-root-import",
                  {
                    rootPathPrefix: "~",
                    rootPathSuffix: "src",
                  },
                ],
              ],
            },
          },
          { loader: "react-hot-loader/webpack" },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      root: path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "templates/frontend/index.html", to: "index.html" }],
    }),
  ],
  output: {
    filename: "bundle_main.js",
    path: path.resolve(__dirname, "static/frontend"),
    clean: true,
  },
};

// const path = require("path");
// const CopyPlugin = require("copy-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   devServer: {
//     watchFiles: ["src/**/*"],
//     devMiddleware: {
//       writeToDisk: true,
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: "babel-loader",
//             options: {
//               presets: ["@babel/preset-env", "@babel/preset-react"],
//               plugins: [
//                 "@babel/plugin-proposal-class-properties",
//                 [
//                   "babel-plugin-root-import",
//                   {
//                     rootPathPrefix: "~",
//                     rootPathSuffix: "src",
//                   },
//                 ],
//               ],
//             },
//           },
//         ],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: [
//           { loader: "babel-loader" },
//           { loader: "react-hot-loader/webpack" },
//         ],
//       },
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.jpg$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
//         },
//       },
//       {
//         test: /\.png$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
//         },
//       },
//       {
//         test: /\.css$/,
//         include: path.resolve(__dirname, "src"),
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js", ".jsx"],
//     alias: {
//       "~": path.resolve(__dirname, "src"),
//       root: path.resolve(__dirname, "src"),
//     },
//   },
//   plugins: [
//     new CopyPlugin({
//       patterns: [{ from: "templates/frontend/index.html", to: "index.html" }],
//     }),
//   ],
//   output: {
//     filename: "bundle_main.js",
//     path: path.resolve(__dirname, "static/frontend"),
//     clean: true,
//   },
// };
