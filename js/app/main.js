define([ "require", "jquery", "underscore", "modernizr" ], function(e) {
    function f(e) {
        return function() {
            return e === 0 ? !1 : Math.random() <= e ? !0 : !1;
        };
    }
    function c() {
        var e = i.width(), t = i.height(), n = 13, r = 2, s = Math.floor(e / n), o = Math.floor(t / n);
        return {
            w: e,
            h: t,
            cols: s + 1,
            rows: o + 1,
            side: n,
            gap: r
        };
    }
    function h() {
        t(".tile").remove();
    }
    function p() {
        var e = c(), r = [];
        r = n.reduce(n.range(0, e.cols), function(t, r, i, s) {
            var o = n.reduce(n.range(0, e.rows), function(t, n, i, o) {
                var c = {
                    left: r * e.side,
                    top: n * e.side,
                    paint: l()
                }, h;
                return c.paint && (h = r / (s.length - 1), c.color = f(h)() ? a : u), t.push(c), t;
            }, []);
            
return t.concat(o);
        }, []), n.each(r, function(n) {
            var r = t('<div class="tile"></div>');
            r.css("left", n.left + e.gap).css("top", n.top + e.gap).css("width", e.side - e.gap).css("height", e.side - e.gap), n.paint && r.css("backgroundColor", n.color), t("body").append(r);
        });
    }
    function v() {
        var e = "landscape", n = "portrait", r = t("meta[name=viewport]"), i = c(), s;
        i.w < i.h ? s = g({
            width: "device-width"
        }) : s = g({
            width: "device-height"
        }), d !== s && (r.attr("content", s), d = s, p());
    }
    function m() {
        return r.touch ? !0 : !1;
    }
    function g(e) {
        var t = n.extend({
            "user-scalable": "no",
            "initial-scale": "1.0",
            "maximum-scale": "1.0"
        }, e);
        return t = n.reduce(n.keys(t), function(e, n) {
            return e.push(n + "=" + t[n]), e;
        }, []).join(","), t;
    }
    var t = e("jquery"), 
n = e("underscore"), r = e("modernizr"), i = t(window), s = t(document), o = t("#container"), u = "rgb(33, 23, 102)", a = "rgb(85, 87, 71)", l = f(.2), d = "";
});;