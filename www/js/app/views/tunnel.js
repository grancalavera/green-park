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

      renderingContext: function () {
        var additions = {};
        var defaultContext = Section.prototype.renderingContext.call(this);
        return _.extend({}, defaultContext, additions);
      },

      draw: function () {
        var margin = 30;
        var canvas = this.$('canvas')[0];
        var context = canvas.getContext('2d');
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
