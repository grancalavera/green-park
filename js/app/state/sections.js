define([ "require", "jquery", "underscore", "app/views/start", "app/views/tunnel" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/views/start"), i = e("app/views/tunnel"), s = {
        sections: [],
        edges: [],
        count: 3,
        init: function(e) {
            var t, r, i;
            return n.isNumber(e) && e >= 3 ? this.count = e : this.count = 3, t = (this.count - 1) * 2, r = n.range(0, t), this.edges = n.reduce(r, function(e, n) {
                return e.push(n / (t - 1)), e;
            }, []), this;
        },
        getSection: function(e) {
            var t = this.sections[e], n, s, o, u;
            return t ? t : (e === 0 ? t = new r : (o = (e - 1) * 2, u = o + 1, n = this.edges[o], s = this.edges[u], t = new i({
                from: n,
                to: s
            })), this.sections[e] = t, t);
        },
        next: function(e) {
            return e += 1, e < this.count ? e : 0;
        },
        prev: function(e) {
            
return e -= 1, e >= 0 ? e : this.count - 1;
        },
        positions: function(e) {
            return [ this.prev(e), e, this.next(e) ];
        }
    }, o = function(e) {
        return n.extend({}, s).init(e);
    };
    return {
        create: function(e) {
            return o(e);
        }
    };
});;