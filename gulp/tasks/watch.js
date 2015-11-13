var gulp = require('gulp');
var config = require('../config');
var server = require('gulp-express');

gulp.task('watch', function() {
  gulp.watch(config.index.src, ['index']);
  gulp.watch(config.server.serverFile, [server.run]);
});
