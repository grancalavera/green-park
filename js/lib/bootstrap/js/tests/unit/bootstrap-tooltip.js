$(function() {
    module("bootstrap-tooltip"), test("should provide no conflict", function() {
        var e = $.fn.tooltip.noConflict();
        ok(!$.fn.tooltip, "tooltip was set back to undefined (org value)"), $.fn.tooltip = e;
    }), test("should be defined on jquery object", function() {
        var e = $("<div></div>");
        ok(e.tooltip, "popover method is defined");
    }), test("should return element", function() {
        var e = $("<div></div>");
        ok(e.tooltip() == e, "document.body returned");
    }), test("should expose default settings", function() {
        ok(!!$.fn.tooltip.defaults, "defaults is defined");
    }), test("should remove title attribute", function() {
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>').tooltip();
        ok(!e.attr("title"), "title tag was removed");
    }), test("should add data attribute for referencing original title", function() {
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>'
).tooltip();
        equals(e.attr("data-original-title"), "Another tooltip", "original title preserved in data attribute");
    }), test("should place tooltips relative to placement option", function() {
        $.support.transition = !1;
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>').appendTo("#qunit-fixture").tooltip({
            placement: "bottom"
        }).tooltip("show");
        ok($(".tooltip").is(".fade.bottom.in"), "has correct classes applied"), e.tooltip("hide");
    }), test("should allow html entities", function() {
        $.support.transition = !1;
        var e = $('<a href="#" rel="tooltip" title="<b>@fat</b>"></a>').appendTo("#qunit-fixture").tooltip({
            html: !0
        }).tooltip("show");
        ok($(".tooltip b").length, "b tag was inserted"), e.tooltip("hide"), ok(!$(".tooltip").length, "tooltip removed");
    }), test("should respect custom classes", function() {
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>'
).appendTo("#qunit-fixture").tooltip({
            template: '<div class="tooltip some-class"><div class="tooltip-arrow"/><div class="tooltip-inner"/></div>'
        }).tooltip("show");
        ok($(".tooltip").hasClass("some-class"), "custom class is present"), e.tooltip("hide"), ok(!$(".tooltip").length, "tooltip removed");
    }), test("should not show tooltip if leave event occurs before delay expires", function() {
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>').appendTo("#qunit-fixture").tooltip({
            delay: 200
        });
        stop(), e.trigger("mouseenter"), setTimeout(function() {
            ok(!$(".tooltip").is(".fade.in"), "tooltip is not faded in"), e.trigger("mouseout"), setTimeout(function() {
                ok(!$(".tooltip").is(".fade.in"), "tooltip is not faded in"), start();
            }, 200);
        }, 100);
    }), test("should not show tooltip if leave event occurs before delay expires, even if hide delay is 0", function() 
{
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>').appendTo("#qunit-fixture").tooltip({
            delay: {
                show: 200,
                hide: 0
            }
        });
        stop(), e.trigger("mouseenter"), setTimeout(function() {
            ok(!$(".tooltip").is(".fade.in"), "tooltip is not faded in"), e.trigger("mouseout"), setTimeout(function() {
                ok(!$(".tooltip").is(".fade.in"), "tooltip is not faded in"), start();
            }, 200);
        }, 100);
    }), test("should not show tooltip if leave event occurs before delay expires", function() {
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>').appendTo("#qunit-fixture").tooltip({
            delay: 100
        });
        stop(), e.trigger("mouseenter"), setTimeout(function() {
            ok(!$(".tooltip").is(".fade.in"), "tooltip is not faded in"), e.trigger("mouseout"), setTimeout(function() {
                ok(!$(".tooltip").is(".fade.in"
), "tooltip is not faded in"), start();
            }, 100);
        }, 50);
    }), test("should show tooltip if leave event hasn't occured before delay expires", function() {
        var e = $('<a href="#" rel="tooltip" title="Another tooltip"></a>').appendTo("#qunit-fixture").tooltip({
            delay: 150
        });
        stop(), e.trigger("mouseenter"), setTimeout(function() {
            ok(!$(".tooltip").is(".fade.in"), "tooltip is not faded in");
        }, 100), setTimeout(function() {
            ok($(".tooltip").is(".fade.in"), "tooltip has faded in"), start();
        }, 200);
    }), test("should destroy tooltip", function() {
        var e = $("<div/>").tooltip().on("click.foo", function() {});
        ok(e.data("tooltip"), "tooltip has data"), ok($._data(e[0], "events").mouseover && $._data(e[0], "events").mouseout, "tooltip has hover event"), ok($._data(e[0], "events").click[0].namespace == "foo", "tooltip has extra click.foo event"), e.tooltip("show"), e.tooltip("destroy"
), ok(!e.hasClass("in"), "tooltip is hidden"), ok(!$._data(e[0], "tooltip"), "tooltip does not have data"), ok($._data(e[0], "events").click[0].namespace == "foo", "tooltip still has click.foo"), ok(!$._data(e[0], "events").mouseover && !$._data(e[0], "events").mouseout, "tooltip does not have any events");
    }), test("should show tooltip with delegate selector on click", function() {
        var e = $('<div><a href="#" rel="tooltip" title="Another tooltip"></a></div>'), t = e.appendTo("#qunit-fixture").tooltip({
            selector: "a[rel=tooltip]",
            trigger: "click"
        });
        e.find("a").trigger("click"), ok($(".tooltip").is(".fade.in"), "tooltip is faded in");
    });
});;