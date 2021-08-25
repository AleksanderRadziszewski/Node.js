const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url, {}, (error, client) => {
    if (error) {
        console.log('Can not connect to the database')
    }
    const db = client.db(dbname)
    db.collection('users').insertOne({
        name: 'Andy',
        age: 32
    }, (error, result) => {
        if (error) {
            console.log('Adding user error', error)
        }
        console.log(result)
    })
})