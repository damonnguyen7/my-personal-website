const mongoose = require('mongoose'),
      schema = mongoose.Schema;

//Create message schema
var messageSchema = schema({
  name: String,
  message: String
});

//Store message documents in the collection called 'messages'.
var Message = mongoose.model('messages', messageSchema);

//Export model for whole program to use
module.exports = Message;
