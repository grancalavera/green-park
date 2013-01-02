;(function () {
  'use strict';

  require.config({
    urlArgs:'x=' + new Date().getTime(),
    baseUrl: 'js/lib',
    paths: {
      app: '../app'
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
      }
    }
  });

  requirejs(['app/greenpark']);
})();
