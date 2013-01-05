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
    var tile = 20;
    var gap = 2;
    var cell = tile + gap;

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
      var w = $win.width(), h = $win.height(), d = {
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
      drawCanvas: function (canvas) {
        var rctx = this.renderingContext;
        var ctx = canvas.getContext('2d');
        var margin = 4;
        var darkGray = 'rgba(63,78,90, 0.2)';
        if(ctx) {
          ctx.fillStyle = darkGray;
          ctx.fillRect(0, 0, rctx.width, rctx.height);
        }
      },
      draw: function (){
        console.warn('Section.draw: draw() must be implemented in a sub-module.');
      },
      getRenderingContext: function () {

        var from = defaultNumber(this.options.from, 0);
        var to = defaultNumber(this.options.to, 1);
        var w = this.dimensions.width;
        var h = this.dimensions.height;
        var cols = Math.floor(w / cell);
        var rows = Math.floor(h / cell);

        return {
          width: w,
          height: h,
          from: from,
          to: to,
          cols: cols,
          rows: rows
        };

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

