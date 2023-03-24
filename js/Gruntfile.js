module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          '.css': '.wc'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};