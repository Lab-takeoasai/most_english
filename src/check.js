/// <reference path="../typings/main.d.ts" />
"use strict";
var fs = require("fs");
var Checker = (function () {
    function Checker(filename) {
        var _this = this;
        this.topWords = {};
        var file = fs.readFileSync(filename).toString();
        file.split("\n").forEach(function (word) {
            _this.topWords[word] = true;
        });
    }
    Checker.prototype.contains = function (word) {
        return this.topWords[word] === true;
    };
    Checker.prototype.validates = function (text) {
        var _this = this;
        var errors = [];
        var lines = text.split("\n");
        lines.forEach(function (l) {
            var words = l.split(" ");
            words.forEach(function (w) {
                if (!_this.contains(w)) {
                }
            });
        });
        return errors;
    };
    return Checker;
}());
var c = new Checker("./1-1000.txt");
var txt = "this document is an example for top 1000 words used in english";
console.time("validates");
for (var i = 0; i < 1000000; i++) {
    c.validates(txt);
}
console.timeEnd("validates");
//# sourceMappingURL=check.js.map