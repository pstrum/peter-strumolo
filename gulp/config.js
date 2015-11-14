var dest = "./build";
var src = "./src";

// Assign each tast object to module.exports
module.exports = {
  index: {
    src: src + "/index.html",
    dest: dest
  },
  javascript: {
    src: src + "/js/**/*.js",
    dest: dest + "/js/",
    entryPoint: src + "/js/entry.js",
    packedFile: "packed.js"
  },
  server: {
    serverFile: "./server.js"
  }
};