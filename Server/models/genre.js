import mongoose from 'mongoose'
const Schema = mongoose.Schema

const genre = new Schema({
  title: { 
    type: String ,
    required: [true, 'nhap title']
  },
  decription: {
    type: String ,
    required: true
  },
  code: {
    type: String,
    required: true
  }
})

const Genres = mongoose.model('genre', genre)

export default Genres

