module.exports = function (grunt) {
  grunt.initConfig({
    jasmine_node: {
      projectRoot: "./spec",
      requirejs: true,
      forceExit: true
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");

  grunt.registerTask("default", function () {
    grunt.log.subhead(">>> Use 'grunt tests' to run Jasmine specs using grunt-jasmine-node. <<<");
  });

  grunt.registerTask("tests", ["jasmine_node"]);
};