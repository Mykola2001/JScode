// start
const prompt = require("prompt-sync")();
let symbol = prompt("Wright more than 10 words here:");

const startRow = symbol.slice(0, 5)
console.log(startRow)
const endRow = symbol.slice(-5)
console.log(endRow)