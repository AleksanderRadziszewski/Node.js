const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/mongo-test'

mongoose.connect(url,{
    useNewUrlParser: true
})

const User = mongoose.model('User', {
    name: {type: String},
    age: {type: Number }
})

const user = new User({ name: "Sam", age: 44 })
user.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})