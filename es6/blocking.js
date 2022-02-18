//synchronous-io and asynchronous-io operations

let fsModule = require("fs");//file system module used for file operations

//sync-io : this will block the code untill its execution gets completed

// console.log("Starting Sync File Read!");

// console.log(__dirname);
// console.log(__filename);

//to read a file data in blocking way
//let data = fsModule.readFileSync(__dirname+"\\class.js","utf-8");
//console.log("data ", data);

//console.log("Ends Sync File Read!");

//non-blocking io operation
console.log("Starting async File Read!");

fsModule.readFile(__dirname+"\\class.js","utf-8", (err, data1)=>{
    console.log("err ",err)
    console.log("data ",data1)
})

console.log("End async File Read!");