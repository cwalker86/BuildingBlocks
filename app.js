var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('OK');
});

//encapsulate app inside of node module
module.exports = app;

