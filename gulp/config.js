var dest = "./build";
var src = "./src";

// Assign each tast object to module.exports
module.exports = {
  index: {
    src: src + "/index.html",
    dest: dest
  },
  server: {
    serverFile: "./server.js"
  }
};
