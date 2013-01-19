// Main application controller
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var Backbone = require('backbone');
    var Modernizr = require('modernizr');
    var _ = require('underscore');
    var walk = require('app/state/walk');

    var sections = 11;
    var transitionEvents = [
      'transitionend',
      'webkitTransitionEnd'
    ].join(' ');
    var isTouch = Modernizr.touch;
    var $win = $(window);
    var $doc = $(document);
    var container = '#green-park';

    //--------------------------------------------------------------------------
    //
    // GreenPark
    //
    //--------------------------------------------------------------------------

    var GreenPark = Backbone.View.extend({

      //----------------------------------
      //
      // Backbone stuff
      //
      //----------------------------------

      el: document.body,
      events: {
        'click .platform.piccadilly': 'piccadilly_clickHandler',
        'click .platform.jubilee': 'jubilee_clickHandler'
      },
      initialize: function () {
        this.walk = walk.start(sections);
        this.walk.center.$el.addClass('center');
        this.appendAll();
        this.updateLayout();
        var updateLayout = _.bind(_.debounce(this.updateLayout, 100), this);
        if (isTouch) {
          $win.on('orientationchange', updateLayout);
        } else {
          $win.on('resize', updateLayout);
        }
      },

      //----------------------------------
      //
      // GreeenPark stuff
      //
      //----------------------------------

      afterTransition: function (toWalkCallback) {
        var $el = this.walk.center.$el;
        var update = _.bind(function () {
          // The current walk is updated here
          this.walk = toWalkCallback.call(this, this.walk);
          this.updateLayout();
          $el.off(transitionEvents);
        }, this);
        $el.on(transitionEvents, update);
      },
      append: function (view) {
        var el = view.render().el;
        this.$(container).prepend(el);
      },
      appendAll: function () {
        this.append(this.walk.piccadilly);
        this.append(this.walk.center);
        this.append(this.walk.jubilee);
      },
      updateLayout: function () {
        this.walk.piccadilly.$el.removeClass('center');
        this.walk.center.$el.addClass('center');
        this.walk.jubilee.$el.removeClass('center');
        this.walk.piccadilly.toPiccadilly();
        this.walk.center.toCenter();
        this.walk.jubilee.toJubilee();
        this.walk.piccadilly.render();
        this.walk.center.render();
        this.walk.jubilee.render();
      },
      toPiccadilly: function (fromWalk) {
        var toWalk = fromWalk.toPiccadilly();
        this.append(toWalk.piccadilly);
        fromWalk.jubilee.remove();
        return toWalk;
      },
      toJubilee: function (fromWalk) {
        var toWalk = fromWalk.toJubilee();
        this.append(toWalk.jubilee);
        fromWalk.piccadilly.remove();
        return toWalk;
      },

      //----------------------------------
      //
      // Event handlers
      //
      //----------------------------------

      piccadilly_clickHandler: function (event) {
        this.afterTransition(this.toPiccadilly);
        this.walk.center.toJubilee(true);
        this.walk.piccadilly.toCenter(true);
      },
      jubilee_clickHandler: function (event) {
        this.afterTransition(this.toJubilee);
        this.walk.center.toPiccadilly(true);
        this.walk.jubilee.toCenter(true);
      }

    });

    var greenPark = new GreenPark({});
});
