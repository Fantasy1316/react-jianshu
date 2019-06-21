import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  articleList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList)
      })
    case constants.GET_MORE_ARICLE:
      return state.set('articleList', state.get("articleList").concat(fromJS(action.list)));
    default:
      return state;
  }
}

