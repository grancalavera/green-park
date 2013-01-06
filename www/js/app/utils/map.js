/*!
 * taken from
 * https://github.com/arduino/Arduino/blob/master/core/methods/demo/PApplet.java#L3270
 */
define(function () {
    'use strict';
    // Convenience function to map a variable from one coordinate space
    // to another.
    var map = function(value, start1, stop1, start2, stop2) {
      return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    };
    return map;
});
