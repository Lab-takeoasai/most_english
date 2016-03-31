/// <reference path="../typings/main.d.ts" />

import * as fs from "fs";

class Checker {
    private topWords: {[key: string]: boolean} = {};
    constructor(filename: string) {
        const file = fs.readFileSync(filename).toString();
        file.split("\n").forEach(word => {
            this.topWords[word] = true;
        });
    }
    contains(word: string): boolean {
        return this.topWords[word] === true;
    }
    validates(text: string) {
        let errors = [];
        const lines = text.split("\n");
        lines.forEach((line, lineIndex) => {
            let wordIndex = 0;
            const words = line.split(" ");
            words.forEach(word => {
                if (!this.contains(word)) {
                    wordIndex = line.indexOf(word, wordIndex);
                    errors.push({word: word, lineIndex: lineIndex, wordIndex: wordIndex});
                } else {
                    wordIndex = line.indexOf(word, wordIndex);
                }
            });
        });
        return errors;
    }
}

let c = new Checker("./1-1000.txt");
const txt = "this document is an example for top  1000 words used in English";

console.time("validates");
for (let i = 0; i < 1; i++) {
    console.log( c.validates(txt) );
}
console.timeEnd("validates");
