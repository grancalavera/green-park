define([ "require", "jquery", "backbone", "underscore", "app/utils/map" ], function(e) {
    function c(e) {
        return function() {
            return e === 0 ? !1 : Math.random() <= e ? !0 : !1;
        };
    }
    var t = e("jquery"), n = e("backbone"), r = e("underscore"), i = e("app/utils/map"), s = t(window), o = "rgb(35, 76, 166)", u = "rgb(123, 132, 143)", a = "rgb(225,223,214)", f = 60, l = .1, h = c(l), p = function(e, t, n) {
        var r = s.width() * t;
        n ? e.addClass("animated") : e.removeClass("animated"), e.css("transform", "translateX(" + r + "px)");
    }, d = function() {
        var e = s.width(), t = s.height() - f, n = e < 1024 ? 4 : 9, r = 2, i = n + r, o = {
            width: e,
            height: t,
            side: n,
            gap: r,
            cell: i,
            toString: function() {
                return e + "px * " + t + "px";
            }
        };
        return o;
    }, v = function(e, t) {
        return r.isNumber(e) ? e : t
;
    };
    return n.View.extend({
        viewId: "app/views/section",
        dimensions: {},
        renderingContext: {},
        template: function() {
            return "";
        },
        tagName: "section",
        render: function() {
            var e = d();
            return this.dimensions.toString() !== e.toString() && (this.dimensions = e, this.renderingContext = this.getRenderingContext(), this.$el.html(this.template(this.renderingContext)), this.draw()), this;
        },
        showPlatforms: function() {
            this.$(".platform").fadeIn();
        },
        hidePlatforms: function() {
            this.$(".platform").fadeOut();
        },
        getTiles: function(e, t, n, s, f, l) {
            var p = this.dimensions.cell, d = this.dimensions.side;
            return r.reduce(r.range(0, e), function(e, v, m, g) {
                var y = r.reduce(r.range(0, t), function(e, t, r, m) {
                    var y, b, w = {
                        x: v * p + n
,
                        y: t * p + s,
                        w: d,
                        h: d,
                        s: a
                    };
                    return h() && (y = v / (g.length - 1), b = i(y, 0, 1, f, l), w.s = c(b)() ? u : o), e.push(w), e;
                }, []);
                return e.concat(y);
            }, []);
        },
        drawTile: function(e, t) {
            e.fillStyle = t.s, e.fillRect(t.x, t.y, t.w, t.h);
        },
        drawCanvas: function(e, t) {
            var n = e.getContext("2d");
            n && r.each(t, function(e) {
                this.drawTile(n, e);
            }, this);
        },
        draw: function() {
            throw new Error("Section.draw: draw() must be implemented in a sub-module.");
        },
        getRenderingContextAdditions: function() {
            throw new Error("Section.getRenderingContextAdditions: getRenderingContextAdditions() must be implemented in a sub-module.");
        },
        getRenderingContext
: function() {
            var e, t, n, i, s, o, u = [], a = v(this.options.from, 0), f = v(this.options.to, 1), l = this.dimensions.cell, c = this.dimensions.side, h = {
                width: this.dimensions.width,
                height: this.dimensions.height
            };
            return h = r.extend(h, this.getRenderingContextAdditions()), e = h.width, t = h.height, n = Math.floor(e / l), i = Math.floor(t / l), s = Math.floor((e - l * n) / 2), o = Math.floor((t - l * i) / 2), h.isStart ? (u.push(this.getTiles(n, i, s, o, 1, 1)), u.push(this.getTiles(n, i, s, o, 0, 0))) : u.push(this.getTiles(n, i, s, o, a, f)), h.tiles = u, h;
        },
        toPiccadilly: function(e) {
            p(this.$el, -1, e);
        },
        toJubilee: function(e) {
            p(this.$el, 1, e);
        },
        toCenter: function(e) {
            p(this.$el, 0, e);
        },
        toString: function() {
            return this.viewId;
        }
    });
});;