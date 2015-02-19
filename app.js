var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('OK');
});

// Cities end-point
app.get('/cities', function(req, res) {
  var cities = ["Miami","New York","Richmond"];
    // if request query is made
    if (req.query.limit >= 0) {
      // return the requested amount starting from index 0 to limit passed
      res.json(cities.slice(0, req.query.limit));
    // otherwise
    } else {
      // return all cities
      res.json(cities);
  }
});


//encapsulate app inside of node module
module.exports = app;


