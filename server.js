var express = require('express');
var app = express();
var port = 8080;
var router = require('./app/routes');
var path = require('path');

app.use('/', router); //Add our router to the middleware.
app.use(express.static(__dirname + '/public')); //add express.static middleware function to serve static files


app.listen(port, function() {
  console.log("Listening on port 8080");
});
