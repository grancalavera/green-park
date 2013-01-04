// Start section implementation
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Section = require('app/views/section');

    var max = 280;
    var cols = 4;

    //--------------------------------------------------------------------------
    //
    // Start
    //
    //--------------------------------------------------------------------------

    return Section.extend({

      //----------------------------------
      //
      // Setup
      //
      //----------------------------------

      template: require('templates').start,
      viewId: 'app/views/start',
      className: 'start',

      //----------------------------------
      //
      // Start stuff
      //
      //----------------------------------

      renderingContext: function () {
        var width = Math.max(this.dimensions.width / cols, max);
        var additions = {
          width: width
        };
        var defaultContext = Section.prototype.renderingContext.call(this);
        return _.extend({}, defaultContext, additions);
      },

      draw: function () {
        var canvases = this.$('canvas');
        this.drawSide(canvases[0], 'picadilly');
        this.drawSide(canvases[1], 'jubilee');
      },

      drawSide: function (canvas) {
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
