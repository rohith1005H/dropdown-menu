const path = require("path");

module.exports = {
  entry: "./src/dropdown.js",
  output: {
    filename: "dropdown.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "Dropdown",
    libraryTarget: "umd",
    globalObject: "this",
  },
  mode: "production",
};
