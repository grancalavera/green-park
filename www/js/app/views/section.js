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
    var win = $(window);

    //----------------------------------
    //
    // Platforms
    //
    //----------------------------------
    var PICADILLY = 1;
    var JUBILEE = -1;

    //----------------------------------
    //
    // The view itself
    //
    //----------------------------------
    return Backbone.View.extend({
      //----------------------------------
      //
      // Backbone stuff
      //
      //----------------------------------
      events: {
        'click .platform.picadilly': 'picadilly_clickHandler',
        'click .platform.jubilee': 'jubilee_clickHandler'
      },
      //----------------------------------
      //
      // Animations
      //
      //----------------------------------
      translate: function (howMuch, animated) {
        if (animated) {
          this.$el.addClass('animated');
        } else {
          this.$el.removeClass('animated');
        }
        this.$el.css('transform', 'translateX(' + howMuch + 'px)');
      },
      //----------------------------------
      //
      // Walking
      //
      //----------------------------------
      walkTo: function (platform) {
        var distance = win.width();
        switch (platform) {
          case PICADILLY:
            this.translate(distance * PICADILLY, true);
            break;
          case JUBILEE:
            this.translate(distance * JUBILEE, true);
            break;
          default:
            this.translate(0, true);
        }
      },
      //----------------------------------
      //
      // Event handlers
      //
      //----------------------------------
      triggerWalk: function (platform) {
        this.trigger('walkto', {platform: platform});
      },
      picadilly_clickHandler: function (event) {
        this.triggerWalk(PICADILLY);
      },
      jubilee_clickHandler: function (event) {
        this.triggerWalk(JUBILEE);
      }

    });
});

