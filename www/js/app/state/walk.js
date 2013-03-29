// Manages the state during the walk-through in the station.
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var sections = require('app/state/sections');

    //--------------------------------------------------------------------------
    //
    // Walk
    //
    //--------------------------------------------------------------------------

    var Walk = function (scrollPos, sections) {
        this.scrollPos = scrollPos;
        this.sections = sections;
        this.positions = this.sections.positions(scrollPos);
        this.next = this.sections.next(scrollPos);
        this.prev = this.sections.prev(scrollPos);
        this.piccadilly = this.sections.getSection(this.positions[0]);
        this.center = this.sections.getSection(this.positions[1]);
        this.jubilee = this.sections.getSection(this.positions[2]);
    }

    Walk.prototype = {
        // Same as 'walk right'
        toPiccadilly: function () {
          return new Walk(this.prev, this.sections);
        },
        // Same as 'walk left'
        toJubilee: function () {
          return new Walk(this.next, this.sections);
        },
        toString: function () {
          var str = this.piccadilly.toString() +
            ' - ' + this.center.toString() +
            ' - ' + this.jubilee.toString();
          return str;
        }
    }

    return {
      start: function (count) {
        return new Walk(0, sections.create(count));
      }
    };

});
