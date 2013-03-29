// Manages the state of the sections used to make the tunnel for the
// walk-through the station.
// leoncoto@gmail.com
define(function (require) {

    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    // Views
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

    var Sections = function (count) {
      var validCount = _.isNumber(count) && (count >= 3);
      this.count = validCount ? count : 3;
      var edgeCount = (this.count - 1) * 2;
      var edgeRange = _.range(0, edgeCount);
      this.edges = _.reduce(edgeRange, function (edges, i) {
        edges.push(i / (edgeCount - 1));
        return edges;
      }, []);
    }

    Sections.prototype = {
      sections: [],
      edges: [],
      count: 3,
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
    }

    return {
      create: function (count) {
        return new Sections(count);
      }
    };

});
