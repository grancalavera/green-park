QUnit.begin = function() {
    console.log("Starting test suite"), console.log("================================================\n");
}, QUnit.moduleDone = function(e) {
    e.failed === 0 ? console.log("\u2714 All tests passed in '" + e.name + "' module") : console.log("\u2716 " + e.failed + " tests failed in '" + e.name + "' module");
}, QUnit.done = function(e) {
    console.log("\n================================================"), console.log("Tests completed in " + e.runtime + " milliseconds"), console.log(e.passed + " tests of " + e.total + " passed, " + e.failed + " failed.");
};;