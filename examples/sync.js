const fs = require('fs');


//Synchronous
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);


//Asynchronous

console.log(1);
fs.readFile('data.txt', {encoding: 'utf8'}, function(err, data) {
    console.log(data);
    console.log(2);
})
console.log(3);

// output : 1 3 Test data 2
// does other stuff first, outputs file asynchronously
// waits for readFile() to finish its process.
