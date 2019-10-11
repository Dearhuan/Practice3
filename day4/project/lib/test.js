
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
const UserSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String
  },
  age: {
    type: Number,
  }
})
module.exports = mongoose.model('users', UserSchema)
