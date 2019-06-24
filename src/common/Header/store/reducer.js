import * as constonts from './constonts';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constonts.SEARCH_FOCUS:
      return state.set('focused', true);
    case constonts.SEARCH_BLUR:
      return state.set('focused', false);
    case constonts.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case constonts.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constonts.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constonts.PAGE_CHANGE:
      return state.set('page', action.page);
    default:
      return state;
  }  
}