import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const userSchema = new Schema({
  name: String,
  phone: String,
  link1: String,
  link2: String,
  link3: String,
  idsort: String,
  sorted: { type: Boolean, default: false },
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
