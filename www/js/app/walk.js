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

    // var getSection = _.memoize(function(index) {
    //   if (index === 0) {
    //     return new Start();
    //   } else {
    //     return new Tunnel();
    //   }
    // });

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

    var initialize = function (walk) {
      var pos = getPositions(walk.scrollPos);

      walk.picadilly = getSection(pos[0]);
      walk.center = getSection(pos[1]);
      walk.jubilee = getSection(pos[2]);

      walk.picadilly.$el.removeClass('center');
      walk.center.$el.addClass('center');
      walk.jubilee.$el.removeClass('center');

      walk.picadilly.toPicadilly();
      walk.center.toCenter();
      walk.jubilee.toJubilee();

      walk.toPicadilly = function () {
        return walkToPicadilly(walk);
      };
      walk.toJubilee = function () {
        return walkToJubilee(walk);
      };
    };

    var start = function () {
      var walk = {};
      walk.scrollPos = 0;
      initialize(walk);
      return walk;
    };

    // Same as 'walk left'
    var walkToJubilee = function(fromWalk) {
      var walk = {};
      walk.scrollPos = next(fromWalk.scrollPos);
      initialize(walk);
      return walk;
    };

    // Same as 'walk right'
    var walkToPicadilly = function(fromWalk) {
      var walk = {};
      walk.scrollPos = prev(fromWalk.scrollPos);
      initialize(walk);
      return walk;
    };

    return {
      start: function (count) {
        sections = [];
        if (_.isNumber(count) && (count >= 3)) {
          sectionCount = count;
        } else {
          sectionCount = 3;
        }
        return start();
      },
      next: next,
      prev: prev,
      getSection: getSection,
      getPositions: getPositions
    };

});
