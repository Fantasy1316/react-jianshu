import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  loginStatus: false
});

export default (state = defaultState, actions) => {
  switch(actions.type) {
    case constants.USER_LOGIN:
      return state.set("loginStatus", true);
    case constants.USER_LOGOUT:
      return state.set("loginStatus", false);
    default:
      return state;
  }
}