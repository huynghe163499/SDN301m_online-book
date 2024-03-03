import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Chapter = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  bookid: {
    type: Schema.Types.ObjectId,
    ref: 'book'
  },

}, {
    timestamps: true,
})

const ChapterModel = mongoose.model('chapter', Chapter)

export default ChapterModel

