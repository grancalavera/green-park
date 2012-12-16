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
      'underscore': {
        exports: '_'
      }
    }
  });

  requirejs(['app/main']);
})();
