/// <reference path="../typings/main.d.ts" />

import {Checker, CheckError} from "../src/check";
import * as assert from "power-assert";

describe("Number", function() {
    describe("calc", function() {
        it("add", function() {
            assert(4 + 8 === 12);
        });
        it("sub", function() {
            assert(4 - 8 === -4);
        });
        it("mul", function() {
            assert(16 * 2 === 32);
        });
        it("div", function() {
            assert(8 / 2 === 4);
        });
    });
});
