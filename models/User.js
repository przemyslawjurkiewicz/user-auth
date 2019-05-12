const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  id: { 
    type: String, 
    required: true, 
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
   },
  password: {
    type: String,
    required: true,
    unique: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
