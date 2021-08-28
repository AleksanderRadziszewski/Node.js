const { ObjectId } = require('mongodb')

const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url, {}, (error, client) => {
    if (error) {
        console.log('Can not connect to the database')
    }
    const db = client.db(dbname)
    const id = new ObjectId()
    db.collection('users').insertOne({
        _id: id.toHexString(),
        name: 'Jay',
        age: 22
    }, (error, result) => {
        if (error) {
            console.log('Adding user error', error)
        }
        console.log(result)
    })
})