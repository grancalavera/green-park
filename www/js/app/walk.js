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

    var getSection = _.memoize(function(index) {
      if (index === 0) {
        return new Start();
      } else {
        return new Tunnel();
      }
    });

    // var getSection = function(index) {
    //   var section = sections[index];
    //   if (section) {
    //     return section;
    //   }
    //   if (index === 0) {
    //     section = new Start();
    //   } else {
    //     section = new Tunnel();
    //   }
    //   sections[index] = section;
    //   return section;
    // };

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

    var append = function (views) {
      views = _.isArray(views) ? views : [views];
      _.each(views, function (view) {
        console.log('prepend:', view);
        $el.prepend(view.render().el);
      });
    };

    var initialize = function (walk) {
      walk.center.$el.addClass('center');
      walk.picadilly.toPicadilly();
      walk.center.toCenter();
      walk.jubilee.toJubilee();
      walk.toPicadilly = function () {
        console.log('toPicadilly...');
        return walkToPicadilly(walk);
      };
      walk.toJubilee = function () {
        console.log('toJubilee...');
        return walkToJubilee(walk);
      };
      console.log('scrollPos',walk.scrollPos);
      console.log('-');
    };

    var clean = function (walk, andRemove) {
      console.log('clean: ', walk);
      walk.center.$el.removeClass('center');
    };

    var start = function () {
      var walk = {};
      walk.picadilly = getSection(sectionCount - 1);
      walk.center = getSection(0);
      walk.jubilee = getSection(1);
      walk.scrollPos = 0;
      append([walk.picadilly, walk.center, walk.jubilee]);
      initialize(walk);
      return walk;
    };

    var walkToJubilee = function(fromWalk) {
      var walk = {};
      console.log('walkToJubilee');
      clean(fromWalk, 'picadilly');
      walk.scrollPos = next(fromWalk.scrollPos);
      walk.picadilly = fromWalk.center;
      walk.center = fromWalk.jubilee;
      walk.jubilee = getSection(next(walk.scrollPos + 1));
      initialize(walk);
      append(walk.jubilee);
      return walk;
    };

    var walkToPicadilly = function(fromWalk) {
      var walk = {};
      console.log('walkToPicadilly');
      clean(fromWalk, 'jubilee');
      walk.scrollPos = prev(fromWalk.scrollPos);
      walk.picadilly = getSection(prev(walk.scrollPos - 1));
      walk.center = fromWalk.picadilly;
      walk.jubilee = fromWalk.center;
      initialize(walk);
      append(walk.picadilly);
      return walk;
    };

    return {
      start: function ($el_, count) {
        $el = $el_;

        if (_.isNumber(count) && (count >= 3)) {
          sectionCount = count;
        } else {
          sectionCount = 3;
        }

        return start();
      }
    };

});
