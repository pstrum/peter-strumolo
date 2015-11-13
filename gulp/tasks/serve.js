var gulp = require('gulp');
var config = require('../config').server; // Require the server task object from the config file
var server = require('gulp-express');

// Gulp's task method to define a task and the function that performs the task's operations
gulp.task('serve', function() {
  // Use the run method of the gulp-express module, passing in an array with the serverFile property
  server.run([config.serverFile]);
  // Use the gulp watch method to monitor files change and do something
  // gulp.watch([config.serverFile], [server.run]);
});
