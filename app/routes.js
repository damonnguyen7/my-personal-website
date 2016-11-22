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

  var projects = [
    {
      name: 'JobPlus',
      description: 'A web application that gives job searchers insight on their potential employment surroundings by utilizing APIs to deliver relevant information based on their geo-location.',
      image: 'img/jobPlusDefault.png',
      link: 'http://jobplus.online/'
    },
    {
      name: 'Spontaneó',
      description: 'A web application that allows users to generate spontaneous ideas, gifts, and restaurants based off geolocation.',
      image: 'img/spontaneoDefault.png',
      link: 'http://spontaneo.herokuapp.com/#/'
    },
    {
      name: 'Pokédex',
      description: 'A single page web application for fans who wants to learn about the first generation of Pokémon',
      image: 'img/pokedexDefault.png',
      link: 'http://pokedex-mvp.herokuapp.com/#/'
    }
  ];

  res.render('pages/about', {
    name: damon.name,
    email: damon.email,
    avatar: damon.avatar,
    description: damon.description,
    projects: projects
  });

});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

//POST
router.post('/contact', function(req, res) {
  //log: *name* has contacted you
  console.log(req.body.name + " has contacted you!");
});

module.exports = router;
