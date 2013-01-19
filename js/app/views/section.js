define([ "require", "jquery", "backbone", "underscore", "app/utils/map" ], function(e) {
    function d(e) {
        return function() {
            return e === 0 ? !1 : Math.random() <= e ? !0 : !1;
        };
    }
    var t = e("jquery"), n = e("backbone"), r = e("underscore"), i = e("app/utils/map"), s = t(window), o = "rgb(35, 76, 166)", u = "rgb(123, 132, 143)", a = "rgb(225,223,214)", f = 6, l = 2, c = f + l, h = 60, p = .1, v = d(p), m = function(e, t, n) {
        var r = s.width() * t;
        n ? e.addClass("animated") : e.removeClass("animated"), e.css("transform", "translateX(" + r + "px)");
    }, g = function() {
        var e = s.width(), t = s.height() - h, n = {
            width: e,
            height: t,
            toString: function() {
                return e + "px * " + t + "px";
            }
        };
        return n;
    }, y = function(e, t) {
        return r.isNumber(e) ? e : t;
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
            var e = g();
            return this.dimensions.toString() !== e.toString() && (this.dimensions = e, this.renderingContext = this.getRenderingContext(), this.$el.html(this.template(this.renderingContext)), this.draw()), this;
        },
        showPlatforms: function() {
            this.$(".platform").fadeIn();
        },
        hidePlatforms: function() {
            this.$(".platform").fadeOut();
        },
        getTiles: function(e, t, n, s, l, h) {
            return r.reduce(r.range(0, e), function(e, p, m, g) {
                var y = r.reduce(r.range(0, t), function(e, t, r, m) {
                    var y, b, w = {
                        x: p * c + n,
                        y: t * c + s,
                        w: f,
                        h: f,
                        s: a
                    
};
                    return v() && (y = p / (g.length - 1), b = i(y, 0, 1, l, h), w.s = d(b)() ? u : o), e.push(w), e;
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
        getRenderingContext: function() {
            var e, t, n, i, s, o, u = [], a = y(this.options.from, 0), f = y(this.options.to, 1), l = {
                width
: this.dimensions.width,
                height: this.dimensions.height
            };
            return l = r.extend(l, this.getRenderingContextAdditions()), e = l.width, t = l.height, n = Math.floor(e / c), i = Math.floor(t / c), s = Math.floor((e - c * n) / 2), o = Math.floor((t - c * i) / 2), l.isStart ? (u.push(this.getTiles(n, i, s, o, 1, 1)), u.push(this.getTiles(n, i, s, o, 0, 0))) : u.push(this.getTiles(n, i, s, o, a, f)), l.tiles = u, l;
        },
        toPiccadilly: function(e) {
            m(this.$el, -1, e);
        },
        toJubilee: function(e) {
            m(this.$el, 1, e);
        },
        toCenter: function(e) {
            m(this.$el, 0, e);
        },
        toString: function() {
            return this.viewId;
        }
    });
});;