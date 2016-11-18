var express = require('express');
var router = express.Router();

//GET
router.get('/', function(req, res) {
  res.send('Hello World!');
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
