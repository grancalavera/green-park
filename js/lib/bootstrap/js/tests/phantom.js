function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 5001, start = (new Date).getTime(), condition = !1, interval = setInterval(function() {
        (new Date).getTime() - start < maxtimeOutMillis && !condition ? condition = typeof testFx == "string" ? eval(testFx) : testFx() : condition ? (typeof onReady == "string" ? eval(onReady) : onReady(), clearInterval(interval)) : (console.log("'waitFor()' timeout"), phantom.exit(1));
    }, 100);
}

if (phantom.args.length === 0 || phantom.args.length > 2) console.log("Usage: phantom.js URL"), phantom.exit();

var page = new WebPage;

page.onConsoleMessage = function(e) {
    console.log(e);
}, page.open(phantom.args[0], function(e) {
    e !== "success" ? (console.log("Unable to access network"), phantom.exit()) : waitFor(function() {
        return page.evaluate(function() {
            var e = document.getElementById("qunit-testresult");
            return e && e.innerText.match("completed"
) ? !0 : !1;
        });
    }, function() {
        var e = page.evaluate(function() {
            var e = document.getElementById("qunit-testresult");
            try {
                return e.getElementsByClassName("failed")[0].innerHTML;
            } catch (t) {}
            return 1e4;
        });
        phantom.exit(parseInt(e, 10) > 0 ? 1 : 0);
    });
});;