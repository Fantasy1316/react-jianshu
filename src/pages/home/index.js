import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import Topic from "./components/Topic";
import Article from "./components/Article";
import Recommend from "./components/Recommend";
import BackTop from "../../common/BackTop";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <Article />
        </HomeLeft>
        <HomeRight>
          <Recommend />
        </HomeRight>
        <BackTop />
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData());
  }
})

export default connect(null, mapDispatch)(Home);