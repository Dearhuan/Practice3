const MongoClient = require('mongodb').MongoClient;
// 踊跃测试
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1908';
const connect = () => {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
            assert.equal(null, err);
            err ? reject(err) : resolve(client)
            // console.log("Connected successfully to server");
        });
    })
}
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.find(query ? query : {}).toArray(function (err, docs) {
            // assert.equal(err, null);
            // console.log("Found the following records");
            // console.log(docs)
            err ? reject(err) : resolve(docs)
        });
        // 关闭连接
        client.close();
    })
}
// query: 筛选条件
// query: 更改后的值
const update = (col, query, query2) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateMany({ ...query }, { $set: { ...query2 } }, function (err, result) {
            err ? reject(err) : resolve(result)
        })
    })
}

const remove = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        })
    })
}

const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        });
    })
}

module.exports = {
    connect,
    find,
    update,
    remove,
    insert
}