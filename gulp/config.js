var dest = "./build";
var src = "./src";

// Assign each tast object to module.exports
module.exports = {
  index: {
    src: src + "/index.html",
    dest: dest
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
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