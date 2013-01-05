// Base section module
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');

    var $win = $(window);

    var cPicadilly = 'rgb(35, 76, 166)';
    var cJubilee = 'rgb(123, 132, 143)';
    var cWhite = 'rgb(225,223,214)';
    var side = 20;
    var gap = 2;
    var cell = side + gap;
    var footerHeight = 60;

    var translate = function ($el, dir, animated) {
      var distance = $win.width() * dir;
      if (animated) {
        $el.addClass('animated');
      } else {
        $el.removeClass('animated');
      }
      $el.css('transform', 'translateX(' + distance + 'px)');
    };

    var getDimenstions = function () {
      var w = $win.width(), h = $win.height() - footerHeight, d = {
        width: w,
        height: h,
        toString: function () {
          return w + 'px * ' + h + 'px';
        }
      };
      return d;
    };

    var defaultNumber = function (value, def) {
      return _.isNumber(value) ? value : def;
    };

    //--------------------------------------------------------------------------
    //
    // Section
    //
    //--------------------------------------------------------------------------

    return Backbone.View.extend({

      viewId: 'app/views/section',
      dimensions: {},
      renderingContext: {},

      //----------------------------------
      //
      // State
      //
      //----------------------------------

      template: function () { return ''; },

      //----------------------------------
      //
      // Backbone stuff
      //
      //----------------------------------

      tagName: 'section',
      initialize: function () {
      },
      render: function() {
        var dimensions = getDimenstions();
        if (this.dimensions.toString() !== dimensions.toString()) {
          this.dimensions = dimensions;
          this.renderingContext = this.getRenderingContext();
          this.$el.html(this.template(this.renderingContext));
          this.draw();
        }
        return this;
      },

      showPlatforms: function () {
        this.$('.platform').fadeIn();
      },

      hidePlatforms: function () {
        this.$('.platform').fadeOut();
      },

      //----------------------------------
      //
      // Section stuff
      //
      //----------------------------------
      drawTile: function (ctx, tile) {
        ctx.fillStyle = tile.s;
        ctx.fillRect (tile.x, tile.y, tile.w, tile.h);
      },
      drawCanvas: function (canvas) {
        var tiles = this.renderingContext.tiles;
        var ctx = canvas.getContext('2d');
        if(ctx) {
          _.each(tiles, function (tile) {
            this.drawTile(ctx, tile);
          }, this);
        }
      },
      draw: function (){
        throw(new Error('Section.draw: draw() must be implemented in a sub-module.'));
      },
      getRenderingContextAdditions: function () {
        throw(new Error('Section.getRenderingContextAdditions: getRenderingContextAdditions() must be implemented in a sub-module.'));
      },
      getRenderingContext: function () {

        var width, height, cols, rows, hOff, vOff, tiles;
        var from = defaultNumber(this.options.from, 0);
        var to = defaultNumber(this.options.to, 1);

        var rctx = {
          width: this.dimensions.width,
          height: this.dimensions.height
        };

        rctx = _.extend(rctx, this.getRenderingContextAdditions());

        width = rctx.width;
        height = rctx.height;
        cols = Math.floor(width / cell);
        rows = Math.floor(height / cell);
        hOff = Math.floor((width - (cell * cols)) / 2);
        vOff = Math.floor((height - (cell * rows)) / 2);

        tiles = _.reduce(_.range(0, cols), function (ts, cIndex, cIndex2, cs) {
          var col = _.reduce(_.range(0, rows), function (cl, rIndex, rIndex2, rw) {
            var tile = {
              x: cIndex * cell + hOff,
              y: rIndex * cell + vOff,
              w: side,
              h: side,
              s: cWhite
            };
            cl.push(tile);
            return cl;
          }, []);
          return ts.concat(col);
        }, []);

        rctx.tiles = tiles;
        return rctx;
      },
      toPicadilly: function (animated) {
        translate(this.$el, -1, animated);
      },

      toJubilee: function (animated) {
        translate(this.$el, 1, animated);
      },

      toCenter: function (animated) {
        translate(this.$el, 0, animated);
      },

      //----------------------------------
      //
      // Misc
      //
      //----------------------------------

      toString: function () {
        return this.viewId;
      }

    });
});

