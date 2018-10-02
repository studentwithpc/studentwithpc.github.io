'use strict'
var fs = require('fs');
var obj;
fs.readFile('vocabulary.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    obj = JSON.parse(data);
    console.log(obj);
})
console.log(obj);
console.log("ggggg");