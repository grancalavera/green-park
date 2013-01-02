// Main application controller
// leoncoto@gmail.com
define(function (require) {
    'use strict';
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');

    var Start = require('app/views/start');
    var Tunnel = require('app/views/tunnel');

    var GreenPark = Backbone.View.extend({
      //----------------------------------
      //
      // State
      //
      //----------------------------------
      whereTo: '',

      //----------------------------------
      //
      // Backbone stuff
      //
      //----------------------------------
      el: document.body,
      events: {
        'click .platform.picadilly': 'picadilly_clickHandler',
        'click .platform.jubilee': 'jubilee_clickHandler',
        'transitionend section.center': 'section_transitionendHandler',
        'webkitTransitionEnd section.center': 'section_transitionendHandler'
      },
      initialize: function () {
        this.walk = require('app/walk').start(this.$el, 3);
      },

      //----------------------------------
      //
      // Walking stuff
      //
      //----------------------------------

      update: function () {
        this.walk = this.walk[this.whereTo]();
      },

      //----------------------------------
      //
      // Event handlers
      //
      //----------------------------------
      picadilly_clickHandler: function (event) {
        console.log('toPicadilly');
        this.whereTo = 'toPicadilly';
        this.walk.center.toJubilee(true);
        this.walk.picadilly.toCenter(true);
      },
      jubilee_clickHandler: function (event) {
        console.log('toJubilee');
        this.whereTo = 'toJubilee';
        this.walk.center.toPicadilly(true);
        this.walk.jubilee.toCenter(true);
      },
      section_transitionendHandler: function (event) {
        this.update();
      }

    });

    var greenPark = new GreenPark({});
});
