import * as constonts from './constonts';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => {
  return ({
    type: constonts.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  })
}

export const inputFocusAction = () => {
  return ({
    type: constonts.SEARCH_FOCUS
  })
};

export const inputBlurAction = () => {
  return ({
    type: constonts.SEARCH_BLUR
  })
};

export const mouseEnter = () => {
  return ({
    type: constonts.MOUSE_ENTER
  })
};

export const mouseLeave = () => {
  return ({
    type: constonts.MOUSE_LEAVE
  })
};

export const pageChange = (page) => {
  return ({
    type: constonts.PAGE_CHANGE,
    page
  })
};

export const getHeaderList = () =>{
  return(dispatch) => {
    axios.get('/mock/list.json').then(res => {
      let data = res.data;
      dispatch(changeList(data.data.list));
    }).catch(e => {
      throw new Error(e);
    })
  }
}