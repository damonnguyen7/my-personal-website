var express = require('express');
var app = express();
var port = 8080;
var router = require('./app/routes');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set('view engine', 'ejs'); //set up for EJS templating

app.use(expressLayouts); //override the default response.render() behavior
app.use(bodyParser.urlencoded({
  extended: true
})); //parse input url encoded data into objects and enable query string library
app.use(bodyParser.json());
app.use('/', router); //Add our router to the middleware.
app.use(express.static(__dirname + '/public')); //add express.static middleware function to serve static files


app.listen(port, function() {
  console.log("Listening on port 8080");
}); 
