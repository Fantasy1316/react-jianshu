import axios from "axios";
import * as constants from "./constants";

const changeHomeData = (data) => ({
  type: constants.GET_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
})

const gerMoreArticle = (data) => ({
  type: constants.GET_MORE_ARICLE,
  list: data
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/mock/home.json').then(res => {
      let data = res.data.data;
      dispatch(changeHomeData(data));
    })
  }
}

export const getMoreData = () => {
  return (dispatch) => {
    axios.get('/mock/homeList.json').then(res => {
      let data = res.data.data;
      console.log(data);
      dispatch(gerMoreArticle(data));
    })
  }
}