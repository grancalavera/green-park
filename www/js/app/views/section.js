// Base section module
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');

    var $win = $(window);

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

    //--------------------------------------------------------------------------
    //
    // Section
    //
    //--------------------------------------------------------------------------

    return Backbone.View.extend({

      viewId: 'app/views/section',
      dimensions: {},

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
          this.$el.html(this.template(this.renderingContext()));
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
      draw: function (){
        console.warn('Section.draw: draw() must be implemented in a sub-module.');
      },
      renderingContext: function () {
        return {
          width: this.dimensions.width,
          height: this.dimensions.height
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

