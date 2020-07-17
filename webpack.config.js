const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    vendor: ["react"],
    index: ["./src/client.js"]
  },
  output: {
    path: path.resolve(__dirname, "public", "javascripts"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: [/node_modules/, /public/]
      }
    ]
  }
};
