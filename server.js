//load environment variable from .env
require('dotenv').config();

const express = require('express'),
      router = require('./app/routes'),
      expressLayouts = require('express-ejs-layouts'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs'); //set up for EJS templating

//Middleware: 
app.use(expressLayouts); //override the default response.render() behavior
app.use(bodyParser.urlencoded({
  extended: true
})); //parse input url encoded data into objects and enable query string library
app.use(bodyParser.json());
app.use('/', router); //Add our router to the middleware.
app.use(express.static(__dirname + '/public')); //add express.static middleware function to serve static files

//Mongoose: connecting to database
mongoose.connect(process.env.MONGOOSEURI);

// connection is reference to mongoose connection to db
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoDB');
  app.listen(port, function() {
    console.log("Listening on port 8080");
  });   
});
