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
      edges: [],
      count: 3,
      init: function (count) {
        var edgeCount, edgeRange, edges;

        if (_.isNumber(count) && (count >= 3)) {
          this.count = count;
        } else {
          this.count = 3;
        }

        edgeCount = (this.count - 1) * 2;
        edgeRange = _.range(0, edgeCount);
        this.edges = _.reduce(edgeRange, function (accumulator, i) {
          accumulator.push(i / (edgeCount - 1));
          return accumulator;
        }, []);

        return this;
      },
      getSection: function (index) {
        var section = this.sections[index];
        var from, to, fromEdge, toEdge;
        if (section) {
          return section;
        }
        if (index === 0) {
          section = new Start();
        } else {

          fromEdge = (index - 1) * 2;
          toEdge = fromEdge + 1;
          from = this.edges[fromEdge];
          to = this.edges[toEdge];

          section = new Tunnel({
            from: from,
            to: to
          });
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
