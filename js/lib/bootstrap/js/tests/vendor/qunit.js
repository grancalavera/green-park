/**
 * QUnit - A JavaScript Unit Testing Framework
 *
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2012 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * or GPL (GPL-LICENSE.txt) licenses.
 */

/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */

/*
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan "sprite"
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 * QUnit.diff("the quick brown fox jumped over", "the quick fox jumps over") == "the  quick <del>brown </del> fox <del>jumped </del><ins>jumps </ins> over"
 */

(function(e) {
    function o() {
        s.autorun = !0, s.currentModule && i.moduleDone({
            name: s.currentModule,
            failed: s.moduleStats.bad,
            passed: s.moduleStats.all - s.moduleStats.bad,
            total: s.moduleStats.all
        });
        var e = y("qunit-banner"), t = y("qunit-tests"), n = +(new Date) - s.started, r = s.stats.all - s.stats.bad, o = [ "Tests completed in ", n, " milliseconds.<br/>", '<span class="passed">', r, '</span> tests of <span class="total">', s.stats.all, '</span> passed, <span class="failed">', s.stats.bad, "</span> failed." ].join("");
        e && (e.className = s.stats.bad ? "qunit-fail" : "qunit-pass"), t && (y("qunit-testresult").innerHTML = o), s.altertitle && typeof document != "undefined" && document.title && (document.title = [ s.stats.bad ? "\u2716" : "\u2714", document.title.replace(/^[\u2714\u2716] /i, "") ].join(" ")), i.done({
            failed: s.stats.bad,
            passed: r,
            total: s.stats
.all,
            runtime: n
        });
    }
    function u(e) {
        var t = s.filter, n = !1;
        if (!t) return !0;
        var r = t.charAt(0) === "!";
        return r && (t = t.slice(1)), e.indexOf(t) !== -1 ? !r : (r && (n = !0), n);
    }
    function a() {
        try {
            throw new Error;
        } catch (e) {
            if (e.stacktrace) return e.stacktrace.split("\n")[6];
            if (e.stack) return e.stack.split("\n")[4];
            e.sourceURL;
        }
    }
    function f(e) {
        return e ? (e += "", e.replace(/[\&"<>\\]/g, function(e) {
            switch (e) {
              case "&":
                return "&amp;";
              case "\\":
                return "\\\\";
              case '"':
                return '"';
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              default:
                return e;
            }
        })) : "";
    }
    function l(e) {
        
s.queue.push(e), s.autorun && !s.blocking && c();
    }
    function c() {
        var t = (new Date).getTime();
        while (s.queue.length && !s.blocking) {
            if (!(s.updateRate <= 0 || (new Date).getTime() - t < s.updateRate)) {
                e.setTimeout(c, 13);
                break;
            }
            s.queue.shift()();
        }
        !s.blocking && !s.queue.length && o();
    }
    function h() {
        s.pollution = [];
        if (s.noglobals) for (var t in e) s.pollution.push(t);
    }
    function p(e) {
        var t = s.pollution;
        h();
        var n = d(s.pollution, t);
        n.length > 0 && ok(!1, "Introduced global variable(s): " + n.join(", "));
        var r = d(t, s.pollution);
        r.length > 0 && ok(!1, "Deleted global variable(s): " + r.join(", "));
    }
    function d(e, t) {
        var n = e.slice();
        for (var r = 0; r < n.length; r++) for (var i = 0; i < t.length; i++) if (n[r] === t[i]) {
            n.splice(r, 1), 
r--;
            break;
        }
        return n;
    }
    function v(t, n, r) {
        typeof console != "undefined" && console.error && console.warn ? (console.error(t), console.error(n), console.warn(r.toString())) : e.opera && opera.postError && opera.postError(t, n, r.toString);
    }
    function m(e, t) {
        for (var n in t) t[n] === undefined ? delete e[n] : e[n] = t[n];
        return e;
    }
    function g(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : n();
    }
    function y(e) {
        return typeof document != "undefined" && !!document && !!document.getElementById && document.getElementById(e);
    }
    function b(e) {
        var t = "", n;
        for (var r = 0; e[r]; r++) n = e[r], n.nodeType === 3 || n.nodeType === 4 ? t += n.nodeValue : n.nodeType !== 8 && (t += b(n.childNodes));
        return t;
    }
    function w(e, t) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0
, r = t.length; n < r; n++) if (t[n] === e) return n;
        return -1;
    }
    var t = {
        setTimeout: typeof e.setTimeout != "undefined",
        sessionStorage: function() {
            try {
                return !!sessionStorage.getItem;
            } catch (e) {
                return !1;
            }
        }()
    }, n = 0, r = function(e, t, n, r, i, s) {
        this.name = e, this.testName = t, this.expected = n, this.testEnvironmentArg = r, this.async = i, this.callback = s, this.assertions = [];
    };
    r.prototype = {
        init: function() {
            var e = y("qunit-tests");
            if (e) {
                var t = document.createElement("strong");
                t.innerHTML = "Running " + this.name;
                var r = document.createElement("li");
                r.appendChild(t), r.className = "running", r.id = this.id = "test-output" + n++, e.appendChild(r);
            }
        },
        setup: function() {
            this.module != s
.previousModule && (s.previousModule && i.moduleDone({
                name: s.previousModule,
                failed: s.moduleStats.bad,
                passed: s.moduleStats.all - s.moduleStats.bad,
                total: s.moduleStats.all
            }), s.previousModule = this.module, s.moduleStats = {
                all: 0,
                bad: 0
            }, i.moduleStart({
                name: this.module
            })), s.current = this, this.testEnvironment = m({
                setup: function() {},
                teardown: function() {}
            }, this.moduleTestEnvironment), this.testEnvironmentArg && m(this.testEnvironment, this.testEnvironmentArg), i.testStart({
                name: this.testName
            }), i.current_testEnvironment = this.testEnvironment;
            try {
                s.pollution || h(), this.testEnvironment.setup.call(this.testEnvironment);
            } catch (e) {
                i.ok(!1, "Setup failed on " + this.testName + ": " + 
e.message);
            }
        },
        run: function() {
            this.async && i.stop();
            if (s.notrycatch) {
                this.callback.call(this.testEnvironment);
                return;
            }
            try {
                this.callback.call(this.testEnvironment);
            } catch (e) {
                v("Test " + this.testName + " died, exception and test follows", e, this.callback), i.ok(!1, "Died on test #" + (this.assertions.length + 1) + ": " + e.message + " - " + i.jsDump.parse(e)), h(), s.blocking && start();
            }
        },
        teardown: function() {
            try {
                this.testEnvironment.teardown.call(this.testEnvironment), p();
            } catch (e) {
                i.ok(!1, "Teardown failed on " + this.testName + ": " + e.message);
            }
        },
        finish: function() {
            this.expected && this.expected != this.assertions.length && i.ok(!1, "Expected " + this.expected + " assertions, but " + 
this.assertions.length + " were run");
            var n = 0, r = 0, o = y("qunit-tests");
            s.stats.all += this.assertions.length, s.moduleStats.all += this.assertions.length;
            if (o) {
                var u = document.createElement("ol");
                for (var a = 0; a < this.assertions.length; a++) {
                    var f = this.assertions[a], l = document.createElement("li");
                    l.className = f.result ? "pass" : "fail", l.innerHTML = f.message || (f.result ? "okay" : "failed"), u.appendChild(l), f.result ? n++ : (r++, s.stats.bad++, s.moduleStats.bad++);
                }
                i.config.reorder && t.sessionStorage && (r ? sessionStorage.setItem("qunit-" + this.module + "-" + this.testName, r) : sessionStorage.removeItem("qunit-" + this.module + "-" + this.testName)), r == 0 && (u.style.display = "none");
                var c = document.createElement("strong");
                c.innerHTML = this.name + " <b class='counts'>(<b class='failed'>" + 
r + "</b>, <b class='passed'>" + n + "</b>, " + this.assertions.length + ")</b>";
                var h = document.createElement("a");
                h.innerHTML = "Rerun", h.href = i.url({
                    filter: b([ c ]).replace(/\([^)]+\)$/, "").replace(/(^\s*|\s*$)/g, "")
                }), g(c, "click", function() {
                    var e = c.nextSibling.nextSibling, t = e.style.display;
                    e.style.display = t === "none" ? "block" : "none";
                }), g(c, "dblclick", function(t) {
                    var n = t && t.target ? t.target : e.event.srcElement;
                    if (n.nodeName.toLowerCase() == "span" || n.nodeName.toLowerCase() == "b") n = n.parentNode;
                    e.location && n.nodeName.toLowerCase() === "strong" && (e.location = i.url({
                        filter: b([ n ]).replace(/\([^)]+\)$/, "").replace(/(^\s*|\s*$)/g, "")
                    }));
                });
                var l = y(this.id);
                
l.className = r ? "fail" : "pass", l.removeChild(l.firstChild), l.appendChild(c), l.appendChild(h), l.appendChild(u);
            } else for (var a = 0; a < this.assertions.length; a++) this.assertions[a].result || (r++, s.stats.bad++, s.moduleStats.bad++);
            try {
                i.reset();
            } catch (p) {
                v("reset() failed, following Test " + this.testName + ", exception and reset fn follows", p, i.reset);
            }
            i.testDone({
                name: this.testName,
                failed: r,
                passed: this.assertions.length - r,
                total: this.assertions.length
            });
        },
        queue: function() {
            function n() {
                l(function() {
                    e.setup();
                }), l(function() {
                    e.run();
                }), l(function() {
                    e.teardown();
                }), l(function() {
                    e.finish();
                
});
            }
            var e = this;
            l(function() {
                e.init();
            });
            var r = i.config.reorder && t.sessionStorage && +sessionStorage.getItem("qunit-" + this.module + "-" + this.testName);
            r ? n() : l(n);
        }
    };
    var i = {
        module: function(e, t) {
            s.currentModule = e, s.currentModuleTestEnviroment = t;
        },
        asyncTest: function(e, t, n) {
            arguments.length === 2 && (n = t, t = 0), i.test(e, t, n, !0);
        },
        test: function(e, t, n, i) {
            var o = '<span class="test-name">' + e + "</span>", a;
            arguments.length === 2 && (n = t, t = null), t && typeof t == "object" && (a = t, t = null), s.currentModule && (o = '<span class="module-name">' + s.currentModule + "</span>: " + o);
            if (!u(s.currentModule + ": " + e)) return;
            var f = new r(o, e, t, a, i, n);
            f.module = s.currentModule, f.moduleTestEnvironment = 
s.currentModuleTestEnviroment, f.queue();
        },
        expect: function(e) {
            s.current.expected = e;
        },
        ok: function(e, t) {
            e = !!e;
            var n = {
                result: e,
                message: t
            };
            t = f(t), i.log(n), s.current.assertions.push({
                result: e,
                message: t
            });
        },
        equal: function(e, t, n) {
            i.push(t == e, e, t, n);
        },
        notEqual: function(e, t, n) {
            i.push(t != e, e, t, n);
        },
        deepEqual: function(e, t, n) {
            i.push(i.equiv(e, t), e, t, n);
        },
        notDeepEqual: function(e, t, n) {
            i.push(!i.equiv(e, t), e, t, n);
        },
        strictEqual: function(e, t, n) {
            i.push(t === e, e, t, n);
        },
        notStrictEqual: function(e, t, n) {
            i.push(t !== e, e, t, n);
        },
        raises: function(e, t, n) {
            
var r, s = !1;
            typeof t == "string" && (n = t, t = null);
            try {
                e();
            } catch (o) {
                r = o;
            }
            r && (t ? i.objectType(t) === "regexp" ? s = t.test(r) : r instanceof t ? s = !0 : t.call({}, r) === !0 && (s = !0) : s = !0), i.ok(s, n);
        },
        start: function() {
            s.semaphore--;
            if (s.semaphore > 0) return;
            s.semaphore < 0 && (s.semaphore = 0), t.setTimeout ? e.setTimeout(function() {
                if (s.semaphore > 0) return;
                s.timeout && clearTimeout(s.timeout), s.blocking = !1, c();
            }, 13) : (s.blocking = !1, c());
        },
        stop: function(n) {
            s.semaphore++, s.blocking = !0, n && t.setTimeout && (clearTimeout(s.timeout), s.timeout = e.setTimeout(function() {
                i.ok(!1, "Test timed out"), i.start();
            }, n));
        }
    };
    i.equals = i.equal, i.same = i.deepEqual;
    var s = 
{
        queue: [],
        blocking: !0,
        hidepassed: !1,
        reorder: !0,
        altertitle: !0,
        urlConfig: [ "noglobals", "notrycatch" ]
    };
    (function() {
        var t = e.location || {
            search: "",
            protocol: "file:"
        }, n = t.search.slice(1).split("&"), r = n.length, o = {}, u;
        if (n[0]) for (var a = 0; a < r; a++) u = n[a].split("="), u[0] = decodeURIComponent(u[0]), u[1] = u[1] ? decodeURIComponent(u[1]) : !0, o[u[0]] = u[1];
        i.urlParams = o, s.filter = o.filter, i.isLocal = t.protocol === "file:";
    })(), typeof exports == "undefined" || typeof require == "undefined" ? (m(e, i), e.QUnit = i) : (m(exports, i), exports.QUnit = i), m(i, {
        config: s,
        init: function() {
            m(s, {
                stats: {
                    all: 0,
                    bad: 0
                },
                moduleStats: {
                    all: 0,
                    bad: 0
                },
                
started: +(new Date),
                updateRate: 1e3,
                blocking: !1,
                autostart: !0,
                autorun: !1,
                filter: "",
                queue: [],
                semaphore: 0
            });
            var e = y("qunit-tests"), t = y("qunit-banner"), n = y("qunit-testresult");
            e && (e.innerHTML = ""), t && (t.className = ""), n && n.parentNode.removeChild(n), e && (n = document.createElement("p"), n.id = "qunit-testresult", n.className = "result", e.parentNode.insertBefore(n, e), n.innerHTML = "Running...<br/>&nbsp;");
        },
        reset: function() {
            if (e.jQuery) jQuery("#qunit-fixture").html(s.fixture); else {
                var t = y("qunit-fixture");
                t && (t.innerHTML = s.fixture);
            }
        },
        triggerEvent: function(e, t, n) {
            document.createEvent ? (n = document.createEvent("MouseEvents"), n.initMouseEvent(t, !0, !0, e.ownerDocument.defaultView, 0, 0
, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n)) : e.fireEvent && e.fireEvent("on" + t);
        },
        is: function(e, t) {
            return i.objectType(t) == e;
        },
        objectType: function(e) {
            if (typeof e == "undefined") return "undefined";
            if (e === null) return "null";
            var t = Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1] || "";
            switch (t) {
              case "Number":
                return isNaN(e) ? "nan" : "number";
              case "String":
              case "Boolean":
              case "Array":
              case "Date":
              case "RegExp":
              case "Function":
                return t.toLowerCase();
            }
            return typeof e == "object" ? "object" : undefined;
        },
        push: function(e, t, n, r) {
            var o = {
                result: e,
                message: r,
                actual: t,
                expected: n
            
};
            r = f(r) || (e ? "okay" : "failed"), r = '<span class="test-message">' + r + "</span>", n = f(i.jsDump.parse(n)), t = f(i.jsDump.parse(t));
            var u = r + '<table><tr class="test-expected"><th>Expected: </th><td><pre>' + n + "</pre></td></tr>";
            t != n && (u += '<tr class="test-actual"><th>Result: </th><td><pre>' + t + "</pre></td></tr>", u += '<tr class="test-diff"><th>Diff: </th><td><pre>' + i.diff(n, t) + "</pre></td></tr>");
            if (!e) {
                var l = a();
                l && (o.source = l, u += '<tr class="test-source"><th>Source: </th><td><pre>' + f(l) + "</pre></td></tr>");
            }
            u += "</table>", i.log(o), s.current.assertions.push({
                result: !!e,
                message: u
            });
        },
        url: function(t) {
            t = m(m({}, i.urlParams), t);
            var n = "?", r;
            for (r in t) n += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]) + "&";
            
return e.location.pathname + n.slice(0, -1);
        },
        extend: m,
        id: y,
        addEvent: g,
        begin: function() {},
        done: function() {},
        log: function() {},
        testStart: function() {},
        testDone: function() {},
        moduleStart: function() {},
        moduleDone: function() {}
    });
    if (typeof document == "undefined" || document.readyState === "complete") s.autorun = !0;
    i.load = function() {
        i.begin({});
        var n = m({}, s);
        i.init(), m(s, n), s.blocking = !1;
        var r = "", o = s.urlConfig.length;
        for (var u = 0, a; u < o, a = s.urlConfig[u]; u++) s[a] = i.urlParams[a], r += '<label><input name="' + a + '" type="checkbox"' + (s[a] ? ' checked="checked"' : "") + ">" + a + "</label>";
        var f = y("qunit-userAgent");
        f && (f.innerHTML = navigator.userAgent);
        var l = y("qunit-header");
        l && (l.innerHTML = '<a href="' + i.url({
            filter: undefined
        
}) + '"> ' + l.innerHTML + "</a> " + r, g(l, "change", function(t) {
            var n = {};
            n[t.target.name] = t.target.checked ? !0 : undefined, e.location = i.url(n);
        }));
        var c = y("qunit-testrunner-toolbar");
        if (c) {
            var h = document.createElement("input");
            h.type = "checkbox", h.id = "qunit-filter-pass", g(h, "click", function() {
                var e = document.getElementById("qunit-tests");
                if (h.checked) e.className = e.className + " hidepass"; else {
                    var n = " " + e.className.replace(/[\n\t\r]/g, " ") + " ";
                    e.className = n.replace(/ hidepass /, " ");
                }
                t.sessionStorage && (h.checked ? sessionStorage.setItem("qunit-filter-passed-tests", "true") : sessionStorage.removeItem("qunit-filter-passed-tests"));
            });
            if (s.hidepassed || t.sessionStorage && sessionStorage.getItem("qunit-filter-passed-tests")) {
                
h.checked = !0;
                var p = document.getElementById("qunit-tests");
                p.className = p.className + " hidepass";
            }
            c.appendChild(h);
            var d = document.createElement("label");
            d.setAttribute("for", "qunit-filter-pass"), d.innerHTML = "Hide passed tests", c.appendChild(d);
        }
        var v = y("qunit-fixture");
        v && (s.fixture = v.innerHTML), s.autostart && i.start();
    }, g(e, "load", i.load), i.equiv = function() {
        function r(e, t, n) {
            var r = i.objectType(e);
            if (r) return i.objectType(t[r]) === "function" ? t[r].apply(t, n) : t[r];
        }
        var e, t = [], n = [], s = function() {
            function r(e, t) {
                return e instanceof t.constructor || t instanceof e.constructor ? t == e : t === e;
            }
            return {
                string: r,
                "boolean": r,
                number: r,
                "null": r,
                "undefined"
: r,
                nan: function(e) {
                    return isNaN(e);
                },
                date: function(e, t) {
                    return i.objectType(e) === "date" && t.valueOf() === e.valueOf();
                },
                regexp: function(e, t) {
                    return i.objectType(e) === "regexp" && t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline;
                },
                "function": function() {
                    var e = t[t.length - 1];
                    return e !== Object && typeof e != "undefined";
                },
                array: function(t, r) {
                    var s, o, u, a;
                    if (i.objectType(t) !== "array") return !1;
                    a = r.length;
                    if (a !== t.length) return !1;
                    n.push(r);
                    for (s = 0; s < a; s++) {
                        u = !1;
                        
for (o = 0; o < n.length; o++) n[o] === r[s] && (u = !0);
                        if (!u && !e(r[s], t[s])) return n.pop(), !1;
                    }
                    return n.pop(), !0;
                },
                object: function(r, i) {
                    var s, o, u, a = !0, f = [], l = [];
                    if (i.constructor !== r.constructor) return !1;
                    t.push(i.constructor), n.push(i);
                    for (s in i) {
                        u = !1;
                        for (o = 0; o < n.length; o++) n[o] === i[s] && (u = !0);
                        f.push(s);
                        if (!u && !e(i[s], r[s])) {
                            a = !1;
                            break;
                        }
                    }
                    t.pop(), n.pop();
                    for (s in r) l.push(s);
                    return a && e(f.sort(), l.sort());
                }
            };
        }();
        return e = function() {
            
var e = Array.prototype.slice.apply(arguments);
            return e.length < 2 ? !0 : function(e, t) {
                return e === t ? !0 : e === null || t === null || typeof e == "undefined" || typeof t == "undefined" || i.objectType(e) !== i.objectType(t) ? !1 : r(e, s, [ t, e ]);
            }(e[0], e[1]) && arguments.callee.apply(this, e.splice(1, e.length - 1));
        }, e;
    }(), i.jsDump = function() {
        function e(e) {
            return '"' + e.toString().replace(/"/g, '\\"') + '"';
        }
        function t(e) {
            return e + "";
        }
        function n(e, t, n) {
            var r = o.separator(), i = o.indent(), s = o.indent(1);
            return t.join && (t = t.join("," + r + s)), t ? [ e, s + t, i + n ].join(r) : e + n;
        }
        function r(e, t) {
            var r = e.length, i = Array(r);
            this.up();
            while (r--) i[r] = this.parse(e[r], undefined, t);
            return this.down(), n("[", i, "]");
        }
        
var s = /^function (\w+)/, o = {
            parse: function(e, t, n) {
                n = n || [];
                var r = this.parsers[t || this.typeOf(e)];
                t = typeof r;
                var i = w(e, n);
                if (i != -1) return "recursion(" + (i - n.length) + ")";
                if (t == "function") {
                    n.push(e);
                    var s = r.call(this, e, n);
                    return n.pop(), s;
                }
                return t == "string" ? r : this.parsers.error;
            },
            typeOf: function(e) {
                var t;
                return e === null ? t = "null" : typeof e == "undefined" ? t = "undefined" : i.is("RegExp", e) ? t = "regexp" : i.is("Date", e) ? t = "date" : i.is("Function", e) ? t = "function" : typeof e.setInterval !== undefined && typeof e.document != "undefined" && typeof e.nodeType == "undefined" ? t = "window" : e.nodeType === 9 ? t = "document" : e.nodeType ? t = "node" : typeof e == "object" && typeof 
e.length == "number" && e.length >= 0 ? t = "array" : t = typeof e, t;
            },
            separator: function() {
                return this.multiline ? this.HTML ? "<br />" : "\n" : this.HTML ? "&nbsp;" : " ";
            },
            indent: function(e) {
                if (!this.multiline) return "";
                var t = this.indentChar;
                return this.HTML && (t = t.replace(/\t/g, "   ").replace(/ /g, "&nbsp;")), Array(this._depth_ + (e || 0)).join(t);
            },
            up: function(e) {
                this._depth_ += e || 1;
            },
            down: function(e) {
                this._depth_ -= e || 1;
            },
            setParser: function(e, t) {
                this.parsers[e] = t;
            },
            quote: e,
            literal: t,
            join: n,
            _depth_: 1,
            parsers: {
                window: "[Window]",
                document: "[Document]",
                error: "[ERROR]",
                
unknown: "[Unknown]",
                "null": "null",
                "undefined": "undefined",
                "function": function(e) {
                    var t = "function", r = "name" in e ? e.name : (s.exec(e) || [])[1];
                    return r && (t += " " + r), t += "(", t = [ t, i.jsDump.parse(e, "functionArgs"), "){" ].join(""), n(t, i.jsDump.parse(e, "functionCode"), "}");
                },
                array: r,
                nodelist: r,
                arguments: r,
                object: function(e, t) {
                    var r = [];
                    i.jsDump.up();
                    for (var s in e) {
                        var o = e[s];
                        r.push(i.jsDump.parse(s, "key") + ": " + i.jsDump.parse(o, undefined, t));
                    }
                    return i.jsDump.down(), n("{", r, "}");
                },
                node: function(e) {
                    var t = i.jsDump.HTML ? "&lt;" : "<", n = i.jsDump.HTML ? "&gt;" 
: ">", r = e.nodeName.toLowerCase(), s = t + r;
                    for (var o in i.jsDump.DOMAttrs) {
                        var u = e[i.jsDump.DOMAttrs[o]];
                        u && (s += " " + o + "=" + i.jsDump.parse(u, "attribute"));
                    }
                    return s + n + t + "/" + r + n;
                },
                functionArgs: function(e) {
                    var t = e.length;
                    if (!t) return "";
                    var n = Array(t);
                    while (t--) n[t] = String.fromCharCode(97 + t);
                    return " " + n.join(", ") + " ";
                },
                key: e,
                functionCode: "[code]",
                attribute: e,
                string: e,
                date: e,
                regexp: t,
                number: t,
                "boolean": t
            },
            DOMAttrs: {
                id: "id",
                name: "name",
                "class": "className"
            
},
            HTML: !1,
            indentChar: "  ",
            multiline: !0
        };
        return o;
    }(), i.diff = function() {
        function e(e, t) {
            var n = {}, r = {};
            for (var i = 0; i < t.length; i++) n[t[i]] == null && (n[t[i]] = {
                rows: [],
                o: null
            }), n[t[i]].rows.push(i);
            for (var i = 0; i < e.length; i++) r[e[i]] == null && (r[e[i]] = {
                rows: [],
                n: null
            }), r[e[i]].rows.push(i);
            for (var i in n) n[i].rows.length == 1 && typeof r[i] != "undefined" && r[i].rows.length == 1 && (t[n[i].rows[0]] = {
                text: t[n[i].rows[0]],
                row: r[i].rows[0]
            }, e[r[i].rows[0]] = {
                text: e[r[i].rows[0]],
                row: n[i].rows[0]
            });
            for (var i = 0; i < t.length - 1; i++) t[i].text != null && t[i + 1].text == null && t[i].row + 1 < e.length && e[t[i].row + 1].
text == null && t[i + 1] == e[t[i].row + 1] && (t[i + 1] = {
                text: t[i + 1],
                row: t[i].row + 1
            }, e[t[i].row + 1] = {
                text: e[t[i].row + 1],
                row: i + 1
            });
            for (var i = t.length - 1; i > 0; i--) t[i].text != null && t[i - 1].text == null && t[i].row > 0 && e[t[i].row - 1].text == null && t[i - 1] == e[t[i].row - 1] && (t[i - 1] = {
                text: t[i - 1],
                row: t[i].row - 1
            }, e[t[i].row - 1] = {
                text: e[t[i].row - 1],
                row: i - 1
            });
            return {
                o: e,
                n: t
            };
        }
        return function(t, n) {
            t = t.replace(/\s+$/, ""), n = n.replace(/\s+$/, "");
            var r = e(t == "" ? [] : t.split(/\s+/), n == "" ? [] : n.split(/\s+/)), i = "", s = t.match(/\s+/g);
            s == null ? s = [ " " ] : s.push(" ");
            var o = n.match(/\s+/g
);
            o == null ? o = [ " " ] : o.push(" ");
            if (r.n.length == 0) for (var u = 0; u < r.o.length; u++) i += "<del>" + r.o[u] + s[u] + "</del>"; else {
                if (r.n[0].text == null) for (n = 0; n < r.o.length && r.o[n].text == null; n++) i += "<del>" + r.o[n] + s[n] + "</del>";
                for (var u = 0; u < r.n.length; u++) if (r.n[u].text == null) i += "<ins>" + r.n[u] + o[u] + "</ins>"; else {
                    var a = "";
                    for (n = r.n[u].row + 1; n < r.o.length && r.o[n].text == null; n++) a += "<del>" + r.o[n] + s[n] + "</del>";
                    i += " " + r.n[u].text + o[u] + a;
                }
            }
            return i;
        };
    }();
})(this);;