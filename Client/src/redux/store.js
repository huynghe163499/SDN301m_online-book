import { configureStore } from "@reduxjs/toolkit"
import appGlobalReducer from "./appGlobal"
import loginModalReducer from "./loginModal"
import commonReducer from "./common"

export default configureStore({
  reducer: {
    appGlobal: appGlobalReducer,
    loginModal: loginModalReducer,
    common: commonReducer,
  },
})
