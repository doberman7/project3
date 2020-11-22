const Schema = require('mangose')
const model = require('mangose')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  name: {
    type: String,
    trim: true,
  },
  {timestamp: true}
})

module.exports = model("User",userSchema)
