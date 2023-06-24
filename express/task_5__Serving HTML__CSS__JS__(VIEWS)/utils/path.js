const path = require("path");

// path.dirname(process.mainModule.filename)// (older way - not used in current context, this is deprecated)
const rootDir = path.dirname(require.main.filename);
const viewPath = (view) => {
  return path.join(rootDir, "views", view);
};
module.exports = viewPath;
