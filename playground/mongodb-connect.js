const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log(`Connected to MongoDB server`);

  // db.collection(`Todos`).insertOne({
  //   text: `Something to do`,
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: `Abhishek Aggarwal`,
    age: 19,
    location: `Bareilly`
  }, (err, result) => {
    if(err){
      return console.log('Nope, that\'s a shitty note');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
