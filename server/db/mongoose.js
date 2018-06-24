var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://utkarshsingh99:utki123@ds261540.mlab.com:61540/node-todo-utki' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}
