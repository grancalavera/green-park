$(function() {
    module("bootstrap-dropdowns"), test("should provide no conflict", function() {
        var e = $.fn.dropdown.noConflict();
        ok(!$.fn.dropdown, "dropdown was set back to undefined (org value)"), $.fn.dropdown = e;
    }), test("should be defined on jquery object", function() {
        ok($(document.body).dropdown, "dropdown method is defined");
    }), test("should return element", function() {
        var e = $("<div />");
        ok(e.dropdown()[0] === e[0], "same element returned");
    }), test("should not open dropdown if target is disabled", function() {
        var e = '<ul class="tabs"><li class="dropdown"><button disabled href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button><ul class="dropdown-menu"><li><a href="#">Secondary link</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Another link</a></li></ul></li></ul>', t = $(e).find('[data-toggle="dropdown"]').dropdown().click();
        ok
(!t.parent(".dropdown").hasClass("open"), "open class added on click");
    }), test("should not open dropdown if target is disabled", function() {
        var e = '<ul class="tabs"><li class="dropdown"><button href="#" class="btn dropdown-toggle disabled" data-toggle="dropdown">Dropdown</button><ul class="dropdown-menu"><li><a href="#">Secondary link</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Another link</a></li></ul></li></ul>', t = $(e).find('[data-toggle="dropdown"]').dropdown().click();
        ok(!t.parent(".dropdown").hasClass("open"), "open class added on click");
    }), test("should add class open to menu if clicked", function() {
        var e = '<ul class="tabs"><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a><ul class="dropdown-menu"><li><a href="#">Secondary link</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Another link</a></li></ul></li></ul>'
, t = $(e).find('[data-toggle="dropdown"]').dropdown().click();
        ok(t.parent(".dropdown").hasClass("open"), "open class added on click");
    }), test("should test if element has a # before assuming it's a selector", function() {
        var e = '<ul class="tabs"><li class="dropdown"><a href="/foo/" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a><ul class="dropdown-menu"><li><a href="#">Secondary link</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Another link</a></li></ul></li></ul>', t = $(e).find('[data-toggle="dropdown"]').dropdown().click();
        ok(t.parent(".dropdown").hasClass("open"), "open class added on click");
    }), test("should remove open class if body clicked", function() {
        var e = '<ul class="tabs"><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a><ul class="dropdown-menu"><li><a href="#">Secondary link</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Another link</a></li></ul></li></ul>'
, t = $(e).appendTo("#qunit-fixture").find('[data-toggle="dropdown"]').dropdown().click();
        ok(t.parent(".dropdown").hasClass("open"), "open class added on click"), $("body").click(), ok(!t.parent(".dropdown").hasClass("open"), "open class removed"), t.remove();
    }), test("should remove open class if body clicked, with multiple drop downs", function() {
        var e = '<ul class="nav">    <li><a href="#menu1">Menu 1</a></li>    <li class="dropdown" id="testmenu">      <a class="dropdown-toggle" data-toggle="dropdown" href="#testmenu">Test menu <b class="caret"></b></a>      <ul class="dropdown-menu" role="menu">        <li><a href="#sub1">Submenu 1</a></li>      </ul>    </li></ul><div class="btn-group">    <button class="btn">Actions</button>    <button class="btn dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>    <ul class="dropdown-menu">        <li><a href="#">Action 1</a></li>    </ul></div>', t = $(e).appendTo("#qunit-fixture").find('[data-toggle="dropdown"]'
), n = t.first(), r = t.last();
        ok(t.length == 2, "Should be two dropdowns"), n.click(), ok(n.parents(".open").length == 1, "open class added on click"), ok($("#qunit-fixture .open").length == 1, "only one object is open"), $("body").click(), ok($("#qunit-fixture .open").length === 0, "open class removed"), r.click(), ok(r.parent(".open").length == 1, "open class added on click"), ok($("#qunit-fixture .open").length == 1, "only one object is open"), $("body").click(), ok($("#qunit-fixture .open").length === 0, "open class removed"), $("#qunit-fixture").html("");
    });
});;