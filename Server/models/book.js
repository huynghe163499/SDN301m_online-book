import mongoose from 'mongoose'
const Schema = mongoose.Schema

// const chapterSchema = new Schema({
//   title: {
//     type: String,
//     require: true
//   },
//   chapterid:{
//     type: Number,
//     require: true
//   }
// }, {
//   timestamps: true
// })

const book = new Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  decription: {
    type: String,
    require: true
  },
  // chapters: [chapterSchema],
  rate: {
    type: Number
  },
  accessTimes: {
    type: Number
  },
  avataPath:{
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

const Book = mongoose.model('book', book)

export default Book
