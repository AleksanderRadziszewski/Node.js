const mongo = require('mongodb')
const mongoClient = mongo.MongoClient
const ObjectID = mongo.ObjectId

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url, {}, (error, client) => {
    if (error) {
        console.log('Can not connect to the database')
    }
    const id = new ObjectID("61263980e9a22f6164d96caf")
    const strValue = id.toHexString()
    console.log(strValue)
    console.log(`This user was created on ${id.getTimestamp()}`)

    const db = client.db(dbname)

    db.collection('users').findOne({
        _id: new mongo.ObjectId("612a437368159108d2bc9b10")
    },(error, result) => {
        console.log(result)
    })
})