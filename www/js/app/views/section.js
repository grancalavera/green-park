// Base section module
// leoncoto@gmail.com
define(function (require) {

    'use strict';
    var failedTiles = 0;
    var $ = require('jquery')
    var Backbone = require('backbone')
    var _ = require('underscore')
    var map = require('app/utils/map')

    var $win = $(window)
    var cPiccadilly = 'rgb(35, 76, 166)'
    var cJubilee = 'rgb(123, 132, 143)'
    var cWhite = 'rgb(225,223,214)'
    var paintOdds = 0.1

    // odds = 1 is always true
    // odds = 0 is always false
    function biasedCoin(odds) {
      return function () {
        if (odds === 0) {
          return false
        }
        return Math.random() <= odds ? true : false
      }
    }

    var paintTile = biasedCoin(paintOdds)

    var translate = function ($el, dir, animated) {
      var distance = $win.width() * dir
      if (animated) {
        $el.addClass('animated')
      } else {
        $el.removeClass('animated')
      }
      $el.css('transform', 'translateX(' + distance + 'px)')
    }

    var getDimenstions = function () {

      var w = $win.width()
      var smallDevice = w < 1024
      var footerHeight = smallDevice ? 30 : 60
      var h = $win.height() - footerHeight

      var side = smallDevice ? 4 : 9
      var gap = 2
      var cell = side + gap

      var d = {
        width: w,
        height: h,
        side: side,
        gap: gap,
        cell: cell,
        footerHeight: footerHeight,
        toString: function () {
          return w + 'px * ' + h + 'px'
        }
      }
      return d
    }

    var defaultNumber = function (value, def) {
      return _.isNumber(value) ? value : def
    }

    //--------------------------------------------------------------------------
    //
    // Section
    //
    //--------------------------------------------------------------------------

    return Backbone.View.extend({

      //----------------------------------
      //
      // Setup
      //
      //----------------------------------

      viewId: 'app/views/section',
      dimensions: {},
      renderingContext: {},
      template: function () { return '' },
      tagName: 'section',

      //----------------------------------
      //
      // Backbone stuff
      //
      //----------------------------------

      render: function() {
        var dimensions = getDimenstions()
        if (this.dimensions.toString() !== dimensions.toString()) {
          this.dimensions = dimensions
          ;delete this.$canvases
          if (this.pendingDraw) {
            console.log(this.pendingDraw)
            clearTimeout(this.pendingDraw)
            ;delete this.pendingDraw
          }
          this.renderingContext = this.getRenderingContext()
          this.$el.html(this.template(this.renderingContext))
          this.draw()
        }
        return this
      },

      //----------------------------------
      //
      // Section stuff
      //
      //----------------------------------
      getCanvas: function () {
        if (!this.$canvases) {
          this.$canvases = this.$('canvas');
        }
        return this.$canvases;
      },
      getTiles: function (cols, rows, hOff, vOff, from, to) {
        var cell = this.dimensions.cell
        var side = this.dimensions.side
        return _.reduce(_.range(0, cols), function (ts, cIndex, cIndex2, cs) {
                  var col = _.reduce(_.range(0, rows), function (cl, rIndex, rIndex2, rw) {
                    var odds
                    var mapped
                    var tile = {
                      x: cIndex * cell + hOff,
                      y: rIndex * cell + vOff,
                      w: side,
                      h: side,
                      s: cWhite,
                      toString: function () {
                        return this.x + ' - ' + this. y + ' - ' + this.s
                      }
                    }
                    if (paintTile()) {
                      // for jubilee
                      odds = cIndex / (cs.length  - 1)
                      mapped = map(odds, 0, 1, from, to)
                      tile.s = biasedCoin(mapped)() ? cJubilee : cPiccadilly
                    }
                    cl.push(tile)
                    return cl
                  }, [])
                  return ts.concat(col)
                }, [])
      },
      drawTile: function (ctx, tile) {
        ctx.fillStyle = tile.s
        ctx.fillRect (tile.x, tile.y, tile.w, tile.h)
      },
      drawCanvas: function (canvas, tiles) {
        var ctx = canvas.getContext('2d')
        var self = this;
        if (ctx) {
          _.each(tiles, function (tile) {
            self.drawTile(ctx, tile)
          })
        }
      },
      draw: function (){
        throw(new Error('Section.draw: draw() must be implemented in a sub-module.'))
      },
      getRenderingContextAdditions: function () {
        throw(new Error('Section.getRenderingContextAdditions: getRenderingContextAdditions() must be implemented in a sub-module.'))
      },
      getRenderingContext: function (width) {
        var cell = this.dimensions.cell
        var rctx = {
          width: width || this.dimensions.width,
          height: this.dimensions.height
        }
        rctx.from = defaultNumber(this.options.from, 0)
        rctx.to = defaultNumber(this.options.to, 1)
        rctx.cols = Math.floor(rctx.width / cell)
        rctx.rows = Math.floor(rctx.height / cell)
        rctx.hOff = Math.floor((rctx.width - (cell * rctx.cols)) / 2)
        rctx.vOff = Math.floor((rctx.height - (cell * rctx.rows)) / 2)
        return rctx
      },
      toPiccadilly: function (animated) {
        translate(this.$el, -1, animated)
      },

      toJubilee: function (animated) {
        translate(this.$el, 1, animated)
      },

      toCenter: function (animated) {
        translate(this.$el, 0, animated)
      },

      //----------------------------------
      //
      // Misc
      //
      //----------------------------------

      toString: function () {
        return this.viewId
      }

    })
})

