var {mongoose} = require('../db/mongoose');

var Users = mongoose.model('Users', {
  user: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    minlength: true
  }
});

module.exports = {Users}
