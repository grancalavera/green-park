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

    var Handlebars = require('handlebars');
    var win = $(window);
    var navTemplate = require('text!app/templates/nav.html');

    //----------------------------------
    //
    // Helpers
    //
    //----------------------------------

    var getTemplate = _.memoize(function (sectionTemplate) {
      return Handlebars.compile(sectionTemplate)({nav: navTemplate});
    });

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
      //----------------------------------
      //
      // State
      //
      //----------------------------------
      template: '',

      //----------------------------------
      //
      // Backbone stuff
      //
      //----------------------------------
      tagName: 'section',
      render: function() {
        this.$el.html(getTemplate(this.template));
        return this;
      },

      showPlatforms: function () {

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

