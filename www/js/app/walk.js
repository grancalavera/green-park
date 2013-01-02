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
      console.log('creating new section for index ' + index);
      if (index === 0) {
        return new Start();
      } else {
        return new Tunnel();
      }
    });

    var next = function (scrollPos) {
      if (scrollPos < sectionCount) {
        return scrollPos + 1;
      } else {
        return 0;
      }
    };

    var prev = function (scrollPos) {
      if (scrollPos === 0) {
        return sectionCount - 1;
      } else {
        return scrollPos - 1;
      }
    };

    var append = function (views) {
      views = _.isArray(views) ? views : [views];
      _.each(views, function (def) {
        var view = def.view, whereTo = def.whereTo;
        $el.append(view.render().el);
        if (whereTo) {
          view[whereTo]();
        }
      });
    };

    var start = function () {
      var walk = {};

      walk.picadilly = getSection(sectionCount - 1);
      walk.center = getSection(0);
      walk.center.$el.addClass('center');
      walk.jubilee = getSection(1);
      walk.scrollPos = 0;

      append([
        {view: walk.picadilly, whereTo: 'toPicadilly'},
        {view: walk.center},
        {view: walk.jubilee, whereTo: 'toJubilee'}
      ]);

      walk.toPicadilly = function () {
        return walkToPicadilly(walk);
      };

      walk.toJubilee = function () {
        return walkToJubilee(walk);
      };

      return walk;
    };

    var walkToJubilee = function(fromWalk) {
      var walk = {};

      fromWalk.picadilly.toCenter();
      fromWalk.picadilly.remove();
      fromWalk.center.$el.removeClass('center');

      walk.scrollPos = next(fromWalk.scrollPos);
      walk.picadilly = fromWalk.center;
      walk.center = fromWalk.jubilee;
      walk.center.$el.addClass('center');
      walk.jubilee = getSection(next(walk.scrollPos));
      append({view: walk.jubilee, whereTo: 'toJubilee'});

      walk.toPicadilly = function () {
        return walkToPicadilly(walk);
      };

      walk.toJubilee = function () {
        return walkToJubilee(walk);
      };

      return walk;
    };

    var walkToPicadilly = function(fromWalk) {
      var walk = {};

      fromWalk.jubilee.toCenter();
      fromWalk.jubilee.remove();
      fromWalk.center.$el.removeClass('center');

      walk.scrollPos = prev(fromWalk.scrollPos);
      walk.picadilly = getSection(prev(walk.scrollPos));
      walk.center = fromWalk.picadilly;
      walk.center.$el.addClass('center');
      walk.jubilee = fromWalk.center;
      append({view: walk.picadilly, whereTo: 'toPicadilly'});

      walk.toPicadilly = function () {
        return walkToPicadilly(walk);
      };

      walk.toJubilee = function () {
        return walkToJubilee(walk);
      };

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
