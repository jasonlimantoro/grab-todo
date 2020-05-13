const path = require("path");

function resolve(subdir) {
  return path.resolve(__dirname, subdir);
}

module.exports = {
  outputDir: resolve("../dist"),
  templateDir: resolve("../templates"),
  sourceDir: resolve("../src"),

  get mainTemplate() {
    return `${this.templateDir}/index.html`;
  },
  get entryFile() {
    return `${this.sourceDir}/index.jsx`;
  },
};
