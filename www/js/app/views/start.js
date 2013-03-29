// Start section implementation
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery')
    var _ = require('underscore')
    var Section = require('app/views/section')

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
        var width = this.dimensions.width < 1024 ? 90 : 200
        var rctx = Section.prototype.getRenderingContext.call(this, width)
        rctx.tiles = [
          this.getTiles(rctx.cols, rctx.rows, rctx.hOff, rctx.vOff, 1, 1),
          this.getTiles(rctx.cols, rctx.rows, rctx.hOff, rctx.vOff, 0, 0)
        ]
        return rctx
      },

      draw: function () {
        this.drawCanvas(this.getCanvas()[0], this.renderingContext.tiles[0])
        this.drawCanvas(this.getCanvas()[1], this.renderingContext.tiles[1])
      }

    })
})
