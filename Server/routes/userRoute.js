import express from "express"
const router = express.Router()
import UserController from "../controllers/userController.js"
import upload from "../middlewares/clouddinary.middlewares.js"

router.post('/login',
  UserController.login
)
router.post('/loginByGoogle',
  UserController.loginByGoogle
)
router.post('/register',
  UserController.register
)
router.post('/registerByGoogle',
  UserController.registerByGoogle
)
router.post("/updateProfile",
  upload.single("avatar"),
  UserController.updateProfile
)
router.post("/changePassword",
  UserController.changePassword
)
router.get("/getDetailProfile/:userId",
  UserController.getDetailProfile
)

export default router
