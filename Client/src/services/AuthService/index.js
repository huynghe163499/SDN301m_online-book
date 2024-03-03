import http from "../index"
import {
  apiLogin,
  apiLogout,
} from "./urls"
import QueryString from "qs"

const login = body => http.post(apiLogin, body)
const logout = () => http.get(apiLogout)
// const callbackGG = params => http.get(apiCallBackLoginGoole, { params })
// const convertAddress = body => {
//   const params = QueryString.stringify(body)
//   return http.patch(`${apiConvertAddress}?${params}`)
// }

const AuthService = {
  login,
  logout,
}
export default AuthService
