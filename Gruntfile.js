module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   app: {
    //     files: {'build/static/js/app.min.js': ['myproject/static/js/app/**/*.js']}
    //   },
    //   vendor: {
    //     files: {'assets/static/js/lib.min.js': ['myproject/static/js/vendor/**/*.js']}
    //   }
    // }
    sass: {
      dev: {
        options: {
          includePaths: ['bower_components/foundation/scss']
        },
        files: {
          'assets/css/main.css': 'assets/css/bootstrap.scss'
        }
      },
      deploy: {
        options: {
          includePaths: ['bower_components/foundation/scss'],
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/main.css': 'assets/css/bootstrap.scss'
        }
      }
    },
    watch: {
        options: {
          livereload: true
        },
        // javascript: {
        //     files: ['myproject/static/js/app/**/*.js'],
        //     tasks: ['concat']
        // },
        sass: {
            files: 'assets/css/**/*.scss',
            tasks: ['sass:dev']
        }
    }

  });

  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);

};
