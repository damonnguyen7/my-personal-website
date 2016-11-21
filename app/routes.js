var express = require('express');
var router = express.Router();
var path = require('path');

//GET
router.get('/', function(req, res) {
  res.render('pages/home'); 
});

router.get('/about', function(req, res) {
  var damon = {
    name: 'Damon Nguyen',
    email: 'damonnguyen92@gmail.com',
    avatar: 'img/default.png',
    description: 'I am a full-stack software engineer who has experience working in the frontend and backend. I enjoy building data rich, beautifully designed, scalable, and high performant web application. I enjoy coding because of the never ending learning and solving complex challenges. I am a highly motivated individual who aspires to become a coding ninja! I am looking for an environment where they build impactful products, have a great culture, and an awesome team.'
  };

  res.render('pages/about', {
    name: damon.name,
    email: damon.email,
    avatar: damon.avatar,
    description: damon.description
  });

});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

//POST
router.post('/contact');

module.exports = router;
