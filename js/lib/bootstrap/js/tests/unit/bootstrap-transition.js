$(function() {
    module("bootstrap-transition"), test("should be defined on jquery support object", function() {
        ok($.support.transition !== undefined, "transition object is defined");
    }), test("should provide an end object", function() {
        ok($.support.transition ? $.support.transition.end : !0, "end string is defined");
    });
});;