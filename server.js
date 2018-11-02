/*var fs = require('fs');
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(function (req, res) {
  console.log("URL " + req.url);
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8')
  myReadShort.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log("port 3000 listened")*/
var express = require("express");
var app = express();

/*var fs = require('fs');
var obj;
fs.readFile('static/scripts/vocabulary.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});*/
app.use(express.static('static'));

var server = app.listen(3000, function() {
    console.log('working on', server.address().port);
});
//module.exports =obj;