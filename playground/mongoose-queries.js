const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todos} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

var id = '5b2a1b45cf56d224ba04f360';

Users.findById(id).then((res) => {
  return console.log(res);
}).catch((e) => console.log(e));



//
// if(!ObjectID.isValid(id)){
//   console.log(`ID NOT VALID!`);
// }
// //
// // Todos.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todos.findOne({      //Returns only one result, the first result
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
//
// Todos.findById(id).then((todos) => {
//   if(!todos){
//     return console.log(`ID Not Found`);
//   }
//   console.log('Todos By Id', todos);
// }).catch((e) => console.log(e));
