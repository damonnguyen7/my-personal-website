var Message = require('../model/message-model');

module.exports = {
  landingPage: function(req, res) {
    res.render('pages/home');
  },
  about: function(req, res) {
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

  },
  allmessagesGET: function (req, res) {
    Message.find({}, function (err, messages) {
      console.log('messages', messages);
      if (err) {
        return res.json(err);
      }
      res.render('pages/allmessages', {
        messages: messages
      });
    });
  },

  contactGET: function(req, res) {
    res.render('pages/contact');
  },
  contactPOST: function(req, res) {
    console.log(req.body.name + " has contacted you!");

    var newMessage = new Message({
      name: req.body.name,
      message: req.body.message
    });

    newMessage.save(function (err, newMessage) {
      if (err) {
        return res.json(err);
      }
      res.json(newMessage);
      
    });
  }
}
