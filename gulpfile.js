// Automatically require all files
var requireTasks = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireTasks('./gulp/tasks', { recurse: true });

