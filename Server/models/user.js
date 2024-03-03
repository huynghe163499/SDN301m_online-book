import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Users = new Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: [true, 'Email have already been!'],
  },
  password: {
    type: String,
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
  roleId: {
    type: Number,
    require: true
  },
  avatarPath: {
    type: String,
    default: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
  },
  resfreshToken: {
    type: String,
    default: null
  },
  favoriteBook: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Books',
    }],
    default: []
  },
  status: {
    type: Boolean,
    default: true
  },
}, {
  timestamps: true
})

const UsersModel = mongoose.model('Users', Users)

export default UsersModel

