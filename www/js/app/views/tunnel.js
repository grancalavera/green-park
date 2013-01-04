// Start section implementation
// leoncoto@gmail.com
define(function (require) {
    'use strict';
    var $ = require('jquery');
    var Section = require('app/views/section');
    return Section.extend({
      template: require('templates').tunnel,
      viewId: 'app/views/tunnel',
      className: 'tunnel',
      draw: function () {
        var canvas = this.$('canvas')[0];
        var context = canvas.getContext('2d');
        var margin = 30;
        if (context) {
          context.fillStyle = "rgba(200,0,0,0.5)";
          context.fillRect(
            margin / 2,
            margin / 2,
            this.dimensions.width - margin,
            this.dimensions.height - margin - 60 // the footer height
          );
        }
      }
    });
});
