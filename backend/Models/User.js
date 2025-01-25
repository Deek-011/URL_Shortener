const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobilenumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 13,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
