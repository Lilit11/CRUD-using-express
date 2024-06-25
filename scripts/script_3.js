// Write a script that uses both setImmediate and setTimeout with a delay of 0 milliseconds.
console.log("Script start");

setImmediate(() => {
    console.log("setImmediate")
})

setTimeout(() => console.log('SetTimeOut with 10'), 10)
setTimeout(() => console.log('SetTimeOut with 0'), 0)
console.log("Script end");