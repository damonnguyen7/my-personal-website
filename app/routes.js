var express = require('express');
var router = express.Router();
var path = require('path');

//GET
router.get('/', function(req, res) {
  res.render('pages/index'); 
});

router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

//POST
router.post('/contact');

module.exports = router;
