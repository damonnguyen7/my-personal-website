var express = require('express');
var app = express();
var port = 8080;
var router = require('./app/routes');
var path = require('path');
var expressLayout = require('express-layout');


app.use(expressLayout); //override the default response.render() behavior
app.set('view engine', 'ejs'); //set up for EJS templating

app.use('/', router); //Add our router to the middleware.
app.use(express.static(__dirname + '/public')); //add express.static middleware function to serve static files


app.listen(port, function() {
  console.log("Listening on port 8080");
});
