define([ "require", "jquery", "underscore", "app/views/section", "templates" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/views/section");
    return r.extend({
        template: e("templates").start,
        viewId: "app/views/start",
        className: "start",
        getRenderingContextAdditions: function() {
            var e = 220, t = {
                width: e,
                isStart: !0
            };
            return t;
        },
        draw: function() {
            var e = this.$("canvas");
            this.drawCanvas(e[0], this.renderingContext.tiles[0]), this.drawCanvas(e[1], this.renderingContext.tiles[1]);
        }
    });
});;