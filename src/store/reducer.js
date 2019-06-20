import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/Header/store';

export default combineReducers({
  header: headerReducer
})