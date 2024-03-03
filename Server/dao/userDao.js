import User from "../models/user.js"
import Book from "../models/book.js"
import { accessToken, refreshToken } from "../utils/jwt.js"
import bcrypt from "bcrypt"
const saltRounds = 10

import cloudinary from "cloudinary"
const cloudinaryV2 = cloudinary.v2

const checkEmailExist = async (email) => {
  let check = true
  const user = await User.findOne({ email })
  if (user) {
    check = false
  }
  return check
}

const login = async (req) => {
  try {
    const { password, email } = req.body
    const getUser = await User.findOne({ email })
    if (!getUser) return { msg: "Email không tồn tại" }
    const check = bcrypt.compareSync(password, getUser.password)
    if (!check) return { msg: "Mật khẩu không chính xác" }
    // if (!getUser.IsActive)
    //   return { msg: "Tài khoản đã bị khóa" }
    const access_token = accessToken({
      id: getUser._id,
      roleId: getUser.roleId,
    })
    return { access_token, msg: "Login thành công" }
  } catch (error) {
    return error.toString()
  }
}

const loginByGoogle = async (req) => {
  try {
    const email = req.body.email
    const getUser = await User.findOne({ email: email })
    if (!getUser) return { msg: "Email không tồn tại" }
    // if (!getUser.IsActive)
    //   return { msg: "Tài khoản đã bị khóa" }
    const access_token = accessToken({
      id: getUser._id,
      roleId: getUser.roleId,
    })
    return { access_token, msg: "Login thành công" }
  } catch (error) {
    return { msg: "Login thành công" }
  }
}

const register = async (req) => {
  try {
    const { password, email } = req.body
    const checkExist = await checkEmailExist(email)
    if (!checkExist) return { msg: "Email đã tồn tại" }
    const hashPassword = bcrypt.hashSync(password, saltRounds)
    const refresh_token = refreshToken()
    const hashUser = {
      ...req.body,
      password: hashPassword,
      resfreshToken: refresh_token,
    }
    const newUser = await User.create(hashUser)
    return { newUser, msg: "Đăng ký tài khoản thành công" }
  } catch (error) {
    return error.toString()
  }
}

const registerByGoogle = async (req) => {
  try {
    const { email, given_name, picture, roleId } = req.body
    const checkExist = await checkEmailExist(email)
    if (!checkExist) return { msg: "Email đã tồn tại" }
    const refresh_token = refreshToken()
    const newUser = await User.create({
      email: email,
      fullName: given_name,
      avatarPath: picture,
      resFreshToken: refresh_token,
      roleId: roleId,
    })
    return { newUser, msg: "Đăng ký tài khoản thành công" }
  } catch (error) {
    return error.toString()
  }
}

const changePassword = async (req) => {
  try {
    const { oldPassword, newPassword, userId } = req.body
    const user = await User.findOne({ _id: userId })
    if (!user) return { msg: "Không tồn tại user" }
    const check = bcrypt.compareSync(oldPassword, user.password)
    if (!check) return { msg: "Mật khẩu không chính xác" }
    const hashPassword = bcrypt.hashSync(newPassword, saltRounds)
    const userUpdate = await User.findByIdAndUpdate(
      { _id: userId },
      { password: hashPassword }
    )
    return { userUpdate, msg: "Mật khẩu được cập nhật thành công" }

  } catch (error) {
    return error.toString()
  }
}

const getDetailProfile = async (req) => {
  try {
    const userId = req.params.userId
    const detail = await User.findOne({ _id: userId }).populate('favoriteBook', ['avatarPath', 'title'])
    if (!detail) return { msg: "Không tồn tại user" }
    return { detail, msg: "Lấy thông tin thành công" }
  } catch (error) {
    return error.toString()
  }
}

const updateProfile = async (req) => {
  try {
    const id = req.body.userId
    const user = await User.findOne({ _id: id })
    if (!user) return { msg: "Không tồn tại user" }
    const updateProfile = await User.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
        avatarPath: !!req.file ? req.file.path : user?.avatarPath,
      },
      { new: true }
    )
    return { updateProfile, msg: "Cập nhật thành công" }
  } catch (error) {
    return error.toString()
  }
}

const UserDao = {
  login,
  loginByGoogle,
  register,
  registerByGoogle,
  changePassword,
  updateProfile,
  getDetailProfile
}

export default UserDao