module.exports = {
  output: {
    path: __dirname + "/public/js",
    publicPath: __dirname + "/public/js",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
