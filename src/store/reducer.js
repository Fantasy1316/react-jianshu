import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/Header/store';
import { reducer as backTopReducer } from '../common/BackTop/store';
import { reducer as homeReducer } from '../pages/home/store/index';

export default combineReducers({
  header: headerReducer,
  backTop: backTopReducer,
  home: homeReducer
})