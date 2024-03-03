import UserDao from '../dao/userDao.js'

const login = async (req, res) => {
    try {
      const respone = await UserDao.login(req)
      return res.status(200).json(respone)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
}
  
const loginByGoogle = async (req, res) => {
    try {
      const respone = await UserDao.loginByGoogle(req)
      return res.status(200).json(respone)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
}
  
const register = async (req, res) => {
    try {
      const respone = await UserDao.register(req)
      return res.status(200).json(respone)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
}
  
const registerByGoogle = async (req, res) => {
    try {
      const respone = await UserDao.registerByGoogle(req)
      return res.status(200).json(respone)
    } catch (error) {
      return res.status(500).json(error.toString())
    }
}

const changePassword = async (req, res) => {
  try {
    const respone = await UserDao.changePassword(req)
    return res.status(200).json(respone)
  } catch (error) {
    return res.status(500).json(error.toString())
  }
}

const getDetailProfile = async (req, res) => {
  try {
    const detail = await UserDao.getDetailProfile(req)
    return res.status(200).json(detail)
  } catch (error) {
    return res.status(500).json(error.toString())
  }
}

const updateProfile = async (req, res) => {
  try {
    const profile = await UserDao.updateProfile(req)
    return res.status(200).json(profile)
  } catch (error) {
    return res.status(500).json(error.toString())
  }
}

const UserController = {
    login,
    loginByGoogle,
    register,
    registerByGoogle,
    changePassword,
    updateProfile,
    getDetailProfile
}
  
export default UserController