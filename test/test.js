/*global QUnit:false*/
;(function () {
  'use strict';
  requirejs.config({
    urlArgs:'x=' + new Date().getTime(),
    baseUrl: '../www/js/lib',
    paths: {
      app: '../app',
      templates: '../templates/dist/templates',
      tests: '../../../test/tests'
    },
    // http://requirejs.org/docs/api.html#config-shim
    shim: {
      'backbone': {
        exports: 'Backbone',
        deps: ['underscore', 'jquery']
      },
      'underscore': {
        exports: '_'
      },
      // http://modernizr.com/docs/#installing
      // If you don't support IE8 and don't need to worry about FOUC,
      // feel free to include modernizr.js whereever.
      'modernizr': {
        exports: 'Modernizr'
      },
      'handlebars': {
        exports: 'Handlebars'
      },
      // see
      // https://github.com/gruntjs/grunt-contrib-handlebars/pull/4#issuecomment-8510600
      'templates': {
        exports: 'JST',
        deps: ['handlebars']
      }
    }
  });
  var allTests = [
    'tests/green-park-tests',
    'tests/map-range-tests'
    // add more tests here...
  ];
  requirejs(allTests, function () {
    QUnit.start();
  });
})();
