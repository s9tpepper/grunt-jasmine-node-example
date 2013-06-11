module.exports = function (grunt) {
  grunt.initConfig({
    jasmine_node: {
      projectRoot: "./spec",
      requirejs: true,
      forceExit: true
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");

  grunt.registerTask("default", ["jasmine_node"]);
};