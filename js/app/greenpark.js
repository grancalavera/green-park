/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

//     Underscore.js 1.4.3
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */

/*!
 * taken from
 * https://github.com/arduino/Arduino/blob/master/core/methods/demo/PApplet.java#L3270
 */

(function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0;
        }), t;
    }
    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r;
                } catch (s) {}
                v.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1;
        }
        return !0;
    }
    function et() {
        return !1;
    }
    function tt() {
        return !0;
    }
    function ut(e) {
        return !e || !e.parentNode || 
e.parentNode.nodeType === 11;
    }
    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e;
    }
    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n;
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1;
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r);
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n;
        });
    }
    function lt(e) {
        var t = ct.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    function Lt(e, t) {
        return e.getElementsByTagName
(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e), o = v._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r]);
        }
        o.data && (o.data = v.extend({}, o.data));
    }
    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? 
t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando);
    }
    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
    }
    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked);
    }
    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t;
        }
        return r;
    }
    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e);
    }
    function Yt(e, t) {
        var n, r, i = [], s = 0, o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style
.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r));
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none";
        }
        return e;
    }
    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && 
(s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s;
    }
    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = !0, s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px";
    }
    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body), n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (
Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt);
        }
        return Wt[e] = n, n;
    }
    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
        }); else if (!n && v.type(t) === "object") for (i in t) fn(e + "[" + i + "]", t[i], n, r); else r(e, t);
    }
    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y), u = 0, a = o.length;
            if (v.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n);
        };
    }
    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0
], o = o || {}, o[s] = !0;
        var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u;
    }
    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i);
    }
    function An(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i) for (s in a) if (a[s] && a[s].test(i)) {
            f.unshift(s);
            break;
        }
        if (f[0] in r) o = f[0]; else {
            for (s in r) {
                if (!f[0] || e.converters
[s + " " + f[0]]) {
                    o = s;
                    break;
                }
                u || (u = s);
            }
            o = o || u;
        }
        if (o) return o !== f[0] && f.unshift(o), r[o];
    }
    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f]; ) if (i !== "*") {
            if (u !== "*" && u !== i) {
                n = a[u + " " + i] || a["* " + i];
                if (!n) for (r in a) {
                    s = r.split(" ");
                    if (s[1] === i) {
                        n = a[u + " " + s[0]] || a["* " + s[0]];
                        if (n) {
                            n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                            break;
                        }
                    }
                
}
                if (n !== !0) if (n && e["throws"]) t = n(t); else try {
                    t = n(t);
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: n ? l : "No conversion from " + u + " to " + i
                    };
                }
            }
            u = i;
        }
        return {
            state: "success",
            data: t
        };
    }
    function Fn() {
        try {
            return new e.XMLHttpRequest;
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function $n() {
        return setTimeout(function() {
            qn = t;
        }, 0), qn = v.now();
    }
    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]), i = 0, s = r.length;
            for (; i < s; i++) if (r[i].call(e, t, n)) return;
        }
);
    }
    function Kn(e, t, n) {
        var r, i = 0, s = 0, o = Xn.length, u = v.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            var t = qn || $n(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, i = 1 - r, s = 0, o = f.tweens.length;
            for (; s < o; s++) f.tweens[s].run(i);
            return u.notifyWith(e, [ f, i, n ]), i < 1 && o ? n : (u.resolveWith(e, [ f ]), !1);
        }, f = u.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: qn || $n(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n, r) {
                var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(i), i;
            },
            
stop: function(t) {
                var n = 0, r = t ? f.tweens.length : 0;
                for (; n < r; n++) f.tweens[n].run(1);
                return t ? u.resolveWith(e, [ f, t ]) : u.rejectWith(e, [ f, t ]), this;
            }
        }), l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r;
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
    }
    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand
(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i);
            } else t[r] = i;
        }
    }
    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, m = [], g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c();
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire();
            });
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = 
n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r);
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide();
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t]);
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0));
        }
    }
    function Yn(e, t, n, r, i) {
        return new 
Yn.prototype.init(e, t, n, r, i);
    }
    function Zn(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
    }
    var n, r, i = e.document, s = e.location, o = e.navigator, u = e.jQuery, a = e.$, f = Array.prototype.push, l = Array.prototype.slice, c = Array.prototype.indexOf, h = Object.prototype.toString, p = Object.prototype.hasOwnProperty, d = String.prototype.trim, v = function(e, t) {
        return new v.fn.init(e, t, n);
    }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, g = /\S/, y = /\s+/, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, S = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g
, N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = /^-ms-/, k = /-([\da-z])/gi, L = function(e, t) {
        return (t + "").toUpperCase();
    }, A = function() {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready());
    }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [ null, e, null ] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject
(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o;
                    }
                    return this.context = i, this.selector = e, this;
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this));
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return l.call(this);
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
        },
        pushStack: function(e, t
, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r;
        },
        each: function(e, t) {
            return v.each(this, e, t);
        },
        ready: function(e) {
            return v.ready.promise().done(e), this;
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","));
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        
end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
            r = u[n], i = e[n];
            if (u === i) continue;
            l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i);
        }
        return u;
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v;
        },
        
isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [ v ]), v.fn.trigger && v(i).trigger("ready").off("ready");
        },
        isFunction: function(e) {
            return v.type(e) === "function";
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array";
        },
        isWindow: function(e) {
            return e != null && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object";
        },
        isPlainObject: function(e) {
            if (!e || 
v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) ;
            return r === t || p.call(e, r);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw new Error(e);
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [ t.createElement(r[1]) ] : (r = v.buildFragment([ e ], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)));
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") 
return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
            } catch (s) {
                r = t;
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            
return e.replace(C, "ms-").replace(k, L);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, n, r) {
            var i, s = 0, o = e.length, u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e) if (n.apply(e[i], r) === !1) break;
                } else for (; s < o; ) if (n.apply(e[s++], r) === !1) break;
            } else if (u) {
                for (i in e) if (n.call(e[i], i, e[i]) === !1) break;
            } else for (; s < o; ) if (n.call(e[s], s, e[s++]) === !1) break;
            return e;
        },
        trim: d && !d.call("\ufeff\u00a0") ? function(e) {
            return e == null ? "" : d.call(e);
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "");
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(
e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s]; else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i;
        },
        map: function(e, n, r) {
            var i, s, o = [], u = 0, a = e.length, f = e instanceof 
v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i); else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)));
            }, s.guid = e.guid = e.guid || v.guid++, s) : t;
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null, l = 0, c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1;
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, 
n) {
                    return a.call(v(e), n);
                }) : (n.call(e, i), n = null));
                if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1;
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o;
        },
        now: function() {
            return (new Date).getTime();
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1); else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1); else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement;
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        
try {
                            n.doScroll("left");
                        } catch (e) {
                            return setTimeout(o, 50);
                        }
                        v.ready();
                    }
                }();
            }
        }
        return r.promise(t);
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase();
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
            for (; a && u < o; u++) if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break;
            }
            i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable());
        }, c = {
            
add: function() {
                if (a) {
                    var t = a.length;
                    (function r(t) {
                        v.each(t, function(t, n) {
                            var i = v.type(n);
                            i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n);
                        });
                    })(arguments), i ? o = a.length : n && (s = t, l(n));
                }
                return this;
            },
            remove: function() {
                return a && v.each(arguments, function(e, t) {
                    var n;
                    while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--);
                }), this;
            },
            has: function(e) {
                return v.inArray(e, a) > -1;
            },
            empty: function() {
                return a = [], this;
            },
            disable: function() {
                
return a = f = n = t, this;
            },
            disabled: function() {
                return !a;
            },
            lock: function() {
                return f = t, n || c.disable(), this;
            },
            locked: function() {
                return !f;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], a && (!r || f) && (i ? f.push(t) : l(t)), this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return c;
    }, v.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", v.Callbacks("once memory"), "resolved" ], [ "reject", "fail", v.Callbacks("once memory"), "rejected" ], [ "notify", "progress", v.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    
return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return v.Deferred(function(n) {
                        v.each(t, function(t, r) {
                            var s = r[0], o = e[t];
                            i[r[1]](v.isFunction(o) ? function() {
                                var e = o.apply(this, arguments);
                                e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [ e ]);
                            } : n[s]);
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return e != null ? v.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, v.each(t, 
function(e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u;
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t = 0, n = l.call(arguments), r = n.length, i = r !== 1 || e && v.isFunction(e.promise) ? r : 0, s = i === 1 ? e : v.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
                };
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            }
            return i || 
s.resolveWith(f, n), s.promise();
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on"
,
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test;
        } catch (d) {
            t.deleteExpando = !1;
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1;
        }), p.cloneNode
(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent) for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"
, a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style
.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null;
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t;
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e
.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e);
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando, a = typeof n == "string", f = e.nodeType, l = f ? v.cache : e, c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o;
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType, u = o ? v.cache : e, a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            
if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [ t ] : (t = v.camelCase(t), t in r ? t = [ t ] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return;
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return;
            }
            o ? v.cleanData([ e ], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null;
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0);
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0], f = 0, l = null;
            if (e === 
t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0);
                    }
                }
                return l;
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e);
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [ r[0] ]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v
.data(this, e, n), t.triggerHandler("changeData" + i, r);
                });
            }, null, n, arguments.length > 1, null, !1));
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e);
            });
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t), r = n.length, i = n.shift(), s = v._queueHooks(e, t), o = function() {
                v.dequeue(e, t);
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            
return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0);
                })
            });
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout
(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, s = v.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [ o ]);
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n);
        }
    });
    var j, F, I, q = /[\t\r\n]/g, R = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea|)$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1);
        },
        removeAttr
: function(e) {
            return this.each(function() {
                v.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className));
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e; else {
                        s = " " + i.className + " "
;
                        for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                        i.className = v.trim(s);
                    }
                }
            }
            return this;
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className));
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : "";
                    
}
                }
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0, o = v(this), u = t, a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || "";
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ")
.indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return;
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + "";
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s;
            });
        }
    }), 
v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t);
                        }
                    }
                    return o;
                },
                set: function(e
, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return;
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r);
            }
            return o && "get" in 
o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1));
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed"); else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j
.get(e, t) : t in e ? e.value : null;
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t;
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? 
i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode
(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t;
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + "";
        }
    }, v.each([ "width", "height" ], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n;
            }
        });
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n);
        }
    }), v.support.hrefNormalized || v.each([ "href", "src", "width", "height" ], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r;
            }
        });
    }), v.support.style || (v.attrHooks.style = {
        get
: function(e) {
            return e.style.cssText.toLowerCase() || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each([ "radio", "checkbox" ], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value;
            }
        };
    }), v.each([ "radio", "checkbox" ], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0;
            }
        });
    });
    var $ = /^(?:textarea|input|select)$/i
, J = /^([^\.]*|)(?:\.(.+)|)$/, K = /(?:^|\s)hover(\.\S+|)\b/, Q = /^key/, G = /^(?:mouse|contextmenu)|click/, Y = /^(?:focusinfocus|focusoutblur)$/, Z = function(e) {
        return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1");
    };
    v.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments);
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = 
(s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0;
            }
            e = null;
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, 
c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events)) return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue;
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1
) && v.removeEvent(e, u, g.handle), delete h[u]);
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0));
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n, b = [];
                if (Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y
.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return;
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [ [ s, p.bindType || y ] ];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode) m.push([ l, g ]), c = l;
                    c === (s.ownerDocument || i) && m.push([ c.defaultView || c.parentWindow || e, g ]);
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && 
v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result;
            }
            return;
        },
        dispatch: function(n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [], m = d.delegateCount, g = l.call(arguments), y = !n.exclusive && !n.namespace, b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            
if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
                u = {}, f = [];
                for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [ s ]).length), u[h] && f.push(c);
                f.length && w.push({
                    elem: s,
                    matches: f
                });
            }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data
, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()));
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, s, o, u = n.button, a = n.fromElement
;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[v.expando]) return e;
            var t, n, r = e, s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t; ) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e;
        
},
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n);
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
        e.removeEventListener && 
e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n));
    }, v.Event = function(e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0;
    }, v.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
        },
        stopPropagation: function() {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e) return;
            
e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation();
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
                if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n;
            }
        };
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function() {
            if (v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit"
, function(e) {
                var n = e.target, r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), v._data(r, "_submit_attached", !0));
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            if (v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit");
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function() {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && 
(this._just_changed = !0);
                }), v.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0);
                });
                return !1;
            }
            v.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0);
                }), v._data(t, "_change_attached", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return v.event
.remove(this, "._change"), !$.test(this.nodeName);
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            v.event.simulate(t, e.target, v.event.fix(e), !0);
        };
        v.event.special[t] = {
            setup: function() {
                n++ === 0 && i.addEventListener(e, r, !0);
            },
            teardown: function() {
                --n === 0 && i.removeEventListener(e, r, !0);
            }
        };
    }), v.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this;
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = et
; else if (!i) return this;
            return s === 1 && (o = i, i = function(e) {
                return v().off(e), o.apply(this, arguments);
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                v.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this;
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function() {
                v.event.remove(this, e, r, n);
            });
        },
        bind: function(e, t, 
n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        live: function(e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this;
        },
        die: function(e, t) {
            return v(this.context).off(e, this.selector || "**", t), this;
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                v.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            if (this[0]) return v.event.trigger(e, t, this[0], !0);
        },
        toggle: function(e) {
            var t = arguments, n = e.guid || v.guid++, r = 0, i = function(n) {
                
var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
            };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i);
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        v.fn[t] = function(e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks);
    }), function(e, t) {
        function nt(e, t, n, r) {
            
n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string") return n;
            if (l !== 1 && l !== 9) return [];
            a = o(t);
            if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
                if (l === 9) {
                    s = t.getElementById(f);
                    if (!s || !s.parentNode) return n;
                    if (s.id === f) return n.push(s), n;
                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n;
            } else {
                if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n;
            }
            return vt(e.replace(j, "$1"), t, n, r, a);
        }
        function rt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                
return n === "input" && t.type === e;
            };
        }
        function it(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e;
            };
        }
        function st(e) {
            return N(function(t) {
                return t = +t, N(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function ot(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling;
            }
            return 1;
        }
        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (
u) {
                if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter) (r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n) break;
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0);
        }
        function at(e, t, r) {
            var i = t.dir, s = r && t.dir === "parentNode", o = w++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) if (s || t.nodeType === 1) return e(t, n, r);
            } : function(t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ", l = f + n;
                    while (t = t[i]) if (s || t.nodeType === 1) {
                        if ((a = t[d]) === l) 
return t.sizset;
                        if (typeof a == "string" && a.indexOf(f) === 0) {
                            if (t.sizset) return t;
                        } else {
                            t[d] = l;
                            if (e(t, r, u)) return t.sizset = !0, t;
                            t.sizset = !1;
                        }
                    }
                } else while (t = t[i]) if (s || t.nodeType === 1) if (e(t, r, u)) return t;
            };
        }
        function ft(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function lt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o;
        }
        function ct(e, t, n, r, i, s) {
            
return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || dt(t || "*", u.nodeType ? [ u ] : u, []), m = e && (s || !t) ? lt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c);
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--) (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a);
                        }
                        l = g.length;
                        while (l--) (c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
                    }
                } else g = lt(g === o ? 
g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g);
            });
        }
        function ht(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, f = at(function(e) {
                return e === t;
            }, u, !0), l = at(function(e) {
                return T.call(t, e) > -1;
            }, u, !0), h = [ function(e, n, r) {
                return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r));
            } ];
            for (; a < s; a++) if (n = i.relative[e[a].type]) h = [ at(ft(h), n) ]; else {
                n = i.filter[e[a].type].apply(null, e[a].matches);
                if (n[d]) {
                    r = ++a;
                    for (; r < s; r++) if (i.relative[e[r].type]) break;
                    return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""));
                
}
                h.push(n);
            }
            return ft(h);
        }
        function pt(e, t) {
            var r = t.length > 0, s = e.length > 0, o = function(u, a, f, l, h) {
                var p, d, v, m = [], y = 0, w = "0", x = u && [], T = h != null, N = c, C = u || s && i.find.TAG("*", h && a.parentNode || a), k = b += N == null ? 1 : Math.E;
                T && (c = a !== g && a, n = o.el);
                for (; (p = C[w]) != null; w++) {
                    if (s && p) {
                        for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
                            l.push(p);
                            break;
                        }
                        T && (b = k, n = ++o.el);
                    }
                    r && ((p = !v && p) && y--, u && x.push(p));
                }
                y += w;
                if (r && w !== y) {
                    for (d = 0; v = t[d]; d++) v(x, m, a, f);
                    if (u) {
                        if (
y > 0) while (w--) !x[w] && !m[w] && (m[w] = E.call(l));
                        m = lt(m);
                    }
                    S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l);
                }
                return T && (b = k, c = N), x;
            };
            return o.el = 0, r ? N(o) : o;
        }
        function dt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++) nt(e, t[r], n);
            return n;
        }
        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e), p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t) return n;
                    e = e.slice(u.shift().length);
                }
                for (o = J.POS.test(e
) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                        u.splice(o, 1), e = r.length && u.join("");
                        if (!e) return S.apply(n, x.call(r, 0)), n;
                        break;
                    }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n;
        }
        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0, p = "undefined", d = ("sizcache" + Math.random()).replace(".", ""), m = String, g = e.document, y = g.documentElement, b = 0, w = 0, E = [].pop, S = [].push, x = [].slice, T = [].indexOf || function(e) {
            var t = 0, n = this.length;
            for (; t < n; t++) if (this[t] === e) return t;
            return -1;
        }, N = function(e, t) {
            return e[d] = t == null || 
t, e;
        }, C = function() {
            var e = {}, t = [];
            return N(function(n, r) {
                return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r;
            }, e);
        }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i
, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + H),
            POS: new RegExp(B, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
            needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
        }, K = function(e) {
            var t = g.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }, Q = K(function(e) {
            return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length;
        
}), G = K(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#";
        }), Y = K(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string";
        }), Z = K(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2);
        }), et = K(function(e) {
            e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
            var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
            return r = !g.getElementById(d), y.removeChild(e), t;
        }
);
        try {
            x.call(y.childNodes, 0)[0].nodeType;
        } catch (tt) {
            x = function(e) {
                var t, n = [];
                for (; t = this[e]; e++) n.push(t);
                return n;
            };
        }
        nt.matches = function(e, t) {
            return nt(e, null, null, t);
        }, nt.matchesSelector = function(e, t) {
            return nt(t, null, null, [ e ]).length > 0;
        }, s = nt.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                } else if (i === 3 || i === 4) return e.nodeValue;
            } else for (; t = e[r]; r++) n += s(t);
            return n;
        }, o = nt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement
;
            return t ? t.nodeName !== "HTML" : !1;
        }, u = nt.contains = y.contains ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r));
        } : y.compareDocumentPosition ? function(e, t) {
            return t && !!(e.compareDocumentPosition(t) & 16);
        } : function(e, t) {
            while (t = t.parentNode) if (t === e) return !0;
            return !1;
        }, nt.attr = function(e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null);
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function(e) {
                    
return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            find: {
                ID: r ? function(e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [ r ] : [];
                    }
                } : function(e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [ i ] : t : [];
                    }
                },
                TAG: Q ? function(e, t) {
                    if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e);
                } : function(e, t) {
                    var n = t.getElementsByTagName(e)
;
                    if (e === "*") {
                        var r, i = [], s = 0;
                        for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                        return i;
                    }
                    return n;
                },
                NAME: et && function(e, t) {
                    if (typeof t.getElementsByName !== p) return t.getElementsByName(name);
                },
                CLASS: Z && function(e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e);
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                
}
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (J.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[3]; else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3);
                }
            },
            filter: {
                ID: r ? 
function(e) {
                    return e = e.replace($, ""), function(t) {
                        return t.getAttribute("id") === e;
                    };
                } : function(e) {
                    return e = e.replace($, ""), function(t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e;
                    };
                },
                TAG: function(e) {
                    return e === "*" ? function() {
                        return !0;
                    } : (e = e.replace($, "").toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS: function(e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof 
e.getAttribute !== p && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r) {
                    return e === "nth" ? function(e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0) return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling) if (t
.nodeType === 1) {
                                i++;
                                if (e === t) break;
                            }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0;
                    } : function(t) {
                        var n = t;
                        switch (e) {
                          case "only":
                          case "first":
                            while (n = n.previousSibling) if (n.nodeType === 1) return !1;
                            if (e === "first") return !0;
                            n = t;
                          case "last":
                            while (n = n.nextSibling) if (n.nodeType === 1) return !1;
                            return !0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + 
e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: N(function(e) {
                    var t = [], n = [], r = a(e.replace(j, "$1"));
                    return r[d] ? N(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s);
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop();
                    };
                }),
                has: N(function(e) {
                    return function(t) {
                        
return nt(e, t).length > 0;
                    };
                }),
                contains: N(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
                    };
                }),
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                parent: function(e) {
                    return !i.pseudos.empty(e);
                },
                empty: function(e) {
                    
var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                        e = e.nextSibling;
                    }
                    return !0;
                },
                header: function(e) {
                    return X.test(e.nodeName);
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t);
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    
return t === "input" && e.type === "button" || t === "button";
                },
                input: function(e) {
                    return V.test(e.nodeName);
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement;
                },
                first: st(function() {
                    return [ 0 ];
                }),
                last: st(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: st(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: st(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                
odd: st(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }, f = y.compareDocumentPosition ? function(e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1;
        } : function(e, t) {
            if (e === t) return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], o = e.parentNode, u = t.parentNode, a = o;
            if (o === u) return ot(e, t);
            
if (!o) return -1;
            if (!u) return 1;
            while (a) i.unshift(a), a = a.parentNode;
            a = u;
            while (a) s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1);
        }, [ 0, 0 ].sort(f), h = !l, nt.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            l = h, e.sort(f);
            if (l) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1);
            }
            return e;
        }, nt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, a = nt.compile = function(e, t) {
            var n, r = [], i = [], s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--) s = ht(
t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r));
            }
            return s;
        }, g.querySelectorAll && function() {
            var e, t = vt, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [ ":focus" ], s = [ ":active" ], u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked");
            }), K(function(e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled");
            }), i = new 
RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0, c = d, h = r, p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--) a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",");
                    }
                    if (p) try {
                        return S.apply(s, x.call(h.querySelectorAll(p), 0)), s;
                    } catch (v) {} finally {
                        l || r.removeAttribute("id");
                    }
                }
                return t(e, r, s, o, u);
            }, u && (K(function(t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"
), s.push("!=", H);
                } catch (n) {}
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n)) try {
                    var a = u.call(t, n);
                    if (a || e || t.document && t.document.nodeType !== 11) return a;
                } catch (f) {}
                return nt(n, null, null, [ t ]).length > 0;
            });
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains;
    }(e);
    var nt = /Until$/, rt = /^(?:parents|prev(?:Until|All))/, it = /^.[^:#\[\.,]*$/, st = v.expr.match.needsContext, ot = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    v.fn.extend({
        
find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++) if (v.contains(u[t], this)) return !0;
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
                    o.splice(i--, 1);
                    break;
                }
            }
            return o;
        },
        has: function(e) {
            var t, n = v(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (v.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e);
        },
        filter: function(e) {
            return this
.pushStack(ft(this, e, !0), "filter", e);
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break;
                    }
                    n = n.parentNode;
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e);
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? 
e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [ e ] : e), r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r));
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
            return v.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n);
        },
        next: function(e) {
            return at(e, "nextSibling");
        },
        prev: function(e) {
            return at(e, "previousSibling");
        },
        nextAll: function(
e) {
            return v.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return v.sibling(e.firstChild);
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes);
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this
.pushStack(i, e, l.call(arguments).join(","));
        };
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : v.find.matches(e, t);
        },
        dir: function(e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i;
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n;
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ht = / jQuery\d+="(?:null|\d+)"/g, pt = /^\s+/, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, mt = /<tbody/i
, gt = /<|&#?\w+;/, yt = /<(?:script|style|link)/i, bt = /<(?:script|object|embed|option|style)/i, wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"), Et = /^(?:checkbox|radio)$/, St = /checked\s*(?:[^=]|=\s*.checked.)/i, xt = /\/(java|ecma)script/i, Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Nt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, Ct = lt(i), kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [ 1, "X<div>", "</div>" ]), v.fn.extend({
        
text: function(e) {
            return v.access(this, function(e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each(function(t) {
                v(this).wrapInner(e.call(this, t));
            }) : this.each(function(
) {
                var t = v(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each(function(n) {
                v(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            if (!ut(
this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this);
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector);
            }
        },
        after: function() {
            if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling);
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector);
            }
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++) if (!e || v.filter(e, [ n ]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n);
            return this;
        
},
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild) e.removeChild(e.firstChild);
            }
            return this;
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return v.clone(this, e, t);
            });
        },
        html: function(e) {
            return v.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        
for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0;
                    } catch (s) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                var n = v(this), r = n.html();
                n.replaceWith(e.call(this, t, r));
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                var t = this.nextSibling, n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e);
            }));
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            
var i, s, o, u, a = 0, f = e[0], l = [], c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                v(this).domManip(e, n, r);
            });
            if (v.isFunction(f)) return this.each(function(i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
            });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0));
                }
                o = s = null, l.length && v.each(l, function(e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        
type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
        }
    }), v.buildFragment = function(e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        };
    }, v.fragments = {}, v.each({
        appendTo
: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        v.fn[e] = function(n) {
            var r, i = 0, s = [], o = v(n), u = o.length, a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector);
        };
    }), v.extend({
        clone: function(e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(
e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s]);
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) At(r[s], i[s]);
                }
            }
            return r = i = null, o;
        },
        clean: function(e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct, b = [];
            if (!t || typeof t.createDocumentFragment == "undefined") t = i;
            for (s = 0; (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u) continue;
                if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u); else {
                    y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || [ "", "" ])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + 
f[2];
                    while (l--) c = c.lastChild;
                    if (!v.support.tbody) {
                        h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                        for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                    }
                    !v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c);
                }
                u.nodeType ? b.push(u) : v.merge(b, u);
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked) for (s = 0; (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function(e) {
                    
if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
                };
                for (s = 0; (u = b[s]) != null; s++) if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [ s + 1, 0 ].concat(g)), s += g.length);
            }
            return b;
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0, u = v.expando, a = v.cache, f = v.support.deleteExpando, l = v.event.special;
            for (; (i = e[o]) != null; o++) if (t || v.acceptData(i)) {
                r = i[u], n = r && a[r];
                if (n) {
                    if (n.events) for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                    a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r
));
                }
            }
        }
    }), function() {
        var e, t;
        v.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            };
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n);
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                return i && i instanceof v && !(i instanceof 
e) && (i = e(i)), v.fn.init.call(this, r, i, t);
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e;
        };
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i, jt = /opacity=([^)]*)/, Ft = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, Rt = new RegExp("^(" + m + ")(.*)$", "i"), Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"), zt = new RegExp("^([-+])=(" + m + ")", "i"), Wt = {
        BODY: "block"
    }, Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Vt = {
        letterSpacing: 0,
        fontWeight: 400
    }, $t = [ "Top", "Right", "Bottom", "Left" ], Jt = [ "Webkit", "O", "Moz", "ms" ], Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            
return Yt(this, !0);
        },
        hide: function() {
            return Yt(this);
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide();
            });
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        
},
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n), f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r;
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && 
(s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s;
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r;
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r;
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft
.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i;
    }), v.each([ "height", "width" ], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r);
                }) : tn(e, t, r);
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0);
            }
        };
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(
e, t) {
            var n = e.style, r = e.currentStyle, i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return;
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i;
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight");
                });
            }
        }), !v.support.pixelPosition && v.fn.position && v.each([ "top", "left" ], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(
e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r;
                    }
                }
            };
        });
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none";
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e);
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [ n ], s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s;
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt);
    });
    var rn = /%20/g, sn = /\[\]$/, on = /\r?\n/g, un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
, an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type));
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                };
            }).get();
        }
    }), v.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = 
v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value);
        }); else for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+");
    };
    var ln, cn, hn = /#.*$/, pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /\?/, yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, En = v.fn.load, Sn = {}, xn = {}, Tn = [ "*/" ] + [ "*" ];
    try {
        cn = s.href;
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href;
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof 
e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [ e.responseText, t, e ]);
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e);
        }), this;
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), v.each([ "get", "post" ], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                
type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            });
        };
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json");
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e;
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents
: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader
("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b); else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0);
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [ y, T, x ]) : d.rejectWith(h, [ x, T, b ]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [ x, c, l ? y : b ]), m.fireWith(h, [ x, T ]), f && (p.trigger("ajaxComplete", [ x, c ]), --v.active || v.event.trigger("ajaxStop"));
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n), h = c.context || c, p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event, d = v.Deferred(), m = v.Callbacks("once memory"), g = c.statusCode || {}, b = {}, w = {}, E = 0, S = "canceled", x = {
                readyState: 0,
                setRequestHeader: function(
e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e, b[e] = t;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return E === 2 ? i : null;
                },
                getResponseHeader: function(e) {
                    var n;
                    if (E === 2) {
                        if (!s) {
                            s = {};
                            while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2];
                        }
                        n = s[e.toLowerCase()];
                    }
                    return n === t ? null : n;
                },
                overrideMimeType: function(e) {
                    return E || (c.mimeType = e), this;
                },
                abort: function(e) {
                    return e = e || S, o && o.abort(e), T(0, e), this;
                
}
            };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) g[t] = [ g[t], e[t] ]; else t = e[x.status], x.always(t);
                }
                return this;
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!
c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(), C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "");
                }
            }
            (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                
S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport"); else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [ x, c ]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout");
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T);
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k);
                    }
                }
                return x;
            }
            return x.abort();
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [], _n = /\?/, Dn = /(=)\?(?=&|$)|\?\?/, Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            
var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e;
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && Dn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0];
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments;
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t;
        
}), "script";
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e;
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/
.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success");
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(0, 1);
                }
            };
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
        for (var e in Hn) Hn[e](0, 1);
    } : !1, jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Fn() || In();
    } : Fn, function(e) {
        v.extend(v.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
        });
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username
, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u]);
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i) a.readyState !== 4 && a.abort(); else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    
try {
                                        c.text = a.responseText;
                                    } catch (p) {}
                                    try {
                                        f = a.statusText;
                                    } catch (p) {
                                        f = "";
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204);
                                }
                            }
                        } catch (d) {
                            i || s(-1, d);
                        }
                        c && s(u, f, c, l);
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(0, 1);
                }
            };
        }
    
});
    var qn, Rn, Un = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"), Wn = /queueHooks$/, Xn = [ Gn ], Vn = {
        "*": [ function(e, t) {
            var n, r, i = this.createTween(e, t), s = zn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = v.css(i.elem, e, !0) || n || 1;
                    do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f);
                }
                i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
            }
            return i;
        } ]
    };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift
(t);
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e);
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this;
        
}
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, v.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? 
n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s);
        };
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e), s = v.speed(t, n, r), o = function() {
                var t = Kn(this, v.extend({}, e), s);
                i && t.stop(!0);
            };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = e != null && e + "queueHooks", s = v.timers, o = v._data(this);
                if (n) o[n] && o[n].
stop && i(o[n]); else for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--; ) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e);
            });
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof 
r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue);
        }, r;
    }, v.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers, r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t;
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval));
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null;
    }, v.fx.speeds = 
{
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem;
        }).length;
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t);
        });
        var n, r, i, s, o, u, a, f = {
            top: 0,
            left: 0
        }, l = this[0], c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            
left: f.left + a - o
        }) : f);
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            };
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e), s = i.offset(), o = v.css(e, "top"), u = v.css(e, "left"), a = (r === "absolute" || r === "fixed") && v.inArray("auto", [ o, u ]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
        
}
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0], t = this.offsetParent(), n = this.offset(), r = er.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body;
            });
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(
e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s;
            }, e, i, arguments.length, null);
        };
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement
, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u);
                }, n, o ? i : t, o, null);
            };
        });
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v;
    });
})(window), function() {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function(e) {
        if (e instanceof x) return e;
        if (!(this instanceof x)) return new x(e);
        this._wrapped = e;
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = 
module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.3";
    var T = x.each = x.forEach = function(e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++) if (t.call(r, e[i], i, e) === n) return;
        } else for (var o in e) if (x.has(e, o) && t.call(r, e[o], o, e) === n) return;
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s);
        }), r);
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function(e, s, o) {
            i ? n = t.call(r, n
, e, s, o) : (n = e, i = !0);
        });
        if (!i) throw new TypeError(N);
        return n;
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length;
        }
        T(e, function(u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0);
        });
        if (!i) throw new TypeError(N);
        return n;
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0;
        }), r;
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call
(n, e, i, s) && (r[r.length] = e);
        }), r);
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i);
        }, n);
    }, x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n;
        }), !!i);
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n;
        }), !!i);
    };
    x.contains = x.include = function(e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t;
        });
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2);
        return x
.map(e, function(e) {
            return (x.isFunction(t) ? t : e[t]).apply(e, n);
        });
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t];
        });
    }, x.where = function(e, t) {
        return x.isEmpty(t) ? [] : x.filter(e, function(e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
        });
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity,
            value: -Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            });
        }), r.value;
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math
.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity,
            value: Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            });
        }), r.value;
    }, x.shuffle = function(e) {
        var t, n = 0, r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e;
        }), r;
    };
    var k = function(e) {
        return x.isFunction(e) ? e : function(t) {
            return t[e];
        };
    };
    x.sortBy = function(e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            
if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1;
            }
            return e.index < t.index ? -1 : 1;
        }), "value");
    };
    var L = function(e, t, n, r) {
        var i = {}, s = k(t || x.identity);
        return T(e, function(t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t);
        }), i;
    };
    x.groupBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n);
        });
    }, x.countBy = function(e, t, n) {
        return L(e, t, n, function(e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++;
        });
    }, x.sortedIndex = function(e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t), s = 0, o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u;
        }
        return s;
    }, x.toArray = function(
e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : [];
    }, x.size = function(e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length;
    }, x.first = x.head = x.take = function(e, t, n) {
        return e == null ? void 0 : t != null && !n ? u.call(e, 0, t) : e[0];
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t));
    }, x.last = function(e, t, n) {
        return e == null ? void 0 : t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1];
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t);
    }, x.compact = function(e) {
        return x.filter(e, x.identity);
    };
    var A = function(e, t, n) {
        return T(e, function(e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e);
        }), n;
    };
    x.flatten = function(e, t) {
        return A
(e, t, []);
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1));
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e, s = [], o = [];
        return T(i, function(n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r]);
        }), s;
    }, x.union = function() {
        return x.uniq(a.apply(r, arguments));
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0;
            });
        });
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e);
        });
    }, x.zip = function() {
        var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = new 
Array(t);
        for (var r = 0; r < t; r++) n[r] = x.pluck(e, "" + r);
        return n;
    }, x.object = function(e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n;
    }, x.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = 0, i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n;
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++) if (e[r] === t) return r;
        return -1;
    }, x.lastIndexOf = function(e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--) if (e[i] === t) return i;
        return -1;
    }, x.range = 
function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s;
    };
    var O = function() {};
    x.bind = function(e, t) {
        var n, r;
        if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function() {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i;
            }
            return e.apply(t, n.concat(u.call(arguments)));
        };
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        return t.length == 0 && (t = x.functions(e)), T(t, function(t) {
            e[
t] = x.bind(e[t], e);
        }), e;
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity), function() {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments);
        };
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, x.defer = function(e) {
        return x.delay.apply(x, [ e, 1 ].concat(u.call(arguments, 1)));
    }, x.throttle = function(e, t) {
        var n, r, i, s, o = 0, u = function() {
            o = new Date, i = null, s = e.apply(n, r);
        };
        return function() {
            var a = new Date, f = t - (a - o);
            return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s;
        };
    }, x.debounce = function(e, t, n) {
        var r, i;
        return function() 
{
            var s = this, o = arguments, u = function() {
                r = null, n || (i = e.apply(s, o));
            }, a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i;
        };
    }, x.once = function(e) {
        var t = !1, n;
        return function() {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n);
        };
    }, x.wrap = function(e, t) {
        return function() {
            var n = [ e ];
            return o.apply(n, arguments), t.apply(this, n);
        };
    }, x.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, x.after = function(e, t) {
        return e <= 0 ? t() : function() {
            if (--e < 1) return t.apply(this, arguments);
        };
    }, x.keys = E || function(e) {
        if (e !== 
Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t;
    }, x.values = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t;
    }, x.pairs = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([ n, e[n] ]);
        return t;
    }, x.invert = function(e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t;
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t) for (var n in t) e[n] = t[n];
        }), e;
    }, x.pick = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n]);
        }), t;
    
}, x.omit = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t;
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t) for (var n in t) e[n] == null && (e[n] = t[n]);
        }), e;
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e;
    }, x.tap = function(e, t) {
        return t(e), e;
    };
    var M = function(e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
          case "[object String]":
            return e == String(t);
          case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
          case "[object Date]"
:
          case "[object Boolean]":
            return +e == +t;
          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--) if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0, u = !0;
        if (i == "[object Array]") {
            o = e.length, u = o == t.length;
            if (u) while (o--) if (!(u = M(e[o], t[o], n, r))) break;
        } else {
            var a = e.constructor, l = t.constructor;
            if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
            for (var c in e) if (x.has(e, c)) {
                o++;
                if (!(u = x.has(t, c) && M(e[c], t[c], n, r))) break;
            }
            if (u) {
                for (c in t) if (x.has(t, c) && !
(o--)) break;
                u = !o;
            }
        }
        return n.pop(), r.pop(), u;
    };
    x.isEqual = function(e, t) {
        return M(e, t, [], []);
    }, x.isEmpty = function(e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e) if (x.has(e, t)) return !1;
        return !0;
    }, x.isElement = function(e) {
        return !!e && e.nodeType === 1;
    }, x.isArray = w || function(e) {
        return f.call(e) == "[object Array]";
    }, x.isObject = function(e) {
        return e === Object(e);
    }, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !!x.has(e, "callee");
    }), typeof /./ != "function" && (x.isFunction = function(e) {
        return typeof e == "function"
;
    }), x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e != +e;
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]";
    }, x.isNull = function(e) {
        return e === null;
    }, x.isUndefined = function(e) {
        return e === void 0;
    }, x.has = function(e, t) {
        return l.call(e, t);
    }, x.noConflict = function() {
        return e._ = t, this;
    }, x.identity = function(e) {
        return e;
    }, x.times = function(e, t, n) {
        var r = Array(e);
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r;
    }, x.random = function(e, t) {
        return t == null && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1));
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/"
: "&#x2F;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(e) {
        x[e] = function(t) {
            return t == null ? "" : ("" + t).replace(D[e], function(t) {
                return _[e][t];
            });
        };
    }), x.result = function(e, t) {
        if (e == null) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n;
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [ this._wrapped ];
                return o.apply(e, arguments), F.call(this, n.apply(x, e));
            };
        });
    };
    var P = 0;
    x.uniqueId = function(e) {
        var t = "" + ++P;
        return e ? e + t : t;
    }, x.templateSettings = 
{
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        n = x.defaults({}, n, x.templateSettings);
        var r = new RegExp([ (n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source ].join("|") + "|$", "g"), i = 0, s = "__p+='";
        e.replace(r, function(t, n, r, o, u) {
            return s += e.slice(i, u).replace(j, function(e) {
                return "\\" + B[e];
            }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), o && (s += "';\n" + o + "\n__p+='"), i = u + t.length, t;
        }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + 
s + "return __p;\n";
        try {
            var o = new Function(n.variable || "obj", "_", s);
        } catch (u) {
            throw u.source = s, u;
        }
        if (t) return o(t, x);
        var a = function(e) {
            return o.call(this, e, x);
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a;
    }, x.chain = function(e) {
        return x(e).chain();
    };
    var F = function(e) {
        return this._chain ? x(e).chain() : e;
    };
    x.mixin(x), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n);
        };
    }), T([ "concat", "join", "slice" ], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped
, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), define("underscore", function(e) {
    return function() {
        var t, n;
        return t || e._;
    };
}(this)), function() {
    var e = this, t = e.Backbone, n = [], r = n.push, i = n.slice, s = n.splice, o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "0.9.9";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender, o.noConflict = function() {
        return e.Backbone = t, this;
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = /\s+/, f = function(e, t, n, r) {
        if (!n) return !0;
        if (typeof n == "object") for (var i in n) e[t].apply(e, [ i, n[i] ].concat(r)); else {
            if (!a.test(n)) return !0;
            
var s = n.split(a);
            for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [ s[o] ].concat(r));
        }
    }, l = function(e, t, n) {
        var r, i = -1, s = t.length;
        switch (n.length) {
          case 0:
            while (++i < s) (r = t[i]).callback.call(r.ctx);
            return;
          case 1:
            while (++i < s) (r = t[i]).callback.call(r.ctx, n[0]);
            return;
          case 2:
            while (++i < s) (r = t[i]).callback.call(r.ctx, n[0], n[1]);
            return;
          case 3:
            while (++i < s) (r = t[i]).callback.call(r.ctx, n[0], n[1], n[2]);
            return;
          default:
            while (++i < s) (r = t[i]).callback.apply(r.ctx, n);
        }
    }, c = o.Events = {
        on: function(e, t, n) {
            if (!f(this, "on", e, [ t, n ]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                
callback: t,
                context: n,
                ctx: n || this
            }), this;
        },
        once: function(e, t, n) {
            if (!f(this, "once", e, [ t, n ]) || !t) return this;
            var r = this, i = u.once(function() {
                r.off(e, i), t.apply(this, arguments);
            });
            return i._callback = t, this.on(e, i, n), this;
        },
        off: function(e, t, n) {
            var r, i, s, o, a, l, c, h;
            if (!this._events || !f(this, "off", e, [ t, n ])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            o = e ? [ e ] : u.keys(this._events);
            for (a = 0, l = o.length; a < l; a++) {
                e = o[a];
                if (r = this._events[e]) {
                    s = [];
                    if (t || n) for (c = 0, h = r.length; c < h; c++) i = r[c], (t && t !== (i.callback._callback || i.callback) || n && n !== i.context) && s.push(i);
                    this
._events[e] = s;
                }
            }
            return this;
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!f(this, "trigger", e, t)) return this;
            var n = this._events[e], r = this._events.all;
            return n && l(this, n, t), r && l(this, r, arguments), this;
        },
        listenTo: function(e, t, n) {
            var r = this._listeners || (this._listeners = {}), i = e._listenerId || (e._listenerId = u.uniqueId("l"));
            return r[i] = e, e.on(t, n || this, this), this;
        },
        stopListening: function(e, t, n) {
            var r = this._listeners;
            if (!r) return;
            if (e) e.off(t, n, this), !t && !n && delete r[e._listenerId]; else {
                for (var i in r) r[i].off(null, null, this);
                this._listeners = {};
            }
            return this;
        }
    };
    c.bind = c.on, c.unbind = 
c.off, u.extend(o, c);
    var h = o.Model = function(e, t) {
        var n, r = e || {};
        this.cid = u.uniqueId("c"), this.changed = {}, this.attributes = {}, this._changes = [], t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r)), (n = u.result(this, "defaults")) && u.defaults(r, n), this.set(r, {
            silent: !0
        }), this._currentAttributes = u.clone(this.attributes), this._previousAttributes = u.clone(this.attributes), this.initialize.apply(this, arguments);
    };
    u.extend(h.prototype, c, {
        changed: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return u.clone(this.attributes);
        },
        sync: function() {
            return o.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            return u.escape(this.get(e));
        },
        has: function(
e) {
            return this.get(e) != null;
        },
        set: function(e, t, n) {
            var r, i;
            if (e == null) return this;
            u.isObject(e) ? (i = e, n = t) : (i = {})[e] = t;
            var s = n && n.silent, o = n && n.unset;
            if (!this._validate(i, n)) return !1;
            this.idAttribute in i && (this.id = i[this.idAttribute]);
            var a = this.attributes;
            for (r in i) t = i[r], o ? delete a[r] : a[r] = t, this._changes.push(r, t);
            return this._hasComputed = !1, s || this.change(n), this;
        },
        unset: function(e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }));
        },
        clear: function(e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }));
        },
        fetch: function(e) {
            e = e ? u.
clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(r, i, s) {
                if (!t.set(t.parse(r), e)) return !1;
                n && n(t, r, e);
            }, this.sync("read", this, e);
        },
        save: function(e, t, n) {
            var r, i, s;
            e == null || u.isObject(e) ? (r = e, n = t) : e != null && ((r = {})[e] = t), n = n ? u.clone(n) : {};
            if (n.wait) {
                if (r && !this._validate(r, n)) return !1;
                i = u.clone(this.attributes);
            }
            var o = u.extend({}, n, {
                silent: !0
            });
            if (r && !this.set(r, n.wait ? o : n)) return !1;
            if (!r && !this._validate(null, n)) return !1;
            var a = this, f = n.success;
            n.success = function(e, t, i) {
                s = !0;
                var o = a.parse(e);
                n.wait && (o = u.extend(r || {}, 
o));
                if (!a.set(o, n)) return !1;
                f && f(a, e, n);
            };
            var l = this.isNew() ? "create" : n.patch ? "patch" : "update";
            l == "patch" && (n.attrs = r);
            var c = this.sync(l, this, n);
            return !s && n.wait && (this.clear(o), this.set(i, o)), c;
        },
        destroy: function(e) {
            e = e ? u.clone(e) : {};
            var t = this, n = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            e.success = function(i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e);
            };
            if (this.isNew()) return e.success(), !1;
            var i = this.sync("delete", this, e);
            return e.wait || r(), i;
        },
        url: function() {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || M();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" 
: "/") + encodeURIComponent(this.id);
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return this.id == null;
        },
        change: function(e) {
            var t = this._changing;
            this._changing = !0;
            var n = this._computeChanges(!0);
            this._pending = !!n.length;
            for (var r = n.length - 2; r >= 0; r -= 2) this.trigger("change:" + n[r], this, n[r + 1], e);
            if (t) return this;
            while (this._pending) this._pending = !1, this.trigger("change", this, e), this._previousAttributes = u.clone(this.attributes);
            return this._changing = !1, this;
        },
        hasChanged: function(e) {
            return this._hasComputed || this._computeChanges(), e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e);
        },
        changedAttributes: 
function(e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1, r = this._previousAttributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t;
            }
            return n;
        },
        _computeChanges: function(e) {
            this.changed = {};
            var t = {}, n = [], r = this._currentAttributes, i = this._changes;
            for (var s = i.length - 2; s >= 0; s -= 2) {
                var o = i[s], u = i[s + 1];
                if (t[o]) continue;
                t[o] = !0;
                if (r[o] !== u) {
                    this.changed[o] = u;
                    if (!e) continue;
                    n.push(o, u), r[o] = u;
                }
            }
            return e && (this._changes = []), this._hasComputed = !0, n;
        },
        previous: function(e) {
            return e == null || !this._previousAttributes ? null 
: this._previousAttributes[e];
        },
        previousAttributes: function() {
            return u.clone(this._previousAttributes);
        },
        _validate: function(e, t) {
            if (!this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validate(e, t);
            return n ? (t && t.error && t.error(this, n, t), this.trigger("error", this, n, t), !1) : !0;
        }
    });
    var p = o.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t));
    };
    u.extend(p.prototype, c, {
        model: h,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return o
.sync.apply(this, arguments);
        },
        add: function(e, t) {
            var n, i, o, a, f, l, c = t && t.at, h = (t && t.sort) == null ? !0 : t.sort;
            e = u.isArray(e) ? e.slice() : [ e ];
            for (n = e.length - 1; n >= 0; n--) {
                if (!(a = this._prepareModel(e[n], t))) {
                    this.trigger("error", this, e[n], t), e.splice(n, 1);
                    continue;
                }
                e[n] = a, f = a.id != null && this._byId[a.id];
                if (f || this._byCid[a.cid]) {
                    t && t.merge && f && (f.set(a.attributes, t), l = h), e.splice(n, 1);
                    continue;
                }
                a.on("all", this._onModelEvent, this), this._byCid[a.cid] = a, a.id != null && (this._byId[a.id] = a);
            }
            e.length && (l = h), this.length += e.length, i = [ c != null ? c : this.models.length, 0 ], r.apply(i, e), s.apply(this.models, i), l && this.comparator && c == null && 
this.sort({
                silent: !0
            });
            if (t && t.silent) return this;
            while (a = e.shift()) a.trigger("add", a, this, t);
            return this;
        },
        remove: function(e, t) {
            var n, r, i, s;
            t || (t = {}), e = u.isArray(e) ? e.slice() : [ e ];
            for (n = 0, r = e.length; n < r; n++) {
                s = this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id], delete this._byCid[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s);
            }
            return this;
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t;
        
},
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e;
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t;
        },
        slice: function(e, t) {
            return this.models.slice(e, t);
        },
        get: function(e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e] || this._byCid[e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e) {
            return u.isEmpty(e) ? [] : this.filter(function(t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0;
            });
        },
        sort: function(e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return u.isString(this.comparator) || this.comparator.length === 1 ? this.
models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), (!e || !e.silent) && this.trigger("sort", this, e), this;
        },
        pluck: function(e) {
            return u.invoke(this.models, "get", e);
        },
        update: function(e, t) {
            var n, r, i, s, o = [], a = [], f = {}, l = this.model.prototype.idAttribute;
            t = u.extend({
                add: !0,
                merge: !0,
                remove: !0
            }, t), t.parse && (e = this.parse(e)), u.isArray(e) || (e = e ? [ e ] : []);
            if (t.add && !t.remove) return this.add(e, t);
            for (r = 0, i = e.length; r < i; r++) n = e[r], s = this.get(n.id || n.cid || n[l]), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
            if (t.remove) for (r = 0, i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || a.push(n);
            return a.length && this.remove(a, t), o.length && this.add(o, t)
, this;
        },
        reset: function(e, t) {
            t || (t = {}), t.parse && (e = this.parse(e));
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), e && this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this;
        },
        fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(r, i, s) {
                var o = e.update ? "update" : "reset";
                t[o](r, e), n && n(t, r, e);
            }, this.sync("read", this, e);
        },
        create: function(e, t) {
            var n = this;
            t = t ? u.clone(t) : {}, e = this._prepareModel(e, t);
            if (!e) return !1;
            t.wait || n.add(e, t);
            var r = t.success;
            return t
.success = function(e, t, i) {
                i.wait && n.add(e, i), r && r(e, t, i);
            }, e.save(null, t), e;
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        chain: function() {
            return u(this.models).chain();
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
        },
        _prepareModel: function(e, t) {
            if (e instanceof h) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : !1;
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, r) {
            if ((e === "add" || e === "remove"
) && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments);
        }
    });
    var d = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortedIndex", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty" ];
    u.each(d, function(e) {
        p.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t);
        };
    });
    var v = [ "groupBy", "countBy", "sortBy" ];
    u.each(v, function(e) {
        p.prototype[e] = function(t, n) {
            var r = u.isFunction(t) ? t : function(e) {
                
return e.get(t);
            };
            return u[e](this.models, r, n);
        };
    });
    var m = o.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, g = /\((.*?)\)/g, y = /:\w+/g, b = /\*\w+/g, w = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(m.prototype, c, {
        initialize: function() {},
        route: function(e, t, n) {
            return u.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), o.history.route(e, u.bind(function(r) {
                var i = this._extractParameters(e, r);
                n && n.apply(this, i), this.trigger.apply(this, [ "route:" + t ].concat(i)), o.history.trigger("route", this, t, i);
            }, this)), this;
        },
        navigate: function(e, t) {
            return o.history.navigate(e, t), this;
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            var e, t = u.keys(this.routes
);
            while ((e = t.pop()) != null) this.route(e, this.routes[e]);
        },
        _routeToRegExp: function(e) {
            return e = e.replace(w, "\\$&").replace(g, "(?:$1)?").replace(y, "([^/]+)").replace(b, "(.*?)"), new RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            return e.exec(t).slice(1);
        }
    });
    var E = o.History = function() {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history);
    }, S = /^[#\/]|\s+$/g, x = /^\/+|\/+$/g, T = /msie [\w.]+/, N = /\/$/;
    E.started = !1, u.extend(E.prototype, c, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getFragment: function(e, t) {
            if (e == null) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location
.pathname;
                var n = this.root.replace(N, "");
                e.indexOf(n) || (e = e.substr(n.length));
            } else e = this.getHash();
            return e.replace(S, "");
        },
        start: function(e) {
            if (E.started) throw new Error("Backbone.history has already been started");
            E.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(), n = document.documentMode, r = T.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(x, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow
, this.navigate(t)), this._hasPushState ? o.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location, s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(S, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            o.$(window).unbind("popstate", this.checkUrl).unbind("hashchange"
, this.checkUrl), clearInterval(this._checkUrlInterval), E.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e), n = u.any(this.handlers, function(e) {
                if (e.route.test(t)) return e.callback(t), !0;
            });
            return n;
        },
        navigate: function(e, t) {
            if (!E.started) return !1;
            if (!t || t === !0) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            
if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace));
            }
            t.trigger && this.loadUrl(e);
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t);
            } else e.hash = "#" + t;
        }
    }), o.history = new E;
    var C = o.View = function(e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments
), this.delegateEvents();
    }, k = /^(\S+)\s*(.*)$/, L = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    u.extend(C.prototype, c, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        make: function(e, t, n) {
            var r = document.createElement(e);
            return t && o.$(r).attr(t), n != null && o.$(r).html(n), r;
        },
        setElement: function(e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(e) {
            if (!e && !(e = u.result(this, "events"))) return;
            this.undelegateEvents();
            
for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                var r = t.match(k), i = r[1], s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.bind(i, n) : this.$el.delegate(s, i, n);
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function(e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, L)), this.options = e;
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className")), this.setElement(this.make(u.result(this, "tagName"), e), !1);
            
} else this.setElement(u.result(this, "el"), !1);
        }
    });
    var A = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.sync = function(e, t, n) {
        var r = A[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || M()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend
;
            n.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments);
            };
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1);
        var a = n.success;
        n.success = function(e, r, i) {
            a && a(e, r, i), t.trigger("sync", t, e, n);
        };
        var f = n.error;
        n.error = function(e, r, i) {
            f && f(t, e, n), t.trigger("error", t, e, n);
        };
        var l = o.ajax(u.extend(i, n));
        return t.trigger("request", t, l, n), l;
    }, o.ajax = function() {
        return o.$.ajax.apply(o.$, arguments);
    };
    var O = function(e, t) {
        var n = this, r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function() {
            n.apply(this, arguments);
        }, u.extend(r, n, t);
        var i = function() {
            this.constructor = r;
        };
        return i.prototype = n.prototype
, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r;
    };
    h.extend = p.extend = m.extend = C.extend = E.extend = O;
    var M = function() {
        throw new Error('A "url" property or function must be specified');
    };
}.call(this), define("backbone", [ "underscore", "jquery" ], function(e) {
    return function() {
        var t, n;
        return t || e.Backbone;
    };
}(this)), window.Modernizr = function(e, t, n) {
    function A(e) {
        f.cssText = e;
    }
    function O(e, t) {
        return A(p.join(e + ";") + (t || ""));
    }
    function M(e, t) {
        return typeof e === t;
    }
    function _(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function D(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!_(i, "-") && f[i] !== n) return t == "pfx" ? i : !0;
        }
        return !1;
    }
    function P(e, t, r) {
        for (var i in e) {
            var s = t[e[i]];
            if (s !== 
n) return r === !1 ? e[i] : M(s, "function") ? s.bind(r || t) : s;
        }
        return !1;
    }
    function H(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + v.join(r + " ") + r).split(" ");
        return M(t, "string") || M(t, "undefined") ? D(i, t) : (i = (e + " " + m.join(r + " ") + r).split(" "), P(i, t, n));
    }
    function B() {
        i.input = function(n) {
            for (var r = 0, i = n.length; r < i; r++) w[n[r]] = n[r] in l;
            return w.list && (w.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), w;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), i.inputtypes = function(e) {
            for (var r = 0, i, s, u, a = e.length; r < a; r++) l.setAttribute("type", s = e[r]), i = l.type !== "text", i && (l.value = c, l.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && l.style.WebkitAppearance !== n ? (o.appendChild(l), u = t.defaultView
, i = u.getComputedStyle && u.getComputedStyle(l, null).WebkitAppearance !== "textfield" && l.offsetHeight !== 0, o.removeChild(l)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = l.checkValidity && l.checkValidity() === !1 : i = l.value != c)), b[e[r]] = !!i;
            return b;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var r = "2.6.2", i = {}, s = !0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l = t.createElement("input"), c = ":)", h = {}.toString, p = " -webkit- -moz- -o- -ms- ".split(" "), d = "Webkit Moz O ms", v = d.split(" "), m = d.toLowerCase().split(" "), g = {
        svg: "http://www.w3.org/2000/svg"
    }, y = {}, b = {}, w = {}, E = [], S = E.slice, x, T = function(e, n, r, i) {
        var s, a, f, l, c = t.createElement("div"), h = t.body, p = h || t.createElement("body");
        if (parseInt(r, 10)) while (r--) f = t.createElement("div"), f.id = 
i ? i[r] : u + (r + 1), c.appendChild(f);
        return s = [ "&#173;", '<style id="s', u, '">', e, "</style>" ].join(""), c.id = u, (h ? c : p).innerHTML += s, p.appendChild(c), h || (p.style.background = "", p.style.overflow = "hidden", l = o.style.overflow, o.style.overflow = "hidden", o.appendChild(p)), a = n(c, e), h ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), o.style.overflow = l), !!a;
    }, N = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n) return n(t).matches;
        var r;
        return T("@media " + t + " { #" + u + " { position: absolute; } }", function(t) {
            r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute";
        }), r;
    }, C = function() {
        function r(r, i) {
            i = i || t.createElement(e[r] || "div"), r = "on" + r;
            var s = r in i;
            return s || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && 
(i.setAttribute(r, ""), s = M(i[r], "function"), M(i[r], "undefined") || (i[r] = n), i.removeAttribute(r))), i = null, s;
        }
        var e = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return r;
    }(), k = {}.hasOwnProperty, L;
    !M(k, "undefined") && !M(k.call, "undefined") ? L = function(e, t) {
        return k.call(e, t);
    } : L = function(e, t) {
        return t in e && M(e.constructor.prototype[t], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if (typeof n != "function") throw new TypeError;
        var r = S.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var e = function() {};
                e.prototype = n.prototype;
                var s = new e, o = n.apply(s, r.concat(S.call(arguments
)));
                return Object(o) === o ? o : s;
            }
            return n.apply(t, r.concat(S.call(arguments)));
        };
        return i;
    }), y.flexbox = function() {
        return H("flexWrap");
    }, y.flexboxlegacy = function() {
        return H("boxDirection");
    }, y.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d");
    }, y.canvastext = function() {
        return !!i.canvas && !!M(t.createElement("canvas").getContext("2d").fillText, "function");
    }, y.webgl = function() {
        return !!e.WebGLRenderingContext;
    }, y.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T([ "@media (", p.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(e) {
            n = e.offsetTop === 9;
        }), n;
    }, y.geolocation = function() {
        return "geolocation" in 
navigator;
    }, y.postmessage = function() {
        return !!e.postMessage;
    }, y.websqldatabase = function() {
        return !!e.openDatabase;
    }, y.indexedDB = function() {
        return !!H("indexedDB", e);
    }, y.hashchange = function() {
        return C("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }, y.history = function() {
        return !!e.history && !!history.pushState;
    }, y.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e;
    }, y.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e;
    }, y.rgba = function() {
        return A("background-color:rgba(150,255,150,.5)"), _(f.backgroundColor, "rgba");
    }, y.hsla = function() {
        return A("background-color:hsla(120,40%,100%,.5)"), _(f.backgroundColor, "rgba") || _(f.backgroundColor, "hsla");
    }, y.multiplebgs = function() {
        return A("background:url(https://),url(https://),red url(https://)"
), /(url\s*\(.*?){3}/.test(f.background);
    }, y.backgroundsize = function() {
        return H("backgroundSize");
    }, y.borderimage = function() {
        return H("borderImage");
    }, y.borderradius = function() {
        return H("borderRadius");
    }, y.boxshadow = function() {
        return H("boxShadow");
    }, y.textshadow = function() {
        return t.createElement("div").style.textShadow === "";
    }, y.opacity = function() {
        return O("opacity:.55"), /^0.55$/.test(f.opacity);
    }, y.cssanimations = function() {
        return H("animationName");
    }, y.csscolumns = function() {
        return H("columnCount");
    }, y.cssgradients = function() {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return A((e + "-webkit- ".split(" ").join(t + e) + p.join(n + e)).slice(0, -e.length)), _(f.backgroundImage, "gradient");
    }, y.cssreflections = function(
) {
        return H("boxReflect");
    }, y.csstransforms = function() {
        return !!H("transform");
    }, y.csstransforms3d = function() {
        var e = !!H("perspective");
        return e && "webkitPerspective" in o.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = t.offsetLeft === 9 && t.offsetHeight === 3;
        }), e;
    }, y.csstransitions = function() {
        return H("transition");
    }, y.fontface = function() {
        var e;
        return T('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"), s = i.sheet || i.styleSheet, o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
            e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0;
        }), e;
    }, y.generatedcontent = function() {
        var e;
        return T([ "#", u, "{font:0/0 a}#", u, ':after{content:"'
, c, '";visibility:hidden;font:3px/1 a}' ].join(""), function(t) {
            e = t.offsetHeight >= 3;
        }), e;
    }, y.video = function() {
        var e = t.createElement("video"), n = !1;
        try {
            if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
        } catch (r) {}
        return n;
    }, y.audio = function() {
        var e = t.createElement("audio"), n = !1;
        try {
            if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "");
        } catch (
r) {}
        return n;
    }, y.localstorage = function() {
        try {
            return localStorage.setItem(u, u), localStorage.removeItem(u), !0;
        } catch (e) {
            return !1;
        }
    }, y.sessionstorage = function() {
        try {
            return sessionStorage.setItem(u, u), sessionStorage.removeItem(u), !0;
        } catch (e) {
            return !1;
        }
    }, y.webworkers = function() {
        return !!e.Worker;
    }, y.applicationcache = function() {
        return !!e.applicationCache;
    }, y.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(g.svg, "svg").createSVGRect;
    }, y.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == g.svg;
    }, y.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(h.call(t.createElementNS(g.svg, "animate")));
    }, y.svgclippaths = function() {
        return !!
t.createElementNS && /SVGClipPath/.test(h.call(t.createElementNS(g.svg, "clipPath")));
    };
    for (var j in y) L(y, j) && (x = j.toLowerCase(), i[x] = y[j](), E.push((i[x] ? "" : "no-") + x));
    return i.input || B(), i.addTest = function(e, t) {
        if (typeof e == "object") for (var r in e) L(e, r) && i.addTest(r, e[r]); else {
            e = e.toLowerCase();
            if (i[e] !== n) return i;
            t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t;
        }
        return i;
    }, A(""), a = l = null, function(e, t) {
        function l(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
        }
        function c() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e;
        }
        function h
(e) {
            var t = a[e[o]];
            return t || (t = {}, u++, e[o] = u, a[u] = t), t;
        }
        function p(e, n, s) {
            n || (n = t);
            if (f) return n.createElement(e);
            s || (s = h(n));
            var o;
            return s.cache[e] ? o = s.cache[e].cloneNode() : i.test(e) ? o = (s.cache[e] = s.createElem(e)).cloneNode() : o = s.createElem(e), o.canHaveChildren && !r.test(e) ? s.frag.appendChild(o) : o;
        }
        function d(e, n) {
            e || (e = t);
            if (f) return e.createDocumentFragment();
            n = n || h(e);
            var r = n.frag.cloneNode(), i = 0, s = c(), o = s.length;
            for (; i < o; i++) r.createElement(s[i]);
            return r;
        }
        function v(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return g.shivMethods ? p(n, 
e, t) : t.createElem(n);
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
            }) + ");return n}")(g, t.frag);
        }
        function m(e) {
            e || (e = t);
            var n = h(e);
            return g.shivCSS && !s && !n.hasCSS && (n.hasCSS = !!l(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), f || v(e, n), e;
        }
        var n = e.html5 || {}, r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, i = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, s, o = "_html5shiv", u = 0, a = {}, f;
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>"
, s = "hidden" in e, f = e.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined";
                }();
            } catch (n) {
                s = !0, f = !0;
            }
        })();
        var g = {
            elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: n.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: n.shivMethods !== !1,
            type: "default",
            shivDocument: m,
            createElement: p,
            createDocumentFragment: d
        };
        e.html5 = g, m(t);
    }(this, t), i._version = r, i._prefixes = p, i._domPrefixes = m, i._cssomPrefixes = 
v, i.mq = N, i.hasEvent = C, i.testProp = function(e) {
        return D([ e ]);
    }, i.testAllProps = H, i.testStyles = T, i.prefixed = function(e, t, n) {
        return t ? H(e, t, n) : H(e, "pfx");
    }, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + E.join(" ") : ""), i;
}(this, this.document), define("modernizr", function(e) {
    return function() {
        var t, n;
        return t || e.Modernizr;
    };
}(this)), define("app/utils/map", [], function() {
    var e = function(e, t, n, r, i) {
        return r + (i - r) * ((e - t) / (n - t));
    };
    return e;
}), define("app/views/section", [ "require", "jquery", "backbone", "underscore", "app/utils/map" ], function(e) {
    function c(e) {
        return function() {
            return e === 0 ? !1 : Math.random() <= e ? !0 : !1;
        };
    }
    var t = e("jquery"), n = e("backbone"), r = e("underscore"), i = e("app/utils/map"), s = t(window), o = "rgb(35, 76, 166)", u = "rgb(123, 132, 143)"
, a = "rgb(225,223,214)", f = 60, l = .1, h = c(l), p = function(e, t, n) {
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
            var e = d();
            return this.dimensions.toString() !== e.toString() && (this.dimensions = e, this.renderingContext = 
this.getRenderingContext(), this.$el.html(this.template(this.renderingContext)), this.draw()), this;
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
                        x: v * p + n,
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
        drawTile: function(
e, t) {
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
            var e, t, n, i, s, o, u = [], a = v(this.options.from, 0), f = v(this.options.to, 1), l = this.dimensions.cell, c = this.dimensions.side, h = {
                width: this.dimensions.width,
                height: this.dimensions.height
            };
            return h = r.extend(h, this.getRenderingContextAdditions()), e = h.width, t = h.height
, n = Math.floor(e / l), i = Math.floor(t / l), s = Math.floor((e - l * n) / 2), o = Math.floor((t - l * i) / 2), h.isStart ? (u.push(this.getTiles(n, i, s, o, 1, 1)), u.push(this.getTiles(n, i, s, o, 0, 0))) : u.push(this.getTiles(n, i, s, o, a, f)), h.tiles = u, h;
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
}), this.Handlebars = {}, function(e) {
    e.VERSION = "1.0.rc.1", e.helpers = {}, e.partials = {}, e.registerHelper = function(e, t, n) {
        n && (t.not = n), this.helpers[e] = t;
    }, e.registerPartial = function(e, t) {
        this.partials[e] = t;
    }, e.registerHelper("helperMissing", function(e) {
        if (arguments.length === 2) return undefined;
        throw new Error("Could not find property '" + 
e + "'");
    });
    var t = Object.prototype.toString, n = "[object Function]";
    e.registerHelper("blockHelperMissing", function(r, i) {
        var s = i.inverse || function() {}, o = i.fn, u = "", a = t.call(r);
        return a === n && (r = r.call(this)), r === !0 ? o(this) : r === !1 || r == null ? s(this) : a === "[object Array]" ? r.length > 0 ? e.helpers.each(r, i) : s(this) : o(r);
    }), e.K = function() {}, e.createFrame = Object.create || function(t) {
        e.K.prototype = t;
        var n = new e.K;
        return e.K.prototype = null, n;
    }, e.registerHelper("each", function(t, n) {
        var r = n.fn, i = n.inverse, s = "", o;
        n.data && (o = e.createFrame(n.data));
        if (t && t.length > 0) for (var u = 0, a = t.length; u < a; u++) o && (o.index = u), s += r(t[u], {
            data: o
        }); else s = i(this);
        return s;
    }), e.registerHelper("if", function(r, i) {
        var s = t.call(r);
        return s === n && (r = r.call(this
)), !r || e.Utils.isEmpty(r) ? i.inverse(this) : i.fn(this);
    }), e.registerHelper("unless", function(t, n) {
        var r = n.fn, i = n.inverse;
        return n.fn = i, n.inverse = r, e.helpers["if"].call(this, t, n);
    }), e.registerHelper("with", function(e, t) {
        return t.fn(e);
    }), e.registerHelper("log", function(t) {
        e.log(t);
    });
}(this.Handlebars);

var e = function() {
    function n() {
        this.yy = {};
    }
    var e = {
        trace: function() {},
        yy: {},
        symbols_: {
            error: 2,
            root: 3,
            program: 4,
            EOF: 5,
            statements: 6,
            simpleInverse: 7,
            statement: 8,
            openInverse: 9,
            closeBlock: 10,
            openBlock: 11,
            mustache: 12,
            partial: 13,
            CONTENT: 14,
            COMMENT: 15,
            OPEN_BLOCK: 16,
            inMustache: 17,
            CLOSE: 18,
            OPEN_INVERSE: 19,
            
OPEN_ENDBLOCK: 20,
            path: 21,
            OPEN: 22,
            OPEN_UNESCAPED: 23,
            OPEN_PARTIAL: 24,
            params: 25,
            hash: 26,
            DATA: 27,
            param: 28,
            STRING: 29,
            INTEGER: 30,
            BOOLEAN: 31,
            hashSegments: 32,
            hashSegment: 33,
            ID: 34,
            EQUALS: 35,
            pathSegments: 36,
            SEP: 37,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "CONTENT",
            15: "COMMENT",
            16: "OPEN_BLOCK",
            18: "CLOSE",
            19: "OPEN_INVERSE",
            20: "OPEN_ENDBLOCK",
            22: "OPEN",
            23: "OPEN_UNESCAPED",
            24: "OPEN_PARTIAL",
            27: "DATA",
            29: "STRING",
            30: "INTEGER",
            31: "BOOLEAN",
            34: "ID",
            35: "EQUALS",
            37: "SEP"
        
},
        productions_: [ 0, [ 3, 2 ], [ 4, 3 ], [ 4, 1 ], [ 4, 0 ], [ 6, 1 ], [ 6, 2 ], [ 8, 3 ], [ 8, 3 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 11, 3 ], [ 9, 3 ], [ 10, 3 ], [ 12, 3 ], [ 12, 3 ], [ 13, 3 ], [ 13, 4 ], [ 7, 2 ], [ 17, 3 ], [ 17, 2 ], [ 17, 2 ], [ 17, 1 ], [ 17, 1 ], [ 25, 2 ], [ 25, 1 ], [ 28, 1 ], [ 28, 1 ], [ 28, 1 ], [ 28, 1 ], [ 28, 1 ], [ 26, 1 ], [ 32, 2 ], [ 32, 1 ], [ 33, 3 ], [ 33, 3 ], [ 33, 3 ], [ 33, 3 ], [ 33, 3 ], [ 21, 1 ], [ 36, 3 ], [ 36, 1 ] ],
        performAction: function(t, n, r, i, s, o, u) {
            var a = o.length - 1;
            switch (s) {
              case 1:
                return o[a - 1];
              case 2:
                this.$ = new i.ProgramNode(o[a - 2], o[a]);
                break;
              case 3:
                this.$ = new i.ProgramNode(o[a]);
                break;
              case 4:
                this.$ = new i.ProgramNode([]);
                break;
              case 5:
                this.$ = [ 
o[a] ];
                break;
              case 6:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
              case 7:
                this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
                break;
              case 8:
                this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
                break;
              case 9:
                this.$ = o[a];
                break;
              case 10:
                this.$ = o[a];
                break;
              case 11:
                this.$ = new i.ContentNode(o[a]);
                break;
              case 12:
                this.$ = new i.CommentNode(o[a]);
                break;
              case 13:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
              case 14:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
              case 15:
                
this.$ = o[a - 1];
                break;
              case 16:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
              case 17:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
                break;
              case 18:
                this.$ = new i.PartialNode(o[a - 1]);
                break;
              case 19:
                this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
                break;
              case 20:
                break;
              case 21:
                this.$ = [ [ o[a - 2] ].concat(o[a - 1]), o[a] ];
                break;
              case 22:
                this.$ = [ [ o[a - 1] ].concat(o[a]), null ];
                break;
              case 23:
                this.$ = [ [ o[a - 1] ], o[a] ];
                break;
              case 24:
                this.$ = [ [ o[a] ], null ];
                break;
              case 25:
                this.$ = [ [ new i.DataNode
(o[a]) ], null ];
                break;
              case 26:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
              case 27:
                this.$ = [ o[a] ];
                break;
              case 28:
                this.$ = o[a];
                break;
              case 29:
                this.$ = new i.StringNode(o[a]);
                break;
              case 30:
                this.$ = new i.IntegerNode(o[a]);
                break;
              case 31:
                this.$ = new i.BooleanNode(o[a]);
                break;
              case 32:
                this.$ = new i.DataNode(o[a]);
                break;
              case 33:
                this.$ = new i.HashNode(o[a]);
                break;
              case 34:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
              case 35:
                this.$ = [ o[a] ];
                break;
              case 36:
                this.
$ = [ o[a - 2], o[a] ];
                break;
              case 37:
                this.$ = [ o[a - 2], new i.StringNode(o[a]) ];
                break;
              case 38:
                this.$ = [ o[a - 2], new i.IntegerNode(o[a]) ];
                break;
              case 39:
                this.$ = [ o[a - 2], new i.BooleanNode(o[a]) ];
                break;
              case 40:
                this.$ = [ o[a - 2], new i.DataNode(o[a]) ];
                break;
              case 41:
                this.$ = new i.IdNode(o[a]);
                break;
              case 42:
                o[a - 2].push(o[a]), this.$ = o[a - 2];
                break;
              case 43:
                this.$ = [ o[a] ];
            }
        },
        table: [ {
            3: 1,
            4: 2,
            5: [ 2, 4 ],
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [ 1, 9 ],
            15: [ 1, 10 ]
,
            16: [ 1, 12 ],
            19: [ 1, 11 ],
            22: [ 1, 13 ],
            23: [ 1, 14 ],
            24: [ 1, 15 ]
        }, {
            1: [ 3 ]
        }, {
            5: [ 1, 16 ]
        }, {
            5: [ 2, 3 ],
            7: 17,
            8: 18,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [ 1, 9 ],
            15: [ 1, 10 ],
            16: [ 1, 12 ],
            19: [ 1, 19 ],
            20: [ 2, 3 ],
            22: [ 1, 13 ],
            23: [ 1, 14 ],
            24: [ 1, 15 ]
        }, {
            5: [ 2, 5 ],
            14: [ 2, 5 ],
            15: [ 2, 5 ],
            16: [ 2, 5 ],
            19: [ 2, 5 ],
            20: [ 2, 5 ],
            22: [ 2, 5 ],
            23: [ 2, 5 ],
            24: [ 2, 5 ]
        }, {
            4: 20,
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [ 1, 9 ],
            15: 
[ 1, 10 ],
            16: [ 1, 12 ],
            19: [ 1, 11 ],
            20: [ 2, 4 ],
            22: [ 1, 13 ],
            23: [ 1, 14 ],
            24: [ 1, 15 ]
        }, {
            4: 21,
            6: 3,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [ 1, 9 ],
            15: [ 1, 10 ],
            16: [ 1, 12 ],
            19: [ 1, 11 ],
            20: [ 2, 4 ],
            22: [ 1, 13 ],
            23: [ 1, 14 ],
            24: [ 1, 15 ]
        }, {
            5: [ 2, 9 ],
            14: [ 2, 9 ],
            15: [ 2, 9 ],
            16: [ 2, 9 ],
            19: [ 2, 9 ],
            20: [ 2, 9 ],
            22: [ 2, 9 ],
            23: [ 2, 9 ],
            24: [ 2, 9 ]
        }, {
            5: [ 2, 10 ],
            14: [ 2, 10 ],
            15: [ 2, 10 ],
            16: [ 2, 10 ],
            19: [ 2, 10 ],
            20: [ 2, 10 ],
            22: [ 2, 10 ],
            23: [ 2, 10 ],
            24
: [ 2, 10 ]
        }, {
            5: [ 2, 11 ],
            14: [ 2, 11 ],
            15: [ 2, 11 ],
            16: [ 2, 11 ],
            19: [ 2, 11 ],
            20: [ 2, 11 ],
            22: [ 2, 11 ],
            23: [ 2, 11 ],
            24: [ 2, 11 ]
        }, {
            5: [ 2, 12 ],
            14: [ 2, 12 ],
            15: [ 2, 12 ],
            16: [ 2, 12 ],
            19: [ 2, 12 ],
            20: [ 2, 12 ],
            22: [ 2, 12 ],
            23: [ 2, 12 ],
            24: [ 2, 12 ]
        }, {
            17: 22,
            21: 23,
            27: [ 1, 24 ],
            34: [ 1, 26 ],
            36: 25
        }, {
            17: 27,
            21: 23,
            27: [ 1, 24 ],
            34: [ 1, 26 ],
            36: 25
        }, {
            17: 28,
            21: 23,
            27: [ 1, 24 ],
            34: [ 1, 26 ],
            36: 25
        }, {
            17: 29,
            21: 23,
            27: [ 1, 24 ],
            34: [ 1, 26 
],
            36: 25
        }, {
            21: 30,
            34: [ 1, 26 ],
            36: 25
        }, {
            1: [ 2, 1 ]
        }, {
            6: 31,
            8: 4,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [ 1, 9 ],
            15: [ 1, 10 ],
            16: [ 1, 12 ],
            19: [ 1, 11 ],
            22: [ 1, 13 ],
            23: [ 1, 14 ],
            24: [ 1, 15 ]
        }, {
            5: [ 2, 6 ],
            14: [ 2, 6 ],
            15: [ 2, 6 ],
            16: [ 2, 6 ],
            19: [ 2, 6 ],
            20: [ 2, 6 ],
            22: [ 2, 6 ],
            23: [ 2, 6 ],
            24: [ 2, 6 ]
        }, {
            17: 22,
            18: [ 1, 32 ],
            21: 23,
            27: [ 1, 24 ],
            34: [ 1, 26 ],
            36: 25
        }, {
            10: 33,
            20: [ 1, 34 ]
        }, {
            10: 35,
            20: [ 1, 34 ]
        }, {
            18: [ 1, 36 
]
        }, {
            18: [ 2, 24 ],
            21: 41,
            25: 37,
            26: 38,
            27: [ 1, 45 ],
            28: 39,
            29: [ 1, 42 ],
            30: [ 1, 43 ],
            31: [ 1, 44 ],
            32: 40,
            33: 46,
            34: [ 1, 47 ],
            36: 25
        }, {
            18: [ 2, 25 ]
        }, {
            18: [ 2, 41 ],
            27: [ 2, 41 ],
            29: [ 2, 41 ],
            30: [ 2, 41 ],
            31: [ 2, 41 ],
            34: [ 2, 41 ],
            37: [ 1, 48 ]
        }, {
            18: [ 2, 43 ],
            27: [ 2, 43 ],
            29: [ 2, 43 ],
            30: [ 2, 43 ],
            31: [ 2, 43 ],
            34: [ 2, 43 ],
            37: [ 2, 43 ]
        }, {
            18: [ 1, 49 ]
        }, {
            18: [ 1, 50 ]
        }, {
            18: [ 1, 51 ]
        }, {
            18: [ 1, 52 ],
            21: 53,
            34: [ 1, 26 ],
            36: 25
        }, {
            5
: [ 2, 2 ],
            8: 18,
            9: 5,
            11: 6,
            12: 7,
            13: 8,
            14: [ 1, 9 ],
            15: [ 1, 10 ],
            16: [ 1, 12 ],
            19: [ 1, 11 ],
            20: [ 2, 2 ],
            22: [ 1, 13 ],
            23: [ 1, 14 ],
            24: [ 1, 15 ]
        }, {
            14: [ 2, 20 ],
            15: [ 2, 20 ],
            16: [ 2, 20 ],
            19: [ 2, 20 ],
            22: [ 2, 20 ],
            23: [ 2, 20 ],
            24: [ 2, 20 ]
        }, {
            5: [ 2, 7 ],
            14: [ 2, 7 ],
            15: [ 2, 7 ],
            16: [ 2, 7 ],
            19: [ 2, 7 ],
            20: [ 2, 7 ],
            22: [ 2, 7 ],
            23: [ 2, 7 ],
            24: [ 2, 7 ]
        }, {
            21: 54,
            34: [ 1, 26 ],
            36: 25
        }, {
            5: [ 2, 8 ],
            14: [ 2, 8 ],
            15: [ 2, 8 ],
            16: [ 2, 8 ],
            19: [ 2, 8 ],
            20: 
[ 2, 8 ],
            22: [ 2, 8 ],
            23: [ 2, 8 ],
            24: [ 2, 8 ]
        }, {
            14: [ 2, 14 ],
            15: [ 2, 14 ],
            16: [ 2, 14 ],
            19: [ 2, 14 ],
            20: [ 2, 14 ],
            22: [ 2, 14 ],
            23: [ 2, 14 ],
            24: [ 2, 14 ]
        }, {
            18: [ 2, 22 ],
            21: 41,
            26: 55,
            27: [ 1, 45 ],
            28: 56,
            29: [ 1, 42 ],
            30: [ 1, 43 ],
            31: [ 1, 44 ],
            32: 40,
            33: 46,
            34: [ 1, 47 ],
            36: 25
        }, {
            18: [ 2, 23 ]
        }, {
            18: [ 2, 27 ],
            27: [ 2, 27 ],
            29: [ 2, 27 ],
            30: [ 2, 27 ],
            31: [ 2, 27 ],
            34: [ 2, 27 ]
        }, {
            18: [ 2, 33 ],
            33: 57,
            34: [ 1, 58 ]
        }, {
            18: [ 2, 28 ],
            27: [ 2, 28 ],
            29: [ 2, 28 ],
            30
: [ 2, 28 ],
            31: [ 2, 28 ],
            34: [ 2, 28 ]
        }, {
            18: [ 2, 29 ],
            27: [ 2, 29 ],
            29: [ 2, 29 ],
            30: [ 2, 29 ],
            31: [ 2, 29 ],
            34: [ 2, 29 ]
        }, {
            18: [ 2, 30 ],
            27: [ 2, 30 ],
            29: [ 2, 30 ],
            30: [ 2, 30 ],
            31: [ 2, 30 ],
            34: [ 2, 30 ]
        }, {
            18: [ 2, 31 ],
            27: [ 2, 31 ],
            29: [ 2, 31 ],
            30: [ 2, 31 ],
            31: [ 2, 31 ],
            34: [ 2, 31 ]
        }, {
            18: [ 2, 32 ],
            27: [ 2, 32 ],
            29: [ 2, 32 ],
            30: [ 2, 32 ],
            31: [ 2, 32 ],
            34: [ 2, 32 ]
        }, {
            18: [ 2, 35 ],
            34: [ 2, 35 ]
        }, {
            18: [ 2, 43 ],
            27: [ 2, 43 ],
            29: [ 2, 43 ],
            30: [ 2, 43 ],
            31: [ 2, 43 ],
            34: [ 2, 43 ]
,
            35: [ 1, 59 ],
            37: [ 2, 43 ]
        }, {
            34: [ 1, 60 ]
        }, {
            14: [ 2, 13 ],
            15: [ 2, 13 ],
            16: [ 2, 13 ],
            19: [ 2, 13 ],
            20: [ 2, 13 ],
            22: [ 2, 13 ],
            23: [ 2, 13 ],
            24: [ 2, 13 ]
        }, {
            5: [ 2, 16 ],
            14: [ 2, 16 ],
            15: [ 2, 16 ],
            16: [ 2, 16 ],
            19: [ 2, 16 ],
            20: [ 2, 16 ],
            22: [ 2, 16 ],
            23: [ 2, 16 ],
            24: [ 2, 16 ]
        }, {
            5: [ 2, 17 ],
            14: [ 2, 17 ],
            15: [ 2, 17 ],
            16: [ 2, 17 ],
            19: [ 2, 17 ],
            20: [ 2, 17 ],
            22: [ 2, 17 ],
            23: [ 2, 17 ],
            24: [ 2, 17 ]
        }, {
            5: [ 2, 18 ],
            14: [ 2, 18 ],
            15: [ 2, 18 ],
            16: [ 2, 18 ],
            19: [ 2, 18 ],
            20: [ 2, 18 
],
            22: [ 2, 18 ],
            23: [ 2, 18 ],
            24: [ 2, 18 ]
        }, {
            18: [ 1, 61 ]
        }, {
            18: [ 1, 62 ]
        }, {
            18: [ 2, 21 ]
        }, {
            18: [ 2, 26 ],
            27: [ 2, 26 ],
            29: [ 2, 26 ],
            30: [ 2, 26 ],
            31: [ 2, 26 ],
            34: [ 2, 26 ]
        }, {
            18: [ 2, 34 ],
            34: [ 2, 34 ]
        }, {
            35: [ 1, 59 ]
        }, {
            21: 63,
            27: [ 1, 67 ],
            29: [ 1, 64 ],
            30: [ 1, 65 ],
            31: [ 1, 66 ],
            34: [ 1, 26 ],
            36: 25
        }, {
            18: [ 2, 42 ],
            27: [ 2, 42 ],
            29: [ 2, 42 ],
            30: [ 2, 42 ],
            31: [ 2, 42 ],
            34: [ 2, 42 ],
            37: [ 2, 42 ]
        }, {
            5: [ 2, 19 ],
            14: [ 2, 19 ],
            15: [ 2, 19 ],
            16: [ 2, 19 ],
            19
: [ 2, 19 ],
            20: [ 2, 19 ],
            22: [ 2, 19 ],
            23: [ 2, 19 ],
            24: [ 2, 19 ]
        }, {
            5: [ 2, 15 ],
            14: [ 2, 15 ],
            15: [ 2, 15 ],
            16: [ 2, 15 ],
            19: [ 2, 15 ],
            20: [ 2, 15 ],
            22: [ 2, 15 ],
            23: [ 2, 15 ],
            24: [ 2, 15 ]
        }, {
            18: [ 2, 36 ],
            34: [ 2, 36 ]
        }, {
            18: [ 2, 37 ],
            34: [ 2, 37 ]
        }, {
            18: [ 2, 38 ],
            34: [ 2, 38 ]
        }, {
            18: [ 2, 39 ],
            34: [ 2, 39 ]
        }, {
            18: [ 2, 40 ],
            34: [ 2, 40 ]
        } ],
        defaultActions: {
            16: [ 2, 1 ],
            24: [ 2, 25 ],
            38: [ 2, 23 ],
            55: [ 2, 21 ]
        },
        parseError: function(t, n) {
            throw new Error(t);
        },
        parse: function(t) {
            function v(e) {
                
r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e;
            }
            function m() {
                var e;
                return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e;
            }
            var n = this, r = [ 0 ], i = [ null ], s = [], o = this.table, u = "", a = 0, f = 0, l = 0, c = 2, h = 1;
            this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
            var p = this.lexer.yylloc;
            s.push(p);
            var d = this.lexer.options && this.lexer.options.ranges;
            typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
            var g, y, b, w, E, S, x = {}, T, N, C, k;
            for (;;) {
                b = r[r.length - 1];
                if (this.defaultActions[b]) w = this.defaultActions[b]; else {
                    if (g === 
null || typeof g == "undefined") g = m();
                    w = o[b] && o[b][g];
                }
                if (typeof w == "undefined" || !w.length || !w[0]) {
                    var L = "";
                    if (!l) {
                        k = [];
                        for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                        this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
                            text: this.lexer.match,
                            token: this.terminals_[g] || g,
                            line: this.lexer.yylineno,
                            loc: p,
                            expected: k
                        });
                    
}
                }
                if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
                switch (w[0]) {
                  case 1:
                    r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                    break;
                  case 2:
                    N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
                        first_line: s[s.length - (N || 1)].first_line,
                        last_line: s[s.length - 1].last_line,
                        first_column: s[s.length - (N || 1)].first_column,
                        last_column: s[s.length - 1].last_column
                    }, d && (x._$.range = [ s[s.length - (N || 1)].range[0], s[s.length - 1].range[1] ]), S = this.performAction
.call(x, u, f, a, this.yy, w[1], i, s);
                    if (typeof S != "undefined") return S;
                    N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                    break;
                  case 3:
                    return !0;
                }
            }
            return !0;
        }
    }, t = function() {
        var e = {
            EOF: 1,
            parseError: function(t, n) {
                if (!this.yy.parser) throw new Error(t);
                this.yy.parser.parseError(t, n);
            },
            setInput: function(e) {
                return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], this.yylloc = {
                    first_line: 1,
                    first_column
: 0,
                    last_line: 1,
                    last_column: 0
                }, this.options.ranges && (this.yylloc.range = [ 0, 0 ]), this.offset = 0, this;
            },
            input: function() {
                var e = this._input[0];
                this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                var t = e.match(/(?:\r\n?|\n).*/g);
                return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
            },
            unput: function(e) {
                var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
                this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                var r = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr
(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                var i = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                }, this.options.ranges && (this.yylloc.range = [ i[0], i[0] + this.yyleng - t ]), this;
            },
            more: function() {
                return this._more = !0, this;
            },
            less: function(e) {
                this.unput(this.match.slice(e));
            },
            pastInput: function() {
                var e = this.matched.substr(0, this.matched.length - this.match.length);
                return (e.length > 20 ? "..." : "") + e.substr(-20).replace
(/\n/g, "");
            },
            upcomingInput: function() {
                var e = this.match;
                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function() {
                var e = this.pastInput(), t = (new Array(e.length + 1)).join("-");
                return e + this.upcomingInput() + "\n" + t + "^";
            },
            next: function() {
                if (this.done) return this.EOF;
                this._input || (this.done = !0);
                var e, t, n, r, i, s;
                this._more || (this.yytext = "", this.match = "");
                var o = this._currentRules();
                for (var u = 0; u < o.length; u++) {
                    n = this._input.match(this.rules[o[u]]);
                    if (n && (!t || n[0].length > t[0].length)) {
                        t = n, r = u;
                        if (!
this.options.flex) break;
                    }
                }
                if (t) {
                    s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                    }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [ this.offset, this.offset += this.yyleng ]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                    if (e) return e
;
                    return;
                }
                return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function() {
                var t = this.next();
                return typeof t != "undefined" ? t : this.lex();
            },
            begin: function(t) {
                this.conditionStack.push(t);
            },
            popState: function() {
                return this.conditionStack.pop();
            },
            _currentRules: function() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function(
t) {
                this.begin(t);
            }
        };
        return e.options = {}, e.performAction = function(t, n, r, i) {
            var s = i;
            switch (r) {
              case 0:
                n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
                if (n.yytext) return 14;
                break;
              case 1:
                return 14;
              case 2:
                return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1)), 14;
              case 3:
                return 24;
              case 4:
                return 16;
              case 5:
                return 20;
              case 6:
                return 19;
              case 7:
                return 19;
              case 8:
                return 23;
              case 9:
                return 23;
              
case 10:
                return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
              case 11:
                return 22;
              case 12:
                return 35;
              case 13:
                return 34;
              case 14:
                return 34;
              case 15:
                return 37;
              case 16:
                break;
              case 17:
                return this.popState(), 18;
              case 18:
                return this.popState(), 18;
              case 19:
                return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
              case 20:
                return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
              case 21:
                return n.yytext = n.yytext.substr(1), 27;
              case 22:
                return 31;
              case 23:
                return 31;
              case 24:
                return 30;
              
case 25:
                return 34;
              case 26:
                return n.yytext = n.yytext.substr(1, n.yyleng - 2), 34;
              case 27:
                return "INVALID";
              case 28:
                return 5;
            }
        }, e.rules = [ /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/ ], e.conditions = {
            mu: {
                rules: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 ],
                inclusive: !1
            
},
            emu: {
                rules: [ 2 ],
                inclusive: !1
            },
            INITIAL: {
                rules: [ 0, 1, 28 ],
                inclusive: !0
            }
        }, e;
    }();
    return e.lexer = t, n.prototype = e, e.Parser = n, new n;
}();

typeof require != "undefined" && typeof exports != "undefined" && (exports.parser = e, exports.Parser = e.Parser, exports.parse = function() {
    return e.parse.apply(e, arguments);
}, exports.main = function(t) {
    if (!t[1]) throw new Error("Usage: " + t[0] + " FILE");
    var n, r;
    return typeof process != "undefined" ? n = require("fs").readFileSync(require("path").resolve(t[1]), "utf8") : n = require("file").path(require("file").cwd()).join(t[1]).read({
        charset: "utf-8"
    }), exports.parser.parse(n);
}, typeof module != "undefined" && require.main === module && exports.main(typeof process != "undefined" ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = e, Handlebars
.parse = function(e) {
    return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e);
}, Handlebars.print = function(e) {
    return (new Handlebars.PrintVisitor).accept(e);
}, Handlebars.logger = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,
    log: function(e, t) {}
}, Handlebars.log = function(e, t) {
    Handlebars.logger.log(e, t);
}, function() {
    Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
        this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t));
    }, Handlebars.AST.MustacheNode = function(e, t, n) {
        this.type = "mustache", this.escaped = !n, this.hash = t;
        var r = this.id = e[0], i = this.params = e.slice(1), s = this.eligibleHelper = r.isSimple;
        this.isHelper = s && (i.length || t);
    }, Handlebars.AST.PartialNode = function(e, t) {
        this.type = "partial", this.id = e, this.context = t;
    };
    var e = function(e, t) {
        
if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original);
    };
    Handlebars.AST.BlockNode = function(t, n, r, i) {
        e(t.id, i), this.type = "block", this.mustache = t, this.program = n, this.inverse = r, this.inverse && !this.program && (this.isInverse = !0);
    }, Handlebars.AST.ContentNode = function(e) {
        this.type = "content", this.string = e;
    }, Handlebars.AST.HashNode = function(e) {
        this.type = "hash", this.pairs = e;
    }, Handlebars.AST.IdNode = function(e) {
        this.type = "ID", this.original = e.join(".");
        var t = [], n = 0;
        for (var r = 0, i = e.length; r < i; r++) {
            var s = e[r];
            s === ".." ? n++ : s === "." || s === "this" ? this.isScoped = !0 : t.push(s);
        }
        this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = e.length === 1 && !this.isScoped && n === 0;
    }, Handlebars.AST.DataNode = function(e) {
        this
.type = "DATA", this.id = e;
    }, Handlebars.AST.StringNode = function(e) {
        this.type = "STRING", this.string = e;
    }, Handlebars.AST.IntegerNode = function(e) {
        this.type = "INTEGER", this.integer = e;
    }, Handlebars.AST.BooleanNode = function(e) {
        this.type = "BOOLEAN", this.bool = e;
    }, Handlebars.AST.CommentNode = function(e) {
        this.type = "comment", this.comment = e;
    };
}(), Handlebars.Exception = function(e) {
    var t = Error.prototype.constructor.apply(this, arguments);
    for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
    this.message = t.message;
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
    this.string = e;
}, Handlebars.SafeString.prototype.toString = function() {
    return this.string.toString();
}, function() {
    var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, t = /[&<>"'`]/g
, n = /[&<>"'`]/, r = function(t) {
        return e[t] || "&amp;";
    };
    Handlebars.Utils = {
        escapeExpression: function(e) {
            return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e;
        },
        isEmpty: function(e) {
            return typeof e == "undefined" ? !0 : e === null ? !0 : e === !1 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1;
        }
    };
}(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {}, function(e, t) {
    e.prototype = {
        compiler: e,
        disassemble: function() {
            var e = this.opcodes, t, n = [], r, i;
            for (var s = 0, o = e.length; s < o; s++) {
                t = e[s];
                if (t.opcode === "DECLARE") n.push("DECLARE " + t.name + "=" + t.value); else {
                    r = [];
                    for (var u = 0; u < t.args.length; u++) i = 
t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
                    n.push(t.opcode + " " + r.join(" "));
                }
            }
            return n.join("\n");
        },
        guid: 0,
        compile: function(e, t) {
            this.children = [], this.depths = {
                list: []
            }, this.options = t;
            var n = this.options.knownHelpers;
            this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            };
            if (n) for (var r in n) this.options.knownHelpers[r] = n[r];
            return this.program(e);
        },
        accept: function(e) {
            return this[e.type](e);
        },
        program: function(e) {
            var t = e.statements, n;
            this.opcodes = [];
            for (
var r = 0, i = t.length; r < i; r++) n = t[r], this[n.type](n);
            return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function(e, t) {
                return e - t;
            }), this;
        },
        compileProgram: function(e) {
            var t = (new this.compiler).compile(e, this.options), n = this.guid++, r;
            this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
            for (var i = 0, s = t.depths.list.length; i < s; i++) {
                r = t.depths.list[i];
                if (r < 2) continue;
                this.addDepth(r - 1);
            }
            return n;
        },
        block: function(e) {
            var t = e.mustache, n = e.program, r = e.inverse;
            n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
            var i = this.classifyMustache(t);
            i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram"
, n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("ambiguousBlockValue")), this.opcode("append");
        },
        hash: function(e) {
            var t = e.pairs, n, r;
            this.opcode("push", "{}");
            for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.accept(r), this.opcode("assignToHash", n[0]);
        },
        partial: function(e) {
            var t = e.id;
            this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append");
        },
        content: function(e) {
            this.opcode("appendContent", e.string);
        },
        mustache: function(e) {
            var t = this.options, n = this.classifyMustache(e);
            n === "simple" ? this.simpleMustache
(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
        },
        ambiguousMustache: function(e, t, n) {
            var r = e.id, i = r.parts[0];
            this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i);
        },
        simpleMustache: function(e, t, n) {
            var r = e.id;
            r.type === "DATA" ? this.DATA(r) : r.parts.length ? this.ID(r) : (this.addDepth(r.depth), this.opcode("getContext", r.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda");
        },
        helperMustache: function(e, t, n) {
            var r = this.setupFullMustacheParams(e, t, n), i = e.id.parts[0];
            if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i); else {
                if (this.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + 
i);
                this.opcode("invokeHelper", r.length, i);
            }
        },
        ID: function(e) {
            this.addDepth(e.depth), this.opcode("getContext", e.depth);
            var t = e.parts[0];
            t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
            for (var n = 1, r = e.parts.length; n < r; n++) this.opcode("lookup", e.parts[n]);
        },
        DATA: function(e) {
            this.options.data = !0, this.opcode("lookupData", e.id);
        },
        STRING: function(e) {
            this.opcode("pushString", e.string);
        },
        INTEGER: function(e) {
            this.opcode("pushLiteral", e.integer);
        },
        BOOLEAN: function(e) {
            this.opcode("pushLiteral", e.bool);
        },
        comment: function() {},
        opcode: function(e) {
            this.opcodes.push({
                opcode: e,
                args: [].slice.call(arguments, 1)
            });
        },
        declare
: function(e, t) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: e,
                value: t
            });
        },
        addDepth: function(e) {
            if (isNaN(e)) throw new Error("EWOT");
            if (e === 0) return;
            this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e));
        },
        classifyMustache: function(e) {
            var t = e.isHelper, n = e.eligibleHelper, r = this.options;
            if (n && !t) {
                var i = e.id.parts[0];
                r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1);
            }
            return t ? "helper" : n ? "ambiguous" : "simple";
        },
        pushParams: function(e) {
            var t = e.length, n;
            while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.string)) : this[n.type](n);
        },
        setupMustacheParams
: function(e) {
            var t = e.params;
            return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), t;
        },
        setupFullMustacheParams: function(e, t, n) {
            var r = e.params;
            return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), r;
        }
    };
    var n = function(e) {
        this.value = e;
    };
    t.prototype = {
        nameLookup: function(e, n, r) {
            return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']";
        },
        appendToBuffer: function(e) {
            return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";";
        },
        initializeBuffer: function() {
            return this.quotedString("");
        },
        namespace: "Handlebars",
        compile: function(e, t, n, r) {
            
this.environment = e, this.options = t || {}, Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                programs: [],
                aliases: {}
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                list: []
            }, this.compileStack = [], this.compileChildren(e, t);
            var i = e.opcodes, s;
            this.i = 0;
            for (o = i.length; this.i < o; this.i++) s = i[this.i], s.opcode === "DECLARE" ? this[s.name] = s.value : this[s.opcode].apply(this, s.args);
            return this.createFunctionContext(r);
        },
        nextOpcode: function() {
            var e = this.environment.opcodes, t = e[this.i + 1];
            return e[this.i + 1];
        },
        eat: function(e) {
            this.i = this.i + 1;
        },
        preamble: function() {
            var e = [];
            
if (!this.isChild) {
                var t = this.namespace, n = "helpers = helpers || " + t + ".helpers;";
                this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), this.options.data && (n += " data = data || {};"), e.push(n);
            } else e.push("");
            this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e;
        },
        createFunctionContext: function(e) {
            var t = this.stackVars.concat(this.registers.list);
            t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
            if (!this.isChild) {
                var n = [];
                for (var r in this.context.aliases) this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r];
            }
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context
.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
            var i = this.isChild ? [ "depth0", "data" ] : [ "Handlebars", "depth0", "helpers", "partials", "data" ];
            for (var s = 0, o = this.environment.depths.list.length; s < o; s++) i.push("depth" + this.environment.depths.list[s]);
            if (e) return i.push(this.source.join("\n  ")), Function.apply(this, i);
            var u = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
            return Handlebars.log(Handlebars.logger.DEBUG, u + "\n\n"), u;
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var e = [ "depth0" ];
            this.setupParams(0, e), this.replaceStack(function(t) {
                return e.splice(1, 0, t), t + " = blockHelperMissing.call(" + e.join(", ") + ")";
            });
        },
        ambiguousBlockValue
: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var e = [ "depth0" ];
            this.setupParams(0, e);
            var t = this.topStack();
            e.splice(1, 0, t), this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }");
        },
        appendContent: function(e) {
            this.source.push(this.appendToBuffer(this.quotedString(e)));
        },
        append: function() {
            var e = this.popStack();
            this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }");
        },
        appendEscaped: function() {
            var e = this.nextOpcode(), t = "";
            this.context.aliases.escapeExpression = "this.escapeExpression", e && e.opcode === "appendContent" && (t = " + " + this.quotedString(e.args[0]), this.eat
(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t));
        },
        getContext: function(e) {
            this.lastContext !== e && (this.lastContext = e);
        },
        lookupOnContext: function(e) {
            this.pushStack(this.nameLookup("depth" + this.lastContext, e, "context"));
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext);
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"', this.replaceStack(function(e) {
                return "typeof " + e + " === functionType ? " + e + "() : " + e;
            });
        },
        lookup: function(e) {
            this.replaceStack(function(t) {
                return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context");
            });
        },
        lookupData: function(e) {
            this.pushStack(this.nameLookup("data", 
e, "data"));
        },
        pushStringParam: function(e) {
            this.pushStackLiteral("depth" + this.lastContext), this.pushString(e);
        },
        pushString: function(e) {
            this.pushStackLiteral(this.quotedString(e));
        },
        push: function(e) {
            this.pushStack(e);
        },
        pushLiteral: function(e) {
            this.pushStackLiteral(e);
        },
        pushProgram: function(e) {
            e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null);
        },
        invokeHelper: function(e, t) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var n = this.lastHelper = this.setupHelper(e, t);
            this.register("foundHelper", n.name), this.pushStack("foundHelper ? foundHelper.call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")");
        },
        invokeKnownHelper: function(e, t) {
            var n = this.setupHelper
(e, t);
            this.pushStack(n.name + ".call(" + n.callParams + ")");
        },
        invokeAmbiguous: function(e) {
            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
            var t = this.setupHelper(0, e), n = this.lastHelper = this.nameLookup("helpers", e, "helper");
            this.register("foundHelper", n);
            var r = this.nameLookup("depth" + this.lastContext, e, "context"), i = this.nextStack();
            this.source.push("if (foundHelper) { " + i + " = foundHelper.call(" + t.callParams + "); }"), this.source.push("else { " + i + " = " + r + "; " + i + " = typeof " + i + " === functionType ? " + i + "() : " + i + "; }");
        },
        invokePartial: function(e) {
            var t = [ this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials" ];
            this.options.data && t.push("data"), this.context.aliases.self = "this", this.pushStack("self.invokePartial(" + t.join
(", ") + ");");
        },
        assignToHash: function(e) {
            var t = this.popStack(), n = this.topStack();
            this.source.push(n + "['" + e + "'] = " + t + ";");
        },
        compiler: t,
        compileChildren: function(e, t) {
            var n = e.children, r, i;
            for (var s = 0, o = n.length; s < o; s++) {
                r = n[s], i = new this.compiler, this.context.programs.push("");
                var u = this.context.programs.length;
                r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context);
            }
        },
        programExpression: function(e) {
            this.context.aliases.self = "this";
            if (e == null) return "self.noop";
            var t = this.environment.children[e], n = t.depths.list, r, i = [ t.index, t.name, "data" ];
            for (var s = 0, o = n.length; s < o; s++) r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
            return n
.length === 0 ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")");
        },
        register: function(e, t) {
            this.useRegister(e), this.source.push(e + " = " + t + ";");
        },
        useRegister: function(e) {
            this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e));
        },
        pushStackLiteral: function(e) {
            return this.compileStack.push(new n(e)), e;
        },
        pushStack: function(e) {
            return this.source.push(this.incrStack() + " = " + e + ";"), this.compileStack.push("stack" + this.stackSlot), "stack" + this.stackSlot;
        },
        replaceStack: function(e) {
            var t = e.call(this, this.topStack());
            return this.source.push(this.topStack() + " = " + t + ";"), "stack" + this.stackSlot;
        },
        nextStack: function(e) {
            var t = this.incrStack();
            return this.compileStack.push("stack" + this
.stackSlot), t;
        },
        incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot;
        },
        popStack: function() {
            var e = this.compileStack.pop();
            return e instanceof n ? e.value : (this.stackSlot--, e);
        },
        topStack: function() {
            var e = this.compileStack[this.compileStack.length - 1];
            return e instanceof n ? e.value : e;
        },
        quotedString: function(e) {
            return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
        },
        setupHelper: function(e, t) {
            var n = [];
            this.setupParams(e, n);
            var r = this.nameLookup("helpers", t, "helper");
            return {
                params: n,
                name: r,
                callParams: [ "depth0" ].concat(n).join(", "),
                
helperMissingParams: [ "depth0", this.quotedString(t) ].concat(n).join(", ")
            };
        },
        setupParams: function(e, t) {
            var n = [], r = [], i, s, o;
            n.push("hash:" + this.popStack()), s = this.popStack(), o = this.popStack();
            if (o || s) o || (this.context.aliases.self = "this", o = "self.noop"), s || (this.context.aliases.self = "this", s = "self.noop"), n.push("inverse:" + s), n.push("fn:" + o);
            for (var u = 0; u < e; u++) i = this.popStack(), t.push(i), this.options.stringParams && r.push(this.popStack());
            return this.options.stringParams && n.push("contexts:[" + r.join(",") + "]"), this.options.data && n.push("data:data"), t.push("{" + n.join(",") + "}"), t.join(", ");
        }
    };
    var r = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield"
.split(" "), i = t.RESERVED_WORDS = {};
    for (var s = 0, o = r.length; s < o; s++) i[r[s]] = !0;
    t.isValidJavaScriptVariableName = function(e) {
        return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1;
    };
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
    t = t || {};
    var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t);
    return (new Handlebars.JavaScriptCompiler).compile(r, t);
}, Handlebars.compile = function(e, t) {
    function r() {
        var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t), i = (new Handlebars.JavaScriptCompiler).compile(r, t, undefined, !0);
        return Handlebars.template(i);
    }
    t = t || {};
    var n;
    return function(e, t) {
        return n || (n = r()), n.call(this, e, t);
    };
}, Handlebars.VM = {
    template: function(e) {
        var t = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            
invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function(e, t, n) {
                var r = this.programs[e];
                return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r);
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop
        };
        return function(n, r) {
            return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data);
        };
    },
    programWithDepth: function(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function(n, i) {
            return i = i || {}, e.apply(this, [ n, i.data || t ].concat(r));
        };
    },
    program: function(e, t) {
        return function(n, r) {
            return r = r || {}, e(n, r.data || t);
        };
    },
    noop: function() {
        return "";
    },
    invokePartial: function(e, t, n, r, i, s) {
        var o = 
{
            helpers: r,
            partials: i,
            data: s
        };
        if (e === undefined) throw new Handlebars.Exception("The partial " + t + " could not be found");
        if (e instanceof Function) return e(n, o);
        if (!Handlebars.compile) throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
        return i[t] = Handlebars.compile(e, {
            data: s !== undefined
        }), i[t](n, o);
    }
}, Handlebars.template = Handlebars.VM.template, define("handlebars", function(e) {
    return function() {
        var t, n;
        return t || e.Handlebars;
    };
}(this)), this.JST = this.JST || {}, Handlebars.registerPartial("canvas", Handlebars.template(function(e, t, n, r, i) {
    n = n || e.helpers;
    var s = "", o, u, a = "function", f = this.escapeExpression;
    return s += '<canvas width="', u = n.width, u ? o = u.call(t, {
        hash: {}
    }) : (o = t.width, o = typeof o === a ? o(
) : o), s += f(o) + '" height="', u = n.height, u ? o = u.call(t, {
        hash: {}
    }) : (o = t.height, o = typeof o === a ? o() : o), s += f(o) + '"></canvas>\n', s;
})), Handlebars.registerPartial("nav", Handlebars.template(function(e, t, n, r, i) {
    return n = n || e.helpers, '<nav>\n  <div class="platform piccadilly">\n    <div class="line"></div>\n    <h2><span class="arrow"></span>Piccadilly line</h2>\n  </div>\n  <div class="platform jubilee">\n    <div class="line"></div>\n    <h2>Jubilee line<span class="arrow"></span></h2>\n  </div>\n</nav>\n';
})), this.JST.start = Handlebars.template(function(e, t, n, r, i) {
    n = n || e.helpers, r = r || e.partials;
    var s = "", o, u = this;
    s += '<div class="front">\n  <div class="container">\n    <header class="page-header">\n      <h1>Green&nbsp;Park Station</h1>\n    </header>\n    ', o = t, o = u.invokePartial(r.nav, "nav", o, n, r);
    if (o || o === 0) s += o;
    s += '\n  </div>\n  <a href="https://github.com/grancalavera/green-park">\n    <img src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub">\n  </a>\n</div>\n<div class="back">\n  '
, o = t, o = u.invokePartial(r.canvas, "canvas", o, n, r);
    if (o || o === 0) s += o;
    s += "\n  ", o = t, o = u.invokePartial(r.canvas, "canvas", o, n, r);
    if (o || o === 0) s += o;
    return s += "\n</div>\n", s;
}), this.JST.tunnel = Handlebars.template(function(e, t, n, r, i) {
    n = n || e.helpers, r = r || e.partials;
    var s = "", o, u = this;
    s += '<div class="front">\n  <div class="container">\n    ', o = t, o = u.invokePartial(r.nav, "nav", o, n, r);
    if (o || o === 0) s += o;
    s += '\n  </div>\n</div>\n<div class="back">\n  ', o = t, o = u.invokePartial(r.canvas, "canvas", o, n, r);
    if (o || o === 0) s += o;
    return s += "\n</div>\n", s;
}), define("templates", [ "handlebars" ], function(e) {
    return function() {
        var t, n;
        return t || e.JST;
    };
}(this)), define("app/views/start", [ "require", "jquery", "underscore", "app/views/section", "templates" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/views/section"
);
    return r.extend({
        template: e("templates").start,
        viewId: "app/views/start",
        className: "start",
        getRenderingContextAdditions: function() {
            var e = this.dimensions.width < 1024 ? 90 : 200, t = {
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
}), define("app/views/tunnel", [ "require", "jquery", "underscore", "app/views/section", "templates" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/views/section");
    return r.extend({
        template: e("templates").tunnel,
        viewId: "app/views/tunnel",
        className: "tunnel",
        getRenderingContextAdditions: function() {
            var e = {};
            return e;
        },
        draw: function(
) {
            this.drawCanvas(this.$("canvas")[0], this.renderingContext.tiles[0]);
        }
    });
}), define("app/state/sections", [ "require", "jquery", "underscore", "app/views/start", "app/views/tunnel" ], function(e) {
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
}), define("app/state/walk", [ "require", "jquery", "underscore", "app/state/sections" ], function(e) {
    var t = e("jquery"), n = e("underscore"), r = e("app/state/sections"), i = {
        init: function(e, t) {
            return this.scrollPos = e, this.sections = t, this.positions = this.sections.positions(e), this.next = this.sections.next(e), this.prev = this.sections.prev(e), this.piccadilly = this.sections.getSection(this.positions[0]), this.center = this.sections.getSection(this.positions[1]), this.jubilee = this.sections.getSection(this.positions
[2]), this;
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
        return s(e.next, e.sections);
    }, u = function(e) {
        return s(e.prev, e.sections);
    };
    return {
        start: function(e) {
            return s(0, r.create(e));
        }
    };
}), define("app/greenpark", [ "require", "jquery", "backbone", "modernizr", "underscore", "app/state/walk" ], function(e) {
    var t = e("jquery"), n = e("backbone"), r = e("modernizr"), i = e("underscore"), s = e("app/state/walk"), o = 5, u = [ "transitionend", "webkitTransitionEnd" ].join(" "), a = r.touch, f = t(window), l = t(document), c = "#green-park"
, h = n.View.extend({
        el: document.body,
        events: {
            "click .platform.piccadilly": "piccadilly_clickHandler",
            "click .platform.jubilee": "jubilee_clickHandler"
        },
        initialize: function() {
            this.walk = s.start(o), this.walk.center.$el.addClass("center"), this.appendAll(), this.updateLayout();
            var e = i.bind(i.debounce(this.updateLayout, 100), this);
            a ? f.on("orientationchange", e) : f.on("resize", e);
        },
        afterTransition: function(e) {
            var t = this.walk.center.$el, n = i.bind(function() {
                this.walk = e.call(this, this.walk), this.updateLayout(), t.off(u);
            }, this);
            t.on(u, n);
        },
        append: function(e) {
            var t = e.render().el;
            this.$(c).prepend(t);
        },
        appendAll: function() {
            this.append(this.walk.piccadilly), this.append(this.walk.center), this.append(this.walk.jubilee)
;
        },
        updateLayout: function() {
            this.walk.piccadilly.$el.removeClass("center"), this.walk.center.$el.addClass("center"), this.walk.jubilee.$el.removeClass("center"), this.walk.piccadilly.toPiccadilly(), this.walk.center.toCenter(), this.walk.jubilee.toJubilee(), this.walk.piccadilly.render(), this.walk.center.render(), this.walk.jubilee.render();
        },
        toPiccadilly: function(e) {
            var t = e.toPiccadilly();
            return this.append(t.piccadilly), e.jubilee.remove(), t;
        },
        toJubilee: function(e) {
            var t = e.toJubilee();
            return this.append(t.jubilee), e.piccadilly.remove(), t;
        },
        piccadilly_clickHandler: function(e) {
            this.afterTransition(this.toPiccadilly), this.walk.center.toJubilee(!0), this.walk.piccadilly.toCenter(!0);
        },
        jubilee_clickHandler: function(e) {
            this.afterTransition(this.toJubilee), this.walk.center.toPiccadilly(!0), this
.walk.jubilee.toCenter(!0);
        }
    }), p = new h({});
});;