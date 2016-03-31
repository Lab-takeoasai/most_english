/// <reference path="../typings/main.d.ts" />

import {Checker, CheckError} from "../src/check";
import * as assert from "power-assert";

// this must be always true to check whether this test is valid or not.
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

describe("the most word checker", () => {
    before(() => {
    });
    it("includes a word 'student'", () => {
        let c = new Checker(__dirname + "/../src/1-1000.txt");
        assert(c.contains("student"));
    });
    it("does NOT include a word 'university'", () => {
        let c = new Checker(__dirname + "/../src/1-1000.txt");
        assert(!c.contains("university"));
    });
    it("validates a short document that is not good.", () => {
        const text = "I am a student at university of github on the Internet!";
        let c = new Checker(__dirname + "/../src/1-1000.txt");

        assert.notEqual(c.validates(text), []);
    });
});