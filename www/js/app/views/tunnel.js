// Tunnel section implementation
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    var $ = require('jquery')
    var _ = require('underscore')
    var Section = require('app/views/section')

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

      getRenderingContext: function () {
        var rctx = Section.prototype.getRenderingContext.call(this)
        rctx.tiles = [
          this.getTiles(rctx.cols, rctx.rows, rctx.hOff, rctx.vOff, rctx.from, rctx.to)
        ]
        return rctx
      },

      draw: function () {
        this.drawCanvas(this.getCanvas()[0], this.renderingContext.tiles[0])
      }

    })
})
