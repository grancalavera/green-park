$(function() {
    module("bootstrap-alerts"), test("should provide no conflict", function() {
        var e = $.fn.alert.noConflict();
        ok(!$.fn.alert, "alert was set back to undefined (org value)"), $.fn.alert = e;
    }), test("should be defined on jquery object", function() {
        ok($(document.body).alert, "alert method is defined");
    }), test("should return element", function() {
        ok($(document.body).alert()[0] == document.body, "document.body returned");
    }), test("should fade element out on clicking .close", function() {
        var e = '<div class="alert-message warning fade in"><a class="close" href="#" data-dismiss="alert">\u00d7</a><p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p></div>', t = $(e).alert();
        t.find(".close").click(), ok(!t.hasClass("in"), "remove .in class on .close click");
    }), test("should remove element when clicking .close", function() {
        $.support.transition = !1;
        var e = '<div class="alert-message warning fade in"><a class="close" href="#" data-dismiss="alert">\u00d7</a><p><strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too good.</p></div>'
, t = $(e).appendTo("#qunit-fixture").alert();
        ok($("#qunit-fixture").find(".alert-message").length, "element added to dom"), t.find(".close").click(), ok(!$("#qunit-fixture").find(".alert-message").length, "element removed from dom");
    }), test("should not fire closed when close is prevented", function() {
        $.support.transition = !1, stop(), $('<div class="alert"/>').bind("close", function(e) {
            e.preventDefault(), ok(!0), start();
        }).bind("closed", function() {
            ok(!1);
        }).alert("close");
    });
});;