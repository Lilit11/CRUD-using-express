// Write a script that includes a synchronous file read operation and an asynchronous file
// read operation using fs.readFileSync and fs.readFile, respectively.

const fs = require('fs')


console.log(fs.readFileSync('file.txt','ascii'))

fs.readFile('fileAsync.txt','ascii',(err,data)=>{
   console.log(data);

    console.log("reading sync from async fn " +  fs.readFileSync('file.txt','ascii'))
})