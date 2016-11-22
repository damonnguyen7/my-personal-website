require('dotenv').config();
const mongoose = require('mongoose'),
      Project = require('./../model/damon-project-model.js');

var projectDB = mongoose.connect(process.env.DAMONPROJECTS);

//test if mongodb server is running smoothly. if database fails..
projectDB.on('error', console.error.bind(console, "Connection Error"));
//else 
projectDB.once('open', function(cb) {
  console.log('Connection Succeeded');
});

//drop database:
Project.remove({}, function() {
  console.log('dropping documents from Projects collection');
});


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

//Add all Projects to Project collection to persist data:
function persistData(array) {
  var newDocument;
  for (let project of array) {
    project = array[i];
    newDocument = new Project(project);
    newDocument.save();
  }
}



