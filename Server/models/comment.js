import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comments = new Schema({
  content: {
    type: String,
    require: true
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    require: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Books',
    require: true
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
})

const CommentsModel = mongoose.model('Comments', Comments)

export default CommentsModel

