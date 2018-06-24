var {mongoose} = require('../db/mongoose');

var Todos = mongoose.model('Todos', {
  text: {                                                 //TypeCasting is present in Mongoose
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


module.exports = {Todos}
