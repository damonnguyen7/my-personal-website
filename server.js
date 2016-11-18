var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function() {
  console.log("Listening on port 8080");
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/about', function(req, res) {
  res.send('About page!');
});

app.get('/contact', function(req, res) {
  res.send('Contact page!');
});

