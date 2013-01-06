var e = require("connect"), t = require("http"), n = require("fs"), r = e().use(e.static(__dirname + "/../../"));

t.createServer(r).listen(3e3), n.writeFileSync(__dirname + "/pid.txt", process.pid, "utf-8");;