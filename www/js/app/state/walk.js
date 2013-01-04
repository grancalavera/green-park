// Manages the state during the walk-through in the station.
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    //--------------------------------------------------------------------------
    //
    // Setup
    //
    //--------------------------------------------------------------------------

    var $ = require('jquery');
    var _ = require('underscore');
    var sections = require('app/state/sections');

    //--------------------------------------------------------------------------
    //
    // Protos
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //
    // Walk
    //
    //----------------------------------

    var walkPrototype = {
      init: function (scrollPos, sections) {
        this.scrollPos = scrollPos;
        this.sections = sections;
        this.positions = this.sections.positions(scrollPos);
        this.next = this.sections.next(scrollPos);
        this.prev = this.sections.prev(scrollPos);
        this.picadilly = this.sections.getSection(this.positions[0]);
        this.center = this.sections.getSection(this.positions[1]);
        this.jubilee = this.sections.getSection(this.positions[2]);
        return this;
      },
      toPicadilly: function () {
        return walkToPicadilly(this);
      },
      toJubilee: function () {
        return walkToJubilee(this);
      },
      toString: function () {
        var str = this.picadilly.toString() +
          ' - ' + this.center.toString() +
          ' - ' + this.jubilee.toString();
        return str;
      }
    };

    //--------------------------------------------------------------------------
    //
    // Constructors
    //
    //--------------------------------------------------------------------------

    var createWalk = function (scrollPos, sections) {
      return _.extend({}, walkPrototype).init(scrollPos, sections);
    };

    // Same as 'walk left'
    var walkToJubilee = function(fromWalk) {
      return createWalk(fromWalk.next, fromWalk.sections);
    };

    // Same as 'walk right'
    var walkToPicadilly = function(fromWalk) {
      return createWalk(fromWalk.prev, fromWalk.sections);
    };

    //--------------------------------------------------------------------------
    //
    // Module exports
    //
    //--------------------------------------------------------------------------

    return {
      start: function (count) {
        return createWalk(0, sections.create(count));
      }
    };

});
