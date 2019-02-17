import * as constonts from './constonts';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});

  export default (state = defaultState, action) => {
    if(action.type === constonts.SEARCH_FOCUS){
      return state.set('focused', true);
    }
    if(action.type === constonts.SEARCH_BLUR){
      return state.set('focused', false);
    }
    return state;
  }