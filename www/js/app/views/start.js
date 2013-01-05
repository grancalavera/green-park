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

      getRenderingContext: function () {
        var width = Math.max(this.dimensions.width / cols, max);
        var additions = {
          width: width
        };
        var defaultContext = Section.prototype.getRenderingContext.call(this);
        return _.extend({}, defaultContext, additions);
      },

      draw: function () {
        var canvases = this.$('canvas');
        this.drawCanvas(canvases[0]);
        this.drawCanvas(canvases[1]);
      }

    });
});
