/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'www/js/app.js', 'www/js/app/**/*.js', 'test/test.js', 'test/tests/**/*.js']
    },
    less: {
      development: {
        options: {
        },
        files: {
          'www/css/main.css': 'www/less/main.less'
        }
      }
    },
    watch: {
      files: ['<config:lint.files>', 'www/less/**/*.less', 'www/**/*.html', 'www/js/templates/src/**/*.hbs'],
      tasks: 'lint less handlebars qunit reload'
    },
    server: {
      port: 8000,
      base: 'www'
    },
    reload: {
      port: 6001,
      proxy: {
        host: 'localhost'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        console: true,
        define: true,
        require: true,
        requirejs: true
      }
    },
    htmllint: {
        all: ["www/index.html"]
    },
    qunit: {
      files: ['test/**/*.html']
    },
    handlebars: {
      compile: {
        options: {
          processName: function (filename) {
            var pieces = filename.split('/');
            return pieces[pieces.length - 1].replace('.hbs', '');
          },
          // Otherwise function calls loose the reference to Handlebars ;)
          wrapped: true
        },
        files: {
          "www/js/templates/dist/templates.js": "www/js/templates/src/**/*.hbs"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('default', 'server lint less handlebars qunit reload watch');
};
