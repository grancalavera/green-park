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
    }
  });

  test('next, 3 sections', function () {
    var walk = start(3);
    equal(walk.next, 1, 'next should be 1');
    equal(walk.toJubilee().next, 2, 'next shound be 2');
    equal(walk.toPicadilly().next, 0, 'next should be 0');
  });

  test('prev, 3 sections', function () {
    var walk = start(3);
    equal(walk.prev, 2, 'prev should be 2');
    equal(walk.toJubilee().prev, 0, 'prev shound be 0');
    equal(walk.toPicadilly().prev, 1, 'prev should be 1');
  });

  test('position by index, 3 sections', function () {
    var walk = start(3);
    // start
    deepEqual(walk.positions, [2, 0, 1], 'start: should be [2, 0, 1]');
    // once, each way
    deepEqual(walk.toJubilee().positions, [0, 1, 2], 'once > jubilee: should be [0, 1, 2]');
    deepEqual(walk.toPicadilly().positions, [1, 2, 0], 'once > picadilly: should be [1, 2, 0]');
    // twice, each way
    deepEqual(walk.toJubilee().toJubilee().positions, [1, 2, 0], 'twice:  > jubilee: should be [1, 2, 0]');
    deepEqual(walk.toPicadilly().toPicadilly().positions, [0, 1, 2], 'twice > picadilly: should be [0, 1, 2]');
    // trice, each way
    deepEqual(walk.toJubilee().toJubilee().toJubilee().positions, [2, 0, 1], 'trice > jubilee: should be [2, 0, 1]');
    deepEqual(walk.toPicadilly().toPicadilly().toPicadilly().positions, [2, 0, 1], ' > picadilly: should be [2, 0, 1]');
    // once and back
    deepEqual(walk.toJubilee().toPicadilly().positions, [2, 0, 1], 'once and back jubilee > picadilly: should be [2, 0, 1]');
    deepEqual(walk.toPicadilly().toJubilee().positions, [2, 0, 1], 'once and back picadilly > jubilee: should be [2, 0, 1]');
  });

  test('initial position, 3 sections', function () {
    var walk = start(3);
    equal(walk.picadilly.toString(), this.tunnel, 'tunnel on the left.');
    equal(walk.center.toString(), this.start, 'start at the center');
    equal(walk.jubilee.toString(), this.tunnel, 'tunnel on the right');
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

});
