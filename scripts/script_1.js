// Write a script that performs an asynchronous file read operation and includes setImmediate, setTimeout, and process.nextTick.
// Add console log statements to observe how these operations interact.

console.log("Script start");
const fs = require('fs')

fs.readFile('file.txt', (err, data) => {

    console.log("Reading file");
})

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("setTimeOut"))

process.nextTick(() => {
    console.log("process nextTick");
})
console.log("Script end");


