const fs = require("fs");
const s = fs.readFileSync("script.js", "utf8");

const m = s.match(/const members = (\[[\s\S]*?\n\]);/);
const members = eval(m[1]);
const nonzero = members.filter((x) => x.paid !== null && x.paid !== 0);
const sum = nonzero.reduce((a, b) => a + b.paid, 0);
console.log("member paid sum (nonzero):", sumWikimedia);
