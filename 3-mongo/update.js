const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url, {}, (error, client) => {
    if (error) {
        console.log('Can not connect to the database')
    }
    const db = client.db(dbname)
    db.collection('users').updateMany({
        age: 24
    }, { $set: { age: 30 } })

    db.collection('users').find({}).toArray((error, results) => {
        console.log(results)
    })
})
