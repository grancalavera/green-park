/*!
 * taken from
 * https://github.com/arduino/Arduino/blob/master/core/methods/demo/PApplet.java#L3270
 */

define([], function() {
    var e = function(e, t, n, r, i) {
        return r + (i - r) * ((e - t) / (n - t));
    };
    return e;
});;