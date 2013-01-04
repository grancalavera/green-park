// Generates tunnel sections from parameters
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Start = require('app/views/start');
    var Tunnel = require('app/views/tunnel');
    var sectionCount = 3;
    var $el = null;
    var sections = [];

    var getSection = function(index) {
      var section = sections[index];
      if (section) {
        return section;
      }
      if (index === 0) {
        section = new Start();
      } else {
        section = new Tunnel();
      }
      sections[index] = section;
      return section;
    };

    var next = function (scrollPos) {
      scrollPos += 1;
      if (scrollPos < sectionCount) {
        return scrollPos;
      } else {
        return 0;
      }
    };

    var prev = function (scrollPos) {
      scrollPos -= 1;
      if (scrollPos >= 0) {
        return scrollPos;
      } else {
        return sectionCount - 1;
      }
    };

    var getPositions = function (scrollPos) {
      var p = [];
      p[0] = prev(scrollPos);
      p[1] = scrollPos;
      p[2] = next(scrollPos);
      return p;
    };

    var walkPrototype = {
      scrollPos: null,
      picadilly: null,
      center: null,
      jubilee: null,
      init: function (scrollPos) {
        var pos;
        this.scrollPos = scrollPos;
        pos = this.getPositions();
        this.picadilly = getSection(pos[0]);
        this.center = getSection(pos[1]);
        this.jubilee = getSection(pos[2]);
        this.updateLayout();
        return this;
      },
      getPositions: function () {
        return getPositions(this.scrollPos);
      },
      next: function () {
        return next(this.scrollPos);
      },
      prev: function () {
        return prev(this.scrollPos);
      },
      updateLayout: function () {
        this.picadilly.toPicadilly();
        this.center.toCenter();
        this.jubilee.toJubilee();
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

    // constructor
    var createWalk = function (scrollPos) {
      return _.extend({}, walkPrototype).init(scrollPos);
    };

    // Same as 'walk left'
    var walkToJubilee = function(fromWalk) {
      return createWalk(fromWalk.next());
    };

    // Same as 'walk right'
    var walkToPicadilly = function(fromWalk) {
      return createWalk(fromWalk.prev());
    };

    return {
      start: function (count) {
        sections = [];
        if (_.isNumber(count) && (count >= 3)) {
          sectionCount = count;
        } else {
          sectionCount = 3;
        }
        return createWalk(0);
      }
    };

});
