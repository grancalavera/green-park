var e = new function() {
    function r(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
    }
    function i(e, t) {
        if (!e) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] == t) return !0;
        return !1;
    }
    function s(e, t, n) {
        var r = "m" + (e.cI ? "i" : "") + (n ? "g" : "");
        return new RegExp(t, r);
    }
    function o(e) {
        for (var t = 0; t < e.childNodes.length; t++) {
            node = e.childNodes[t];
            if (node.nodeName == "CODE") return node;
            if (node.nodeType != 3 || !node.nodeValue.match(/\s+/)) return null;
        }
    }
    function u(e) {
        var t = "";
        for (var n = 0; n < e.childNodes.length; n++) e.childNodes[n].nodeType == 3 ? t += e.childNodes[n].nodeValue : e.childNodes[n].nodeName == "BR" ? t += "\n" : t += u(e.childNodes[n]);
        return t;
    }
    function a(e) {
        var n = e.className.split(/\s+/);
        n = n.concat
(e.parentNode.className.split(/\s+/));
        for (var r = 0; r < n.length; r++) {
            var i = n[r].replace(/^language-/, "");
            if (i == "no-highlight") throw "No highlight";
            if (t[i]) return i;
        }
    }
    function f(e) {
        var t = [];
        return function(e, n) {
            for (var r = 0; r < e.childNodes.length; r++) e.childNodes[r].nodeType == 3 ? n += e.childNodes[r].nodeValue.length : e.childNodes[r].nodeName == "BR" ? n += 1 : (t.push({
                event: "start",
                offset: n,
                node: e.childNodes[r]
            }), n = arguments.callee(e.childNodes[r], n), t.push({
                event: "stop",
                offset: n,
                node: e.childNodes[r]
            }));
            return n;
        }(e, 0), t;
    }
    function l(e, t, n) {
        function u() {
            return e.length && t.length ? e[0].offset != t[0].offset ? e[0].offset < t[0].offset ? e : t : e[0].event == "start" && 
t[0].event == "stop" ? t : e : e.length ? e : t;
        }
        function a(e) {
            var t = "<" + e.nodeName.toLowerCase();
            for (var n = 0; n < e.attributes.length; n++) {
                var i = e.attributes[n];
                t += " " + i.nodeName.toLowerCase(), i.nodeValue != undefined && (t += '="' + r(i.nodeValue) + '"');
            }
            return t + ">";
        }
        function f(e) {
            return "</" + e.nodeName.toLowerCase() + ">";
        }
        var i = 0, s = "", o = [];
        while (e.length || t.length) {
            var l = u().splice(0, 1)[0];
            s += r(n.substr(i, l.offset - i)), i = l.offset;
            if (l.event == "start") s += a(l.node), o.push(l.node); else if (l.event == "stop") {
                var c = o.length;
                do {
                    c--;
                    var h = o[c];
                    s += f(h);
                } while (h != l.node);
                o.splice(c, 1);
                
while (c < o.length) s += a(o[c]), c++;
            }
        }
        return s += n.substr(i), s;
    }
    function c(e, o) {
        function u(e, t) {
            e.sm = [];
            for (var n = 0; n < e.c.length; n++) for (var r = 0; r < t.m.length; r++) t.m[r].cN == e.c[n] && (e.sm[e.sm.length] = t.m[r]);
        }
        function a(e, t) {
            if (!t.c) return null;
            t.sm || u(t, b);
            for (var n = 0; n < t.sm.length; n++) if (t.sm[n].bR.test(e)) return t.sm[n];
            return null;
        }
        function f(e, t) {
            if (w[e].e && w[e].eR.test(t)) return 1;
            if (w[e].eW) {
                var n = f(e - 1, t);
                return n ? n + 1 : 0;
            }
            return 0;
        }
        function l(e, t) {
            return t.iR && t.iR.test(e);
        }
        function h(e, t) {
            function r(e) {
                i(n, e) || (n[n.length] = e);
            }
            var n = [];
            
if (e.c) for (var o = 0; o < t.m.length; o++) i(e.c, t.m[o].cN) && r(t.m[o].b);
            var u = w.length - 1;
            do w[u].e && r(w[u].e), u--; while (w[u + 1].eW);
            e.i && r(e.i);
            var a = "(" + n[0];
            for (var o = 0; o < n.length; o++) a += "|" + n[o];
            return a += ")", s(t, a);
        }
        function p(e, t) {
            var n = w[w.length - 1];
            n.t || (n.t = h(n, b)), e = e.substr(t);
            var r = n.t.exec(e);
            return r ? r.index == 0 ? [ "", r[0], !1 ] : [ e.substr(0, r.index), r[0], !1 ] : [ e, "", !0 ];
        }
        function d(e, t) {
            var n = b.cI ? t[0].toLowerCase() : t[0];
            for (var r in e.keywordGroups) {
                if (!e.keywordGroups.hasOwnProperty(r)) continue;
                var i = e.keywordGroups[r].hasOwnProperty(n);
                if (i) return [ r, i ];
            }
            return !1;
        }
        function v(e, t) {
            if (!
t.k || !t.l) return r(e);
            if (!t.lR) {
                var n = "(" + t.l[0];
                for (var i = 1; i < t.l.length; i++) n += "|" + t.l[i];
                n += ")", t.lR = s(b, n, !0);
            }
            var o = "", u = 0;
            t.lR.lastIndex = 0;
            var a = t.lR.exec(e);
            while (a) {
                o += r(e.substr(u, a.index - u));
                var f = d(t, a);
                f ? (S += f[1], o += '<span class="' + f[0] + '">' + r(a[0]) + "</span>") : o += r(a[0]), u = t.lR.lastIndex, a = t.lR.exec(e);
            }
            return o += r(e.substr(u, e.length - u)), o;
        }
        function m(e, t) {
            if (t.subLanguage && n[t.subLanguage]) {
                var r = c(t.subLanguage, e);
                return S += r.keyword_count, E += r.r, r.value;
            }
            return v(e, t);
        }
        function g(e, t) {
            var n = e.nM ? "" : '<span class="' + e.displayClassName + '">';
            
e.rB ? (x += n, e.buffer = "") : e.eB ? (x += r(t) + n, e.buffer = "") : (x += n, e.buffer = t), w[w.length] = e;
        }
        function y(e, t, n) {
            var i = w[w.length - 1];
            if (n) return x += m(i.buffer + e, i), !1;
            var s = a(t, i);
            if (s) return x += m(i.buffer + e, i), g(s, t), E += s.r, s.rB;
            var o = f(w.length - 1, t);
            if (o) {
                var u = i.nM ? "" : "</span>";
                i.rE ? x += m(i.buffer + e, i) + u : i.eE ? x += m(i.buffer + e, i) + u + r(t) : x += m(i.buffer + e + t, i) + u;
                while (o > 1) u = w[w.length - 2].nM ? "" : "</span>", x += u, o--, w.length--;
                w.length--, w[w.length - 1].buffer = "";
                if (i.starts) for (var c = 0; c < b.m.length; c++) if (b.m[c].cN == i.starts) {
                    g(b.m[c], "");
                    break;
                }
                return i.rE;
            }
            if (l(t, i)) throw "Illegal"
;
        }
        var b = t[e], w = [ b.dM ], E = 0, S = 0, x = "";
        try {
            var T = 0;
            b.dM.buffer = "";
            do {
                var N = p(o, T), C = y(N[0], N[1], N[2]);
                T += N[0].length, C || (T += N[1].length);
            } while (!N[2]);
            if (w.length > 1) throw "Illegal";
            return {
                r: E,
                keyword_count: S,
                value: x
            };
        } catch (k) {
            if (k == "Illegal") return {
                r: 0,
                keyword_count: 0,
                value: r(o)
            };
            throw k;
        }
    }
    function h() {
        for (var e in t) {
            if (!t.hasOwnProperty(e)) continue;
            var n = t[e];
            for (var r = 0; r < n.m.length; r++) {
                var i = n.m[r];
                i.b && (i.bR = s(n, "^" + i.b)), i.e && (i.eR = s(n, "^" + i.e)), i.i && (i.iR = s(n, "^(?:" + i.i + ")")), n.dM.iR = s
(n, "^(?:" + n.dM.i + ")"), i.r == undefined && (i.r = 1), i.displayClassName || (i.displayClassName = i.cN);
            }
        }
    }
    function p() {
        function e(e) {
            if (!e.keywordGroups) for (var t in e.k) {
                if (!e.k.hasOwnProperty(t)) continue;
                e.k[t] instanceof Object ? e.keywordGroups = e.k : e.keywordGroups = {
                    keyword: e.k
                };
                break;
            }
        }
        for (var n in t) {
            if (!t.hasOwnProperty(n)) continue;
            var r = t[n];
            e(r.dM);
            for (var i = 0; i < r.m.length; i++) e(r.m[i]);
        }
    }
    function d() {
        if (d.called) return;
        d.called = !0, h(), p(), n = t;
    }
    function v(e, t) {
        d();
        try {
            var r = u(e), i = a(e);
        } catch (s) {
            if (s == "No highlight") return;
        }
        if (i) var o = c(i, r).value; else {
            var h = 0;
            
for (var p in n) {
                if (!n.hasOwnProperty(p)) continue;
                var v = c(p, r), m = v.keyword_count + v.r;
                if (m > h) {
                    h = m;
                    var o = v.value;
                    i = p;
                }
            }
        }
        if (o) {
            var g = e.className;
            g.match(i) || (g += " " + i);
            var y = f(e);
            if (y.length) {
                var w = document.createElement("pre");
                w.innerHTML = o, o = l(y, f(w), r);
            }
            t && (o = o.replace(/^((<[^>]+>|\t)+)/gm, function(e, n, r, i) {
                return n.replace(/\t/g, t);
            }));
            var E = document.createElement("div");
            E.innerHTML = '<pre><code class="' + g + '">' + o + "</code></pre>";
            var S = e.parentNode.parentNode;
            S.replaceChild(E.firstChild, e.parentNode);
        }
    }
    function m() {
        if (m.called) return;
        
m.called = !0, d();
        if (arguments.length) for (var r = 0; r < arguments.length; r++) t[arguments[r]] && (n[arguments[r]] = t[arguments[r]]);
        var i = document.getElementsByTagName("pre");
        for (var r = 0; r < i.length; r++) {
            var s = o(i[r]);
            s && v(s, e.tabReplace);
        }
    }
    function g() {
        var e = arguments, t = function() {
            m.apply(null, e);
        };
        window.addEventListener ? (window.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)) : window.attachEvent ? window.attachEvent("onload", t) : window.onload = t;
    }
    var t = {}, n = {};
    this.LANGUAGES = t, this.initHighlightingOnLoad = g, this.highlightBlock = v, this.initHighlighting = m, this.IR = "[a-zA-Z][a-zA-Z0-9_]*", this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", this.NR = "\\b\\d+(\\.\\d+)?", this.CNR = "\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)", this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"
, this.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [ "escape" ],
        r: 0
    }, this.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [ "escape" ],
        r: 0
    }, this.BE = {
        cN: "escape",
        b: "\\\\.",
        e: "^",
        nM: !0,
        r: 0
    }, this.CLCM = {
        cN: "comment",
        b: "//",
        e: "$",
        r: 0
    }, this.CBLCLM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/"
    }, this.HCM = {
        cN: "comment",
        b: "#",
        e: "$"
    }, this.CNM = {
        cN: "number",
        b: this.CNR,
        e: "^",
        r: 0
    };
}, t = e.initHighlightingOnLoad;

e.XML_COMMENT = {
    cN: "comment",
    b: "<!--",
    e: "-->"
}, e.XML_ATTR = {
    cN: "attribute",
    b: "\\s[A-Za-z0-9\\._:-]+=",
    e: "^",
    c: [ "value" ]
}, e.XML_VALUE_QUOT = {
    cN: "value",
    b: '"',
    e: '"'
}, e.XML_VALUE_APOS = {
    
cN: "value",
    b: "'",
    e: "'"
}, e.LANGUAGES.xml = {
    dM: {
        c: [ "pi", "comment", "cdata", "tag" ]
    },
    cI: !0,
    m: [ {
        cN: "pi",
        b: "<\\?",
        e: "\\?>",
        r: 10
    }, e.XML_COMMENT, {
        cN: "cdata",
        b: "<\\!\\[CDATA\\[",
        e: "\\]\\]>"
    }, {
        cN: "tag",
        b: "</?",
        e: ">",
        c: [ "title", "tag_internal" ],
        r: 1.5
    }, {
        cN: "title",
        b: "[A-Za-z0-9\\._:-]+",
        e: "^",
        r: 0
    }, {
        cN: "tag_internal",
        b: "^",
        eW: !0,
        nM: !0,
        c: [ "attribute" ],
        r: 0,
        i: "[\\+\\.]"
    }, e.XML_ATTR, e.XML_VALUE_QUOT, e.XML_VALUE_APOS ]
}, e.HTML_TAGS = {
    code: 1,
    kbd: 1,
    font: 1,
    noscript: 1,
    style: 1,
    img: 1,
    title: 1,
    menu: 1,
    tt: 1,
    tr: 1,
    param: 1,
    li: 1,
    tfoot: 1,
    th: 1,
    input: 1,
    td: 1,
    dl: 1,
    blockquote: 1,
    fieldset: 1,
    
big: 1,
    dd: 1,
    abbr: 1,
    optgroup: 1,
    dt: 1,
    button: 1,
    isindex: 1,
    p: 1,
    small: 1,
    div: 1,
    dir: 1,
    em: 1,
    frame: 1,
    meta: 1,
    sub: 1,
    bdo: 1,
    label: 1,
    acronym: 1,
    sup: 1,
    body: 1,
    xml: 1,
    basefont: 1,
    base: 1,
    br: 1,
    address: 1,
    strong: 1,
    legend: 1,
    ol: 1,
    script: 1,
    caption: 1,
    s: 1,
    col: 1,
    h2: 1,
    h3: 1,
    h1: 1,
    h6: 1,
    h4: 1,
    h5: 1,
    table: 1,
    select: 1,
    noframes: 1,
    span: 1,
    area: 1,
    dfn: 1,
    strike: 1,
    cite: 1,
    thead: 1,
    head: 1,
    option: 1,
    form: 1,
    hr: 1,
    "var": 1,
    link: 1,
    b: 1,
    colgroup: 1,
    ul: 1,
    applet: 1,
    del: 1,
    iframe: 1,
    pre: 1,
    frameset: 1,
    ins: 1,
    tbody: 1,
    html: 1,
    samp: 1,
    map: 1,
    object: 1,
    a: 1,
    xmlns: 1,
    center: 1,
    textarea: 1,
    i: 1,
    q: 1,
    u: 1
}, e.HTML_DOCTYPE = {
    cN: "doctype"
,
    b: "<!DOCTYPE",
    e: ">",
    r: 10
}, e.HTML_ATTR = {
    cN: "attribute",
    b: "\\s[a-zA-Z\\:_-]+=",
    e: "^",
    c: [ "value" ]
}, e.HTML_SHORT_ATTR = {
    cN: "attribute",
    b: " [a-zA-Z]+",
    e: "^"
}, e.HTML_VALUE = {
    cN: "value",
    b: "[a-zA-Z0-9]+",
    e: "^"
}, e.LANGUAGES.html = {
    dM: {
        c: [ "tag", "comment", "doctype", "vbscript" ]
    },
    cI: !0,
    m: [ e.XML_COMMENT, e.HTML_DOCTYPE, {
        cN: "tag",
        l: [ e.IR ],
        k: e.HTML_TAGS,
        b: "<style",
        e: ">",
        c: [ "attribute" ],
        i: "[\\+\\.]",
        starts: "css"
    }, {
        cN: "tag",
        l: [ e.IR ],
        k: e.HTML_TAGS,
        b: "<script",
        e: ">",
        c: [ "attribute" ],
        i: "[\\+\\.]",
        starts: "javascript"
    }, {
        cN: "tag",
        l: [ e.IR ],
        k: e.HTML_TAGS,
        b: "<[A-Za-z/]",
        e: ">",
        c: [ "attribute" ],
        i: "[\\+\\.]"
    }, {
        cN: "css",
        
e: "</style>",
        rE: !0,
        subLanguage: "css"
    }, {
        cN: "javascript",
        e: "</script>",
        rE: !0,
        subLanguage: "javascript"
    }, e.HTML_ATTR, e.HTML_SHORT_ATTR, e.XML_VALUE_QUOT, e.XML_VALUE_APOS, e.HTML_VALUE, {
        cN: "vbscript",
        b: "<%",
        e: "%>",
        subLanguage: "vbscript"
    } ]
}, e.LANGUAGES.css = {
    dM: {
        c: [ "at_rule", "id", "class", "attr_selector", "pseudo", "rules", "comment" ],
        k: e.HTML_TAGS,
        l: [ e.IR ],
        i: "="
    },
    cI: !0,
    m: [ {
        cN: "at_rule",
        b: "@",
        e: "[{;]",
        eE: !0,
        l: [ e.IR ],
        k: {
            "import": 1,
            page: 1,
            media: 1,
            charset: 1,
            "font-face": 1
        },
        c: [ "function", "string", "number", "pseudo" ]
    }, {
        cN: "id",
        b: "\\#[A-Za-z0-9_-]+",
        e: "^"
    }, {
        cN: "class",
        b: "\\.[A-Za-z0-9_-]+",
        
e: "^",
        r: 0
    }, {
        cN: "attr_selector",
        b: "\\[",
        e: "\\]",
        i: "$"
    }, {
        cN: "pseudo",
        b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+",
        e: "^"
    }, {
        cN: "rules",
        b: "{",
        e: "}",
        c: [ "rule", "comment" ],
        i: "[^\\s]"
    }, {
        cN: "rule",
        b: "[A-Z\\_\\.\\-]+\\s*:",
        e: ";",
        eW: !0,
        l: [ "[A-Za-z-]+" ],
        k: {
            "play-during": 1,
            "counter-reset": 1,
            "counter-increment": 1,
            "min-height": 1,
            quotes: 1,
            "border-top": 1,
            pitch: 1,
            font: 1,
            pause: 1,
            "list-style-image": 1,
            "border-width": 1,
            cue: 1,
            "outline-width": 1,
            "border-left": 1,
            elevation: 1,
            richness: 1,
            "speech-rate": 1,
            "border-bottom": 1,
            "border-spacing": 1,
            
background: 1,
            "list-style-type": 1,
            "text-align": 1,
            "page-break-inside": 1,
            orphans: 1,
            "page-break-before": 1,
            "text-transform": 1,
            "line-height": 1,
            "padding-left": 1,
            "font-size": 1,
            right: 1,
            "word-spacing": 1,
            "padding-top": 1,
            "outline-style": 1,
            bottom: 1,
            content: 1,
            "border-right-style": 1,
            "padding-right": 1,
            "border-left-style": 1,
            "voice-family": 1,
            "background-color": 1,
            "border-bottom-color": 1,
            "outline-color": 1,
            "unicode-bidi": 1,
            "max-width": 1,
            "font-family": 1,
            "caption-side": 1,
            "border-right-width": 1,
            "pause-before": 1,
            "border-top-style": 1,
            color: 1,
            "border-collapse": 1,
            "border-bottom-width"
: 1,
            "float": 1,
            height: 1,
            "max-height": 1,
            "margin-right": 1,
            "border-top-width": 1,
            speak: 1,
            "speak-header": 1,
            top: 1,
            "cue-before": 1,
            "min-width": 1,
            width: 1,
            "font-variant": 1,
            "border-top-color": 1,
            "background-position": 1,
            "empty-cells": 1,
            direction: 1,
            "border-right": 1,
            visibility: 1,
            padding: 1,
            "border-style": 1,
            "background-attachment": 1,
            overflow: 1,
            "border-bottom-style": 1,
            cursor: 1,
            margin: 1,
            display: 1,
            "border-left-width": 1,
            "letter-spacing": 1,
            "vertical-align": 1,
            clip: 1,
            "border-color": 1,
            "list-style": 1,
            "padding-bottom": 1,
            "pause-after": 1,
            "speak-numeral"
: 1,
            "margin-left": 1,
            widows: 1,
            border: 1,
            "font-style": 1,
            "border-left-color": 1,
            "pitch-range": 1,
            "background-repeat": 1,
            "table-layout": 1,
            "margin-bottom": 1,
            "speak-punctuation": 1,
            "font-weight": 1,
            "border-right-color": 1,
            "page-break-after": 1,
            position: 1,
            "white-space": 1,
            "text-indent": 1,
            "background-image": 1,
            volume: 1,
            stress: 1,
            outline: 1,
            clear: 1,
            "z-index": 1,
            "text-decoration": 1,
            "margin-top": 1,
            azimuth: 1,
            "cue-after": 1,
            left: 1,
            "list-style-position": 1
        },
        c: [ "value" ]
    }, e.CBLCLM, {
        cN: "value",
        b: "^",
        eW: !0,
        eE: !0,
        c: [ "function", "number", "hexcolor", "string" 
]
    }, {
        cN: "number",
        b: e.NR,
        e: "^"
    }, {
        cN: "hexcolor",
        b: "\\#[0-9A-F]+",
        e: "^"
    }, {
        cN: "function",
        b: e.IR + "\\(",
        e: "\\)",
        c: [ "params" ]
    }, {
        cN: "params",
        b: "^",
        eW: !0,
        eE: !0,
        c: [ "number", "string" ]
    }, e.ASM, e.QSM ]
};;