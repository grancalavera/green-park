$(function() {
    module("bootstrap-buttons"), test("should provide no conflict", function() {
        var e = $.fn.button.noConflict();
        ok(!$.fn.button, "button was set back to undefined (org value)"), $.fn.button = e;
    }), test("should be defined on jquery object", function() {
        ok($(document.body).button, "button method is defined");
    }), test("should return element", function() {
        ok($(document.body).button()[0] == document.body, "document.body returned");
    }), test("should return set state to loading", function() {
        var e = $('<button class="btn" data-loading-text="fat">mdo</button>');
        equals(e.html(), "mdo", "btn text equals mdo"), e.button("loading"), equals(e.html(), "fat", "btn text equals fat"), stop(), setTimeout(function() {
            ok(e.attr("disabled"), "btn is disabled"), ok(e.hasClass("disabled"), "btn has disabled class"), start();
        }, 0);
    }), test("should return reset state", function() {
        var e = $('<button class="btn" data-loading-text="fat">mdo</button>'
);
        equals(e.html(), "mdo", "btn text equals mdo"), e.button("loading"), equals(e.html(), "fat", "btn text equals fat"), stop(), setTimeout(function() {
            ok(e.attr("disabled"), "btn is disabled"), ok(e.hasClass("disabled"), "btn has disabled class"), start(), stop();
        }, 0), e.button("reset"), equals(e.html(), "mdo", "btn text equals mdo"), setTimeout(function() {
            ok(!e.attr("disabled"), "btn is not disabled"), ok(!e.hasClass("disabled"), "btn does not have disabled class"), start();
        }, 0);
    }), test("should toggle active", function() {
        var e = $('<button class="btn">mdo</button>');
        ok(!e.hasClass("active"), "btn does not have active class"), e.button("toggle"), ok(e.hasClass("active"), "btn has class active");
    }), test("should toggle active when btn children are clicked", function() {
        var e = $('<button class="btn" data-toggle="button">mdo</button>'), t = $("<i></i>");
        e.append(t).appendTo($("#qunit-fixture"
)), ok(!e.hasClass("active"), "btn does not have active class"), t.click(), ok(e.hasClass("active"), "btn has class active");
    }), test("should toggle active when btn children are clicked within btn-group", function() {
        var e = $('<div class="btn-group" data-toggle="buttons-checkbox"></div>'), t = $('<button class="btn">fat</button>'), n = $("<i></i>");
        e.append(t.append(n)).appendTo($("#qunit-fixture")), ok(!t.hasClass("active"), "btn does not have active class"), n.click(), ok(t.hasClass("active"), "btn has class active");
    }), test("should check for closest matching toggle", function() {
        var e = $("<div data-toggle='buttons-radio'></div>"), t = $("<button class='btn active'></button>"), n = $("<button class='btn'></button>"), r = $("<div></div>");
        r.append(t, n), e.append(r).appendTo($("#qunit-fixture")), ok(t.hasClass("active"), "btn1 has active class"), ok(!n.hasClass("active"), "btn2 does not have active class"), n.click(), ok(!t.hasClass("active"
), "btn1 does not have active class"), ok(n.hasClass("active"), "btn2 has active class");
    });
});;