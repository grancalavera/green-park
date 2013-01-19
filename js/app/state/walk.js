define([ "require", "jquery", "underscore", "app/state/sections" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/state/sections"), i = {
        init: function(e, t) {
            return this.scrollPos = e, this.sections = t, this.positions = this.sections.positions(e), this.next = this.sections.next(e), this.prev = this.sections.prev(e), this.piccadilly = this.sections.getSection(this.positions[0]), this.center = this.sections.getSection(this.positions[1]), this.jubilee = this.sections.getSection(this.positions[2]), this;
        },
        toPiccadilly: function() {
            return u(this);
        },
        toJubilee: function() {
            return o(this);
        },
        toString: function() {
            var e = this.piccadilly.toString() + " - " + this.center.toString() + " - " + this.jubilee.toString();
            return e;
        }
    }, s = function(e, t) {
        return n.extend({}, i).init(e, t);
    }, o = function(e) {
        return s
(e.next, e.sections);
    }, u = function(e) {
        return s(e.prev, e.sections);
    };
    return {
        start: function(e) {
            return s(0, r.create(e));
        }
    };
});;