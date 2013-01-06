$(function() {
    module("bootstrap-scrollspy"), test("should provide no conflict", function() {
        var e = $.fn.scrollspy.noConflict();
        ok(!$.fn.scrollspy, "scrollspy was set back to undefined (org value)"), $.fn.scrollspy = e;
    }), test("should be defined on jquery object", function() {
        ok($(document.body).scrollspy, "scrollspy method is defined");
    }), test("should return element", function() {
        ok($(document.body).scrollspy()[0] == document.body, "document.body returned");
    }), test("should switch active class on scroll", function() {
        var e = '<div id="masthead"></div>', t = $(e).append("#qunit-fixture"), n = '<div class="topbar"><div class="topbar-inner"><div class="container"><h3><a href="#">Bootstrap</a></h3><ul class="nav"><li><a href="#masthead">Overview</a></li></ul></div></div></div>', r = $(n).scrollspy();
        ok(r.find(".active", !0));
    });
});;