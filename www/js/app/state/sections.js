// Manages the state of the sections used to make the tunnel for the
// walk-through the station.
// leoncoto@gmail.com
define(function (require) {
    'use strict';
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

    //--------------------------------------------------------------------------
    //
    // Constructors
    //
    //--------------------------------------------------------------------------

    var createSections = function (count) {
      return _.extend({}, sectionsPrototype).init(count);
    };

    //--------------------------------------------------------------------------
    //
    // Module exports
    //
    //--------------------------------------------------------------------------
    return {
      create: function (count) {
        return createSections(count);
      }
    };

});
