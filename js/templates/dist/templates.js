this.JST = this.JST || {}, Handlebars.registerPartial("canvas", Handlebars.template(function(e, t, n, r, i) {
    n = n || e.helpers;
    var s = "", o, u, a = "function", f = this.escapeExpression;
    return s += '<canvas width="', u = n.width, u ? o = u.call(t, {
        hash: {}
    }) : (o = t.width, o = typeof o === a ? o() : o), s += f(o) + '" height="', u = n.height, u ? o = u.call(t, {
        hash: {}
    }) : (o = t.height, o = typeof o === a ? o() : o), s += f(o) + '"></canvas>\n', s;
})), Handlebars.registerPartial("nav", Handlebars.template(function(e, t, n, r, i) {
    return n = n || e.helpers, '<nav>\n  <div class="platform piccadilly">\n    <div class="line"></div>\n    <h2><span class="arrow"></span>Piccadilly line</h2>\n  </div>\n  <div class="platform jubilee">\n    <div class="line"></div>\n    <h2>Jubilee line<span class="arrow"></span></h2>\n  </div>\n</nav>\n';
})), this.JST.start = Handlebars.template(function(e, t, n, r, i) {
    n = n || e.helpers, r = r || e
.partials;
    var s = "", o, u = this;
    s += '<div class="front">\n  <div class="container">\n    <header class="page-header">\n      <h1>Green&nbsp;Park Station</h1>\n    </header>\n    ', o = t, o = u.invokePartial(r.nav, "nav", o, n, r);
    if (o || o === 0) s += o;
    s += '\n    <h3>Can you spot the secret hidden in Green Park Station walls?</h3>\n    <p>Go <a href="http://platformtworca.wordpress.com/2009/03/23/secret-in-green-park-station/" target="_blank">here</a> for a hint.</p>\n  </div>\n  <a href="https://github.com/grancalavera/green-park">\n    <img src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub">\n  </a>\n</div>\n<div class="back">\n  ', o = t, o = u.invokePartial(r.canvas, "canvas", o, n, r);
    if (o || o === 0) s += o;
    s += "\n  ", o = t, o = u.invokePartial(r.canvas, "canvas", o, n, r);
    if (o || o === 0) s += o;
    return s += "\n</div>\n", s;
}), this.JST.tunnel = Handlebars.template(function(e, t, n, 
r, i) {
    n = n || e.helpers, r = r || e.partials;
    var s = "", o, u = this;
    s += '<div class="front">\n  <div class="container">\n    ', o = t, o = u.invokePartial(r.nav, "nav", o, n, r);
    if (o || o === 0) s += o;
    s += '\n  </div>\n</div>\n<div class="back">\n  ', o = t, o = u.invokePartial(r.canvas, "canvas", o, n, r);
    if (o || o === 0) s += o;
    return s += "\n</div>\n", s;
});;