$(function() {
    module("bootstrap-typeahead"), test("should provide no conflict", function() {
        var e = $.fn.typeahead.noConflict();
        ok(!$.fn.typeahead, "typeahead was set back to undefined (org value)"), $.fn.typeahead = e;
    }), test("should be defined on jquery object", function() {
        ok($(document.body).typeahead, "alert method is defined");
    }), test("should return element", function() {
        ok($(document.body).typeahead()[0] == document.body, "document.body returned");
    }), test("should listen to an input", function() {
        var e = $("<input />");
        e.typeahead(), ok($._data(e[0], "events").blur, "has a blur event"), ok($._data(e[0], "events").keypress, "has a keypress event"), ok($._data(e[0], "events").keyup, "has a keyup event");
    }), test("should create a menu", function() {
        var e = $("<input />");
        ok(e.typeahead().data("typeahead").$menu, "has a menu");
    }), test("should listen to the menu", function() {
        
var e = $("<input />"), t = e.typeahead().data("typeahead").$menu;
        ok($._data(t[0], "events").mouseover, "has a mouseover(pseudo: mouseenter)"), ok($._data(t[0], "events").click, "has a click");
    }), test("should show menu when query entered", function() {
        var e = $("<input />").appendTo("body").typeahead({
            source: [ "aa", "ab", "ac" ]
        }), t = e.data("typeahead");
        e.val("a"), t.lookup(), ok(t.$menu.is(":visible"), "typeahead is visible"), equals(t.$menu.find("li").length, 3, "has 3 items in menu"), equals(t.$menu.find(".active").length, 1, "one item is active"), e.remove(), t.$menu.remove();
    }), test("should accept data source via synchronous function", function() {
        var e = $("<input />").typeahead({
            source: function() {
                return [ "aa", "ab", "ac" ];
            }
        }).appendTo("body"), t = e.data("typeahead");
        e.val("a"), t.lookup(), ok(t.$menu.is(":visible"), "typeahead is visible"), equals
(t.$menu.find("li").length, 3, "has 3 items in menu"), equals(t.$menu.find(".active").length, 1, "one item is active"), e.remove(), t.$menu.remove();
    }), test("should accept data source via asynchronous function", function() {
        var e = $("<input />").typeahead({
            source: function(e, t) {
                t([ "aa", "ab", "ac" ]);
            }
        }).appendTo("body"), t = e.data("typeahead");
        e.val("a"), t.lookup(), ok(t.$menu.is(":visible"), "typeahead is visible"), equals(t.$menu.find("li").length, 3, "has 3 items in menu"), equals(t.$menu.find(".active").length, 1, "one item is active"), e.remove(), t.$menu.remove();
    }), test("should not explode when regex chars are entered", function() {
        var e = $("<input />").typeahead({
            source: [ "aa", "ab", "ac", "mdo*", "fat+" ]
        }).appendTo("body"), t = e.data("typeahead");
        e.val("+"), t.lookup(), ok(t.$menu.is(":visible"), "typeahead is visible"), equals(t.$menu.find("li").
length, 1, "has 1 item in menu"), equals(t.$menu.find(".active").length, 1, "one item is active"), e.remove(), t.$menu.remove();
    }), test("should hide menu when query entered", function() {
        stop();
        var e = $("<input />").typeahead({
            source: [ "aa", "ab", "ac" ]
        }).appendTo("body"), t = e.data("typeahead");
        e.val("a"), t.lookup(), ok(t.$menu.is(":visible"), "typeahead is visible"), equals(t.$menu.find("li").length, 3, "has 3 items in menu"), equals(t.$menu.find(".active").length, 1, "one item is active"), e.blur(), setTimeout(function() {
            ok(!t.$menu.is(":visible"), "typeahead is no longer visible"), start();
        }, 200), e.remove(), t.$menu.remove();
    }), test("should set next item when down arrow is pressed", function() {
        var e = $("<input />").typeahead({
            source: [ "aa", "ab", "ac" ]
        }).appendTo("body"), t = e.data("typeahead");
        e.val("a"), t.lookup(), ok(t.$menu.is(":visible"), "typeahead is visible"
), equals(t.$menu.find("li").length, 3, "has 3 items in menu"), equals(t.$menu.find(".active").length, 1, "one item is active"), ok(t.$menu.find("li").first().hasClass("active"), "first item is active"), e.trigger({
            type: "keydown",
            keyCode: 40
        }).trigger({
            type: "keypress",
            keyCode: 40
        }).trigger({
            type: "keyup",
            keyCode: 40
        }), ok(t.$menu.find("li").first().next().hasClass("active"), "second item is active"), e.trigger({
            type: "keydown",
            keyCode: 38
        }).trigger({
            type: "keypress",
            keyCode: 38
        }).trigger({
            type: "keyup",
            keyCode: 38
        }), ok(t.$menu.find("li").first().hasClass("active"), "first item is active"), e.remove(), t.$menu.remove();
    }), test("should set input value to selected item", function() {
        var e = $("<input />").typeahead({
            source: [ "aa", "ab", "ac" ]
        
}).appendTo("body"), t = e.data("typeahead"), n = !1;
        e.val("a"), t.lookup(), e.change(function() {
            n = !0;
        }), $(t.$menu.find("li")[2]).mouseover().click(), equals(e.val(), "ac", "input value was correctly set"), ok(!t.$menu.is(":visible"), "the menu was hidden"), ok(n, "a change event was fired"), e.remove(), t.$menu.remove();
    }), test("should start querying when minLength is met", function() {
        var e = $("<input />").typeahead({
            source: [ "aaaa", "aaab", "aaac" ],
            minLength: 3
        }).appendTo("body"), t = e.data("typeahead");
        e.val("aa"), t.lookup(), equals(t.$menu.find("li").length, 0, "has 0 items in menu"), e.val("aaa"), t.lookup(), equals(t.$menu.find("li").length, 3, "has 3 items in menu"), e.remove(), t.$menu.remove();
    });
});;