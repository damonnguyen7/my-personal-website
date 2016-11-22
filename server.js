//load environment variable from .env
require('dotenv').config();

const express = require('express'),
      router = require('./app/routes'),
      expressLayouts = require('express-ejs-layouts'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8080;


//connect to server:
mongoose.connect(process.env.MONGOOSEURI);

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
