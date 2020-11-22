const {
  Schema,
  model
} = require('mongoose')


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
}, {
  timestamps: true
})

module.exports = model("User", userSchema)
