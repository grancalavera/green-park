// Start section implementation
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Section = require('app/views/section');

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

      getRenderingContextAdditions: function () {
        var width = 220;
        var additions = {
          width: width,
          isStart: true
        };
        return additions;
      },

      draw: function () {
        var canvases = this.$('canvas');
        this.drawCanvas(canvases[0], this.renderingContext.tiles[0]);
        this.drawCanvas(canvases[1], this.renderingContext.tiles[1]);
      }

    });
});
