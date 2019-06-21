import { fromJS } from "immutable";
import * as constonts from "./constonts";

const defaultState = fromJS({
  scrollShow: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constonts.SCROLL_TO_TOP:
      return state.set("scrollShow", action.show);
    default:
      return state;
  }
}