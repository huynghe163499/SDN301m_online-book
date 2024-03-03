import mongoose from 'mongoose'
const Schema = mongoose.Schema
const books = new Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true
  },
  decription: {
    type: String,
    require: true
  },
 
  rate: {
    type: Number
  },
  accessTimes: {
    type: Number
  },
  avatarPath:{
    type: String,
    require: true
  },
  isNew: {
    type: Boolean,
    default: true
  },
  genres: {
    type: Schema.Types.ObjectId,
    ref: 'genre',
  },

  likes: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

const BookModel = mongoose.model('books', books)

export default BookModel
