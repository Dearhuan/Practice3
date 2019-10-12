const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1908';

const connect = () => {
  return new Promise((resolve, reject) => {
      MongoClient.connect(url, {
          useNewUrlParser: true
      }, function (err, client) {
          if (err !== null) {
              reject(err);
              throw err;
          } else {
              resolve(client);
          };

      });
  })
}
// 查找
const find = (col, params) => {
  return new Promise(async (resolve, reject) => {
      let client = await connect();
      const db = client.db(dbName);
      const collection = db.collection(col);
      collection.find(params).toArray(function (err, docs) {
        err?reject(err):resolve(docs);
      });
      client.close();
  })
};
// 插入
const insert = (col, params) => {
  return new Promise(async (resolve, reject) => {
      let client = await connect();
      const db = client.db(dbName);
      const collection = db.collection(col);
      collection.insertMany(params, (err, docs) => {
        err?reject(err):resolve(docs);
      })
      client.close();
  })
};

module.exports = {
  find,
  insert
}