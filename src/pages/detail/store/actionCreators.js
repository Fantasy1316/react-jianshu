import axios from "axios";
import { fromJS } from "immutable";
import * as constants from "./constants";

const getDetail = (data) => ({
    type: constants.GET_DETAIL_COT,
    title:  fromJS(data.title),
    content: fromJS(data.contant),
})

export const getDetailContent = (id) =>{
  return (dispatch) => {
    axios.get(`/mock/detail.json?id=${id}`).then(res => {
      let data = res.data.data;
      dispatch(getDetail(data));
    })
  }
}