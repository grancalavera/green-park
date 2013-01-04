// Generates tunnel sections from parameters
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
    var Start = require('app/views/start');
    var Tunnel = require('app/views/tunnel');

    //--------------------------------------------------------------------------
    //
    // Protos
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //
    // Sections
    //
    //----------------------------------

    var sectionsPrototype = {
      sections: [],
      count: 3,
      init: function (count) {
        if (_.isNumber(count) && (count >= 3)) {
          this.count = count;
        } else {
          this.count = 3;
        }
        return this;
      },
      getSection: function (index) {
        var section = this.sections[index];
        if (section) {
          return section;
        }
        if (index === 0) {
          section = new Start();
        } else {
          section = new Tunnel();
        }
        this.sections[index] = section;
        return section;
      },
      next: function (scrollPos) {
        scrollPos += 1;
        if (scrollPos < this.count) {
          return scrollPos;
        } else {
          return 0;
        }
      },
      prev: function (scrollPos) {
        scrollPos -= 1;
        if (scrollPos >= 0) {
          return scrollPos;
        } else {
          return this.count - 1;
        }
      },
      positions: function (scrollPos) {
        return [this.prev(scrollPos), scrollPos, this.next(scrollPos)];
      }
    };

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

    var createSections = function (count) {
      return _.extend({}, sectionsPrototype).init(count);
    };

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
        return createWalk(0, createSections(count));
      }
    };

});
