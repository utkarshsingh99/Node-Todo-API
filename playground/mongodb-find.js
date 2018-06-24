const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({
    name: `Utkarsh Singh`
  }).count().then((count) => {
    console.log(`Count of query: ${count}`);
  }, (err) => {
    console.log(`That's a pretty shitty query`);
  });

  db.close();
});
