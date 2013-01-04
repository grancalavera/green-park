// Description
// leoncoto@gmail.com
define(function (require) {
    'use strict';
    var $ = require('jquery');
    var Modernizr = require('modernizr');

    var isTouch = function () {
      if (Modernizr.touch) {
        $('body').addClass('touch');
        return;
      }
    };

    return {
      run: function () {
        isTouch();
      }
    };
});
