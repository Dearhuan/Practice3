const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1908';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  // console.log(db);

  /* insertDocuments(db, function () {
    client.close();
  }); */

  findDocuments(db, function () {
    client.close();
  });


  updateDocument(db, function () {
    client.close();
  });

  removeDocument(db, function () {
    client.close();
  });


  client.close();
});

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('users'); //表名
  // Insert some documents
  collection.insertMany([{
    name: "hello1"
  }, {
    name: "hello2"
  }, {
    name: "hello3"
  }], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};


const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
};

const updateDocument = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Update document where a is 2, set b equal to 1
  collection.updateMany({
    name: "hello1"
  }, {
    $set: {
      title: "james"
    }
  }, function (err, result) {
    assert.equal(err, null);
    assert.equal(4, result.result.n);   //修改的条数
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
};


const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ name : "hello3" }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}