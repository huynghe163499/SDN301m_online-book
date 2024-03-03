import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Chapters = new Schema({
  chapterId:{
    type: Number,
    require: true
  },
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
const ChapterModel = mongoose.model('chapters', Chapters)

export default ChapterModel

