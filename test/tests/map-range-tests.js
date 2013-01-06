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
  var map = require('app/utils/map');

  module('map range', {
    setup: function () {
      this.r = function (valueFrom, valueTo, destFrom, destTo) {
        return function (value) {
          return map(value, valueFrom, valueTo, destFrom, destTo);
        };
      };
    }
  });

  test('0 to 10 > 10 to 20', function () {
    var r = this.r(0, 10, 10, 20);
    equal(r(10), 20, '10 should map to 20');
    equal(r(5), 15, '5 should map to 15');
    equal(r(0), 10, '0 should map to 10');
  });

  test('0 to 1 > 30 to 40', function () {
    var r = this.r(0, 1, 30, 40);
    equal(r(0.5), 35, '0.5 should map to 35');
  });

  test('reversing: 10 to 0 > 0 to 10', function () {
    var r = this.r(10, 0, 0, 10);
    equal(r(8), 2, '8 should map to 2');
  });

  test('static range: 0 to 1 > 1 to 1', function () {
    var r  = this.r(0, 1, 1, 1);
    equal(r(0.5), 1, 'all values should map to 1');
    equal(r(1), 1, 'all values should map to 1');
    equal(r(40), 1, 'all values should map to 1');
    equal(r(0.07), 1, 'all values should map to 1');
  });

});
