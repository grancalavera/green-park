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
        this.walk = require('app/walk').start(this.$el, 5);
      },

      //----------------------------------
      //
      // Walking stuff
      //
      //----------------------------------

      // The real issue here is an event firing twice, this is just a hack :(
      update: _.debounce(function () {
        this.walk = this.walk[this.whereTo]();
      }, 100),

      //----------------------------------
      //
      // Event handlers
      //
      //----------------------------------
      picadilly_clickHandler: function (event) {
        this.whereTo = 'toPicadilly';
        this.walk.center.toJubilee(true);
        this.walk.picadilly.toCenter(true);
      },
      jubilee_clickHandler: function (event) {
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
