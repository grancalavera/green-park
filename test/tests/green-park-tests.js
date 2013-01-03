/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
define(function (require) {
  'use strict';
  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */
  var $ = require('jquery');
  var walk =  require('app/walk');

  function start(sections) {
    return walk.start(sections);
  }

  module('walking', {
    setup: function () {
      this.tunnel = 'app/views/tunnel';
      this.start = 'app/views/start';
      this.testIndex = function () {
        equal(walk.getSection(0), this.start, 'start at index 0');
        equal(walk.getSection(1), this.tunnel, 'tunnel at index 1');
        equal(walk.getSection(2), this.tunnel, 'tunnel at index 2');
      };
      this.testCenter = function (walk) {
        ok(!walk.picadilly.$el.hasClass('center'), 'there should be no .center on the left');
        ok(walk.center.$el.hasClass('center'), 'there should .center at the center');
        ok(!walk.jubilee.$el.hasClass('center'), 'there should no .center on the right');
      };
      this.getPositions = walk.getPositions;
    }
  });

  test('next, 3 sections', function () {
    var next = walk.next;
    equal(next(0), 1, 'next should be 1');
    equal(next(1), 2, 'next shound be 2');
    equal(next(2), 0, 'next should be 0');
  });

  test('prev, 3 sections', function () {
    var prev = walk.prev;
    equal(prev(0), 2, 'prev should be 2');
    equal(prev(1), 0, 'prev shound be 0');
    equal(prev(2), 1, 'prev should be 1');
  });

  test('position by index, 3 sections', function () {
    var walk = start(3);
    // start
    deepEqual(this.getPositions(walk.scrollPos), [2, 0, 1], 'start: should be [2, 0, 1]');
    // once, each way
    deepEqual(this.getPositions(walk.toJubilee().scrollPos), [0, 1, 2], 'once > jubilee: should be [0, 1, 2]');
    deepEqual(this.getPositions(walk.toPicadilly().scrollPos), [1, 2, 0], 'once > picadilly: should be [1, 2, 0]');
    // twice, each way
    deepEqual(this.getPositions(walk.toJubilee().toJubilee().scrollPos), [1, 2, 0], 'twice:  > jubilee: should be [1, 2, 0]');
    deepEqual(this.getPositions(walk.toPicadilly().toPicadilly().scrollPos), [0, 1, 2], 'twice > picadilly: should be [0, 1, 2]');
    // trice, each way
    deepEqual(this.getPositions(walk.toJubilee().toJubilee().toJubilee().scrollPos), [2, 0, 1], 'trice > jubilee: should be [2, 0, 1]');
    deepEqual(this.getPositions(walk.toPicadilly().toPicadilly().toPicadilly().scrollPos), [2, 0, 1], ' > picadilly: should be [2, 0, 1]');
    // once and back
    deepEqual(this.getPositions(walk.toJubilee().toPicadilly().scrollPos), [2, 0, 1], 'once and back jubilee > picadilly: should be [2, 0, 1]');
    deepEqual(this.getPositions(walk.toPicadilly().toJubilee().scrollPos), [2, 0, 1], 'once and back picadilly > jubilee: should be [2, 0, 1]');
  });

  test('initial position, 3 sections', function () {
    var walk = start(3);
    equal(walk.picadilly.toString(), this.tunnel, 'tunnel on the left.');
    equal(walk.center.toString(), this.start, 'start at the center');
    equal(walk.jubilee.toString(), this.tunnel, 'tunnel on the right');
  });

  test('sections should stay at ther original index, 3 sections', function () {
    var walk = start(3);
    this.testIndex();
    walk.toJubilee();
    this.testIndex();
    walk.toPicadilly();
    this.testIndex();
    walk.toPicadilly().toJubilee();
    this.testIndex();
    walk.toJubilee().toPicadilly();
    this.testIndex();
  });

  test('walk to jubilee from start, 3 sections', function () {
    var walk = start(3).toJubilee();
    equal(walk.picadilly.toString(), this.start, 'Start on the left');
    equal(walk.center.toString(), this.tunnel, 'Tunnel at the center.');
    equal(walk.jubilee.toString(), this.tunnel, 'Tunnel on the right.');
  });

  test('walk to picadilly from start, 3 sections', function () {
    var walk = start(3).toPicadilly();
    equal(walk.picadilly.toString(), this.tunnel, 'Tunnel on the left');
    equal(walk.center.toString(), this.tunnel, 'Tunnel at the center.');
    equal(walk.jubilee.toString(), this.start, 'Start on the right.');
  });

  test('center only at the center at start, 3 sections', function () {
    var walk = start(3);
    this.testCenter(walk);
  });

  test('center only at the center, walk to jubilee, 3 sections', function () {
    var walk = start(3).toJubilee();
    this.testCenter(walk);
  });

  test('center only at the center, walk to picadilly, 3 sections', function () {
    var walk = start(3).toPicadilly();
    this.testCenter(walk);
  });

  test('center only at the center, walk to jubilee twice, 3 sections', function () {
    var walk = start(3).toJubilee().toJubilee();
    this.testCenter(walk);
  });

});
