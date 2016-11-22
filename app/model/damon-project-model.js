const mongoose = require('mongoose'),
      schema = mongoose.Schema;

//Create project schema
var projectSchema = schema({
  name: String,
  email: String,
  avatar: String,
  description: String
});

//Create project model
var Project = mongoose.Model('projects', projectSchema);

module.exports = Project;
