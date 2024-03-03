import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Chapters = new Schema({
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
    ref: 'Books'
  },

}, {
  timestamps: true,
})

const ChaptersModel = mongoose.model('Chapters', Chapters)

export default ChaptersModel

