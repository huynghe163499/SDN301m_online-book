import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema({
  firstName: {
    type: String ,
    require: true
  },
  lastName: {
    type: String ,  
    require: true
  },
  nickName: {
    type: String,
    require: true
  },
  email: { 
    type: String,
    unique: [true, 'Email have already been!'], 
  },
  password: { 
    type: String, 
    require: true
  },
  address: {
    type: String,
    default: null
  },
  phoneNumber: {
    type: String,
    default: null
  },
  description: { 
    type: String, 
    default: null 
  },
  isStaff: { 
    type: Boolean, 
    default: false 
  },
  avatarPath: { 
    type: String,  
    default: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
  },
//   ResfreshToken: {
//     type: String, 
//     default: null 
//   },
  favoriteBook: {
    type: Schema.Types.ObjectId,
    ref: 'book',
    default: []
  },
  status: { 
    type: Boolean, 
    default: true 
  },
}, {
    timestamps: true
})

const UsersModel = mongoose.model('user', User)

export default UsersModel

