import axios from "axios";
import * as constants from "./constants";

const userLogin = () => ({
  type: constants.USER_LOGIN,
  data: true
})

export const logout = () => ({
  type: constants.USER_LOGOUT,
  data: false
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/mock/login.json?account=${account}&password=${password}`).then(res => {
      console.log(res);
      if(res.data.err_code === 0) {
        dispatch(userLogin());
      }else {
        alert("登录失败")
      }
    })
  }
}