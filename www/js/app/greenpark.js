// Main application controller
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    //----------------------------------
    //
    // Module-wide variables
    //
    //----------------------------------

    var $ = require('jquery');
    var Backbone = require('backbone');
    var Modernizr = require('modernizr');
    var _ = require('underscore');
    var sections = 10;
    var transitionEvents = [
      'transitionend',
      'webkitTransitionEnd'
    ].join(' ');
    var isTouch = Modernizr.touch;
    var $win = $(window);
    var $doc = $(document);

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
        'click .platform.jubilee': 'jubilee_clickHandler'
      },
      initialize: function () {
        this.walk = require('app/walk').start(sections);
        this.walk.center.$el.addClass('center');
        this.appendAll();
        var updtDim = _.bind(_.debounce(this.updateDimensions, 100), this);
        if (isTouch) {
          $win.on('orientationchange', updtDim);
        } else {
          $win.on('resize', updtDim);
        }
        console.log(Modernizr.mq('(orientation: landscape)'));
        console.log(Modernizr.mq('(orientation: portrait)'));
      },

      //----------------------------------
      //
      // Walking stuff
      //
      //----------------------------------
      onTransition: function () {
        var $el = this.walk.center.$el;
        $el.on(transitionEvents, _.bind(this.update, this));
      },
      offTransition: function () {
        var $el = this.walk.center.$el;
        $el.off(transitionEvents);
      },
      append: function (view) {
        var el = view.render().el;
        this.$el.prepend(el);
      },
      appendAll: function () {
        this.append(this.walk.picadilly);
        this.append(this.walk.center);
        this.append(this.walk.jubilee);
      },
      update: function () {
        var oldWalk = this.walk;
        var walk = this.walk[this.whereTo]();
        this.offTransition();
        switch(this.whereTo) {
          case 'toPicadilly':
            this.append(walk.picadilly);
            oldWalk.jubilee.remove();
            break;
          case 'toJubilee':
            this.append(walk.jubilee);
            oldWalk.picadilly.remove();
            break;
        }
        walk.picadilly.$el.removeClass('center');
        walk.center.$el.addClass('center');
        walk.jubilee.$el.removeClass('center');
        this.walk = walk;
      },
      updateDimensions: function () {
        console.log('update dimensions');
      },

      //----------------------------------
      //
      // Event handlers
      //
      //----------------------------------
      picadilly_clickHandler: function (event) {
        this.whereTo = 'toPicadilly';
        this.onTransition();
        this.walk.center.toJubilee(true);
        this.walk.picadilly.toCenter(true);
      },
      jubilee_clickHandler: function (event) {
        this.whereTo = 'toJubilee';
        this.onTransition();
        this.walk.center.toPicadilly(true);
        this.walk.jubilee.toCenter(true);
      },
      section_transitionendHandler: function (event) {
        this.update();
      }
    });

    var greenPark = new GreenPark({});
});
