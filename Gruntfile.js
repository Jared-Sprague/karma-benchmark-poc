module.exports = function(grunt) {

  const KARMA_TASKS = require('./grunt-karma.js');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: KARMA_TASKS,

  });

  grunt.loadNpmTasks('grunt-karma');
};
