// Write a script that includes process.nextTick, a resolved Promise, and a setImmediate callback. 
//Add console log statements to observe the execution order of these different types of tasks.

console.log("Script start");

setImmediate(() => {
    console.log("setImmediate")
    Promise.resolve("SetImmediates Promise").then(res => console.log(res))
})


process.nextTick(() => {
    console.log("process nextTick");
})

Promise.resolve("Resolvov promis").then(res => console.log(res))
console.log("Script end");
