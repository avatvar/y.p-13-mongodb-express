const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    validate: {
        validator: function(value) {
            return /\d{3}/.test(value);
        },
        message: 'что-то не так с name'
    }
  },
  id: {
    type: String,
  },
  profilePicDark: {
    type: String,
  },
  profilePicLight: {
    type: String,
  },
  location: {
    type: String,
  },
  favBirdQuote: {
    type: String,
  },
  parrotsOwned: [
    {
      name: {
        type: String,
      },
      favoriteToys: Array,
    },
  ],
});

module.exports = new mongoose.model('user', UserSchema);