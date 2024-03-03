import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Books = new Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
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
  avatarPath: {
    type: String,
    require: true
  },
  isNew: {
    type: Boolean,
    default: true
  },
  genres: {
    type: Schema.Types.ObjectId,
    ref: 'Genres',
    default: []
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

const BooksModel = mongoose.model('Books', Books)

export default BooksModel
