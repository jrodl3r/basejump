//
// Grunt Build
//
// ==========================================================================

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: true,
          require: ['susy', 'breakpoint']
        },
        files: {
          'css/base.css': 'css/base.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          compass: true,
          require: ['susy', 'breakpoint'],
          sourcemap: 'none'
        },
        files: {
          'css/base.css': 'css/base.scss'
        }
      }
    },


    jshint: {
      options: {
        '-W058': true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: false,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: false,
        browser: true,
        esnext: true,
        debug: true,
        globalstrict: true,
        globals: {
          '$': false,
          'module': true,
          'require': false,
          'console': false,
          'window': true
        },
        ignores: ['js/dist.js', 'js/dist.min.js']
      },
      files: ['Gruntfile.js', 'js/*.js']
    },


    concat: {
      options: {
        stripBanners: true
      },
      dist: {
        src: ['js/core.js', 'core/plugins.js'],
        dest: 'js/dist.js'
      },
    },


    uglify: {
      my_target: {
        files: {
          'js/dist.min.js': 'js/dist.js'
        }
      }
    },


    jasmine: {
      pivotal: {
        src: 'js/core.js',
        options: {
          vendor: ['js/vendor/jquery.min.js'],
          helpers: ['spec/helpers/jasmine-jquery.js'],
          specs: 'spec/*Spec.js',
          keepRunner: true
        }
      }
    },


    preprocess: {
      dev: {
        options: {
          context: { ENV: 'DEV' }
        },
        src : 'tmpl/index.html',
        dest : 'index.html'
      },
      dist: {
        options: {
          context: { ENV: 'PROD' }
        },
        src : 'tmpl/index.html',
        dest : 'index.html'
      }
    },


    watch: {
      sass: {
        files: ['css/**/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['Gruntfile.js', 'js/*.js'],
        tasks: ['jshint']
      },
      test: {
        files: ['spec/**/*.js', 'tmpl/inc/*.html'],
        tasks: ['test']
      },
      html: {
        files: ['tmpl/index.html', 'tmpl/inc/*.html'],
        tasks: ['preprocess']
      },
      options: {
        livereload: true
      }
    }

  });


  // Load Modules
  // ----------------------------------------------------------
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-preprocess');


  // Register Tasks
  // ----------------------------------------------------------
  grunt.registerTask('default', ['sass:dev', 'jshint', 'preprocess:dev', 'jasmine']);
  grunt.registerTask('dev', ['sass:dev', 'jshint', 'preprocess:dev', 'jasmine', 'watch']);
  grunt.registerTask('dist', ['sass:dist', 'jshint', 'concat', 'uglify', 'preprocess:dist', 'jasmine']);
  grunt.registerTask('test', ['jshint', 'jasmine']);


  // Show Timer
  // ----------------------------------------------------------
  require('time-grunt')(grunt);

};
