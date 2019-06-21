import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/Header/store';
import { reducer as backTopReducer } from '../common/BackTop/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

export default combineReducers({
  header: headerReducer,
  backTop: backTopReducer,
  home: homeReducer,
  detail: detailReducer
})