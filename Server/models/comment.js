import mongoose from 'mongoose'
const Schema = mongoose.Schema

const comments = new Schema({
  content: {
    type: String,
    require: true
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  bookid: {
    type: Schema.Types.ObjectId,
    ref: 'book'
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
    timestamps: true,
})

const CommentSchema = mongoose.model('comment', comments)

export default CommentSchema

