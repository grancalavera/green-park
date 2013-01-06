define([ "require", "jquery", "underscore", "app/views/section", "templates" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/views/section");
    return r.extend({
        template: e("templates").tunnel,
        viewId: "app/views/tunnel",
        className: "tunnel",
        getRenderingContextAdditions: function() {
            var e = {};
            return e;
        },
        draw: function() {
            this.drawCanvas(this.$("canvas")[0], this.renderingContext.tiles[0]);
        }
    });
});;