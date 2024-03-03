import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Genres = new Schema({
  title: {
    type: String,
    required: [true, 'nhap title']
  },
  decription: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
})

const GenresModels = mongoose.model('Genres', Genres)

export default GenresModels

