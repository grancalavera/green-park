// Tunnel section implementation
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Section = require('app/views/section');

    //--------------------------------------------------------------------------
    //
    // Tunnel
    //
    //--------------------------------------------------------------------------

    return Section.extend({

      //----------------------------------
      //
      // Setup
      //
      //----------------------------------

      template: require('templates').tunnel,
      viewId: 'app/views/tunnel',
      className: 'tunnel',

      //----------------------------------
      //
      // Tunnel stuff
      //
      //----------------------------------

      getRenderingContextAdditions: function () {
        var additions = {};
        return additions;
      },

      draw: function () {
        this.drawCanvas(this.$('canvas')[0], this.renderingContext.tiles[0]);
      }

    });
});
