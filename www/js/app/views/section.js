// Base section module
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    //----------------------------------
    //
    // Setup
    //
    //----------------------------------
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var win = $(window);

    //----------------------------------
    //
    // Helpers
    //
    //----------------------------------

    var translate = function ($el, dir, animated) {
      var distance = win.width() * dir;
      if (animated) {
        $el.addClass('animated');
      } else {
        $el.removeClass('animated');
      }
      $el.css('transform', 'translateX(' + distance + 'px)');
    };

    //----------------------------------
    //
    // The view itself
    //
    //----------------------------------
    return Backbone.View.extend({

      viewId: 'app/views/section',

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
        this.hidePlatforms();
      },
      render: function() {
        this.$el.html(this.template());
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
      // Misc
      //
      //----------------------------------
      toString: function () {
        return this.viewId;
      },

      //----------------------------------
      //
      // Walking
      //
      //----------------------------------

      toPicadilly: function (animated) {
        translate(this.$el, -1, animated);
      },

      toJubilee: function (animated) {
        translate(this.$el, 1, animated);
      },

      toCenter: function (animated) {
        translate(this.$el, 0, animated);
      }

    });
});

