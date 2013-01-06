$(function() {
    module("bootstrap-popover"), test("should provide no conflict", function() {
        var e = $.fn.popover.noConflict();
        ok(!$.fn.popover, "popover was set back to undefined (org value)"), $.fn.popover = e;
    }), test("should be defined on jquery object", function() {
        var e = $("<div></div>");
        ok(e.popover, "popover method is defined");
    }), test("should return element", function() {
        var e = $("<div></div>");
        ok(e.popover() == e, "document.body returned");
    }), test("should render popover element", function() {
        $.support.transition = !1;
        var e = $('<a href="#" title="mdo" data-content="http://twitter.com/mdo">@mdo</a>').appendTo("#qunit-fixture").popover("show");
        ok($(".popover").length, "popover was inserted"), e.popover("hide"), ok(!$(".popover").length, "popover removed");
    }), test("should store popover instance in popover data object", function() {
        $.support.transition = !1;
        
var e = $('<a href="#" title="mdo" data-content="http://twitter.com/mdo">@mdo</a>').popover();
        ok(!!e.data("popover"), "popover instance exists");
    }), test("should get title and content from options", function() {
        $.support.transition = !1;
        var e = $('<a href="#">@fat</a>').appendTo("#qunit-fixture").popover({
            title: function() {
                return "@fat";
            },
            content: function() {
                return "loves writing tests \uff08\u256f\u00b0\u25a1\u00b0\uff09\u256f\ufe35 \u253b\u2501\u253b";
            }
        });
        e.popover("show"), ok($(".popover").length, "popover was inserted"), equals($(".popover .popover-title").text(), "@fat", "title correctly inserted"), equals($(".popover .popover-content").text(), "loves writing tests \uff08\u256f\u00b0\u25a1\u00b0\uff09\u256f\ufe35 \u253b\u2501\u253b", "content correctly inserted"), e.popover("hide"), ok(!$(".popover").length, "popover was removed"), $("#qunit-fixture"
).empty();
    }), test("should get title and content from attributes", function() {
        $.support.transition = !1;
        var e = $('<a href="#" title="@mdo" data-content="loves data attributes (\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065 \ufe35 \u253b\u2501\u253b" >@mdo</a>').appendTo("#qunit-fixture").popover().popover("show");
        ok($(".popover").length, "popover was inserted"), equals($(".popover .popover-title").text(), "@mdo", "title correctly inserted"), equals($(".popover .popover-content").text(), "loves data attributes (\u3065\uff61\u25d5\u203f\u203f\u25d5\uff61)\u3065 \ufe35 \u253b\u2501\u253b", "content correctly inserted"), e.popover("hide"), ok(!$(".popover").length, "popover was removed"), $("#qunit-fixture").empty();
    }), test("should respect custom classes", function() {
        $.support.transition = !1;
        var e = $('<a href="#">@fat</a>').appendTo("#qunit-fixture").popover({
            title: "Test",
            content: "Test",
            
template: '<div class="popover foobar"><div class="arrow"></div><div class="inner"><h3 class="title"></h3><div class="content"><p></p></div></div></div>'
        });
        e.popover("show"), ok($(".popover").length, "popover was inserted"), ok($(".popover").hasClass("foobar"), "custom class is present"), e.popover("hide"), ok(!$(".popover").length, "popover was removed"), $("#qunit-fixture").empty();
    }), test("should destroy popover", function() {
        var e = $("<div/>").popover({
            trigger: "hover"
        }).on("click.foo", function() {});
        ok(e.data("popover"), "popover has data"), ok($._data(e[0], "events").mouseover && $._data(e[0], "events").mouseout, "popover has hover event"), ok($._data(e[0], "events").click[0].namespace == "foo", "popover has extra click.foo event"), e.popover("show"), e.popover("destroy"), ok(!e.hasClass("in"), "popover is hidden"), ok(!e.data("popover"), "popover does not have data"), ok($._data(e[0], "events").click[0].namespace == "foo"
, "popover still has click.foo"), ok(!$._data(e[0], "events").mouseover && !$._data(e[0], "events").mouseout, "popover does not have any events");
    });
});;