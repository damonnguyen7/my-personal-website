var express = require('express');
var app = express();
var port = 8080;
var router = require('./app/routes');

//Add our router to the middleware.
app.use('/', router);

app.listen(port, function() {
  console.log("Listening on port 8080");
});
