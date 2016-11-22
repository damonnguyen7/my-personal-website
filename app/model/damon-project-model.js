const mongoose = require('mongoose'),
      schema = mongoose.Schema;

//Create project schema
var projectSchema = schema({
  name: {
    type: String,
    unique: true
  },
  email: String,
  avatar: String,
  description: String
});

//Create project model
var Project = mongoose.Model('projects', projectSchema);

module.exports = Project;
