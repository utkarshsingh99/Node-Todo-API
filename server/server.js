var express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todos} = require('./models/todo.js');
var {Users} = require('./models/users.js');

 var app = express();
 const port = process.env.PORT || 3000;

 app.use(bodyParser.json());

app.post('/todos', (req, res) => {        //resource creation
    var todo = new Todos({
      text: req.body.text,
      completed: req.body.completed
    });

    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.send(404);
  }

  Users.findById(id)
    .then((user) => {
      if(user) {
        return res.send(user);
      }else{
        return res.send('User Not Found1');
      }
    })
    .catch((e) => res.status(400).send());
})

 app.listen(port, () => {
   console.log(`Port is up and running at ${port}`);
 });
