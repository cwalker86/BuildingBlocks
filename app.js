var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('OK');
});

// Cities end-point
app.get('/cities', function(req, res) {
  var cities = ["Miami","New York","Richmond"];
  res.json(cities);
});


//encapsulate app inside of node module
module.exports = app;


