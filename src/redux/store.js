import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import conf  from './confSlice';
import manager  from './managerSlice'

export default configureStore({
  reducer: {user, conf, manager},
  devTools: process.env.REACT_APP_DEVELOP_MODE === 'true' ? true : false,
})