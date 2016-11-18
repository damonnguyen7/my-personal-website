var express = require('express');
var router = express.Router();
var path = require('path');

//GET
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res) {
  res.send('About page!');
});

router.get('/contact', function(req, res) {
  res.send('Contact page!');
});

//POST
router.post('/contact');

module.exports = router;
