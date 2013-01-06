$(function() {
    module("bootstrap-affix"), test("should provide no conflict", function() {
        var e = $.fn.affix.noConflict();
        ok(!$.fn.affix, "affix was set back to undefined (org value)"), $.fn.affix = e;
    }), test("should be defined on jquery object", function() {
        ok($(document.body).affix, "affix method is defined");
    }), test("should return element", function() {
        ok($(document.body).affix()[0] == document.body, "document.body returned");
    }), test("should exit early if element is not visible", function() {
        var e = $('<div style="display: none"></div>').affix();
        e.data("affix").checkPosition(), ok(!e.hasClass("affix"), "affix class was not added");
    });
});;