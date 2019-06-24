import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import {
  ArticleWrapper,
  ArticleItem,
  LoadMore
} from "../style";

class Article extends PureComponent {
  render() {
    const { list, getMoreData } = this.props;
    return (
      <ArticleWrapper>
        {
          list.map((item, index) => {
            return (
              <Link className="link" key={index} to={`/detail/${item.get('id')}`}>
                <ArticleItem key={index}>
                  <div className="article-cont">
                    <h3 className="article-title">{item.get("title")}</h3>
                    <p className="article-desc">{item.get("desc")}</p>
                    <div className="article-bottom">
                      <p className="bottom-item zhuanshi">
                        <i className="iconfont icon-zhuanshi"></i>
                        {item.get("zhuanshi")}
                      </p>
                      <p className="bottom-item">{item.get("author")}</p>
                      <p className="bottom-item comment">
                        <i className="iconfont icon-pinglun"></i>
                        {item.get("comment")}
                      </p>
                      <p className="bottom-item">
                        <i className="iconfont icon-heart"></i>
                        {item.get("like")}
                      </p>
                    </div>
                  </div>
                  <img className="acticle-img" src={item.get("imgUrl")} alt="" />
                </ArticleItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreData}>阅读更多</LoadMore>
      </ArticleWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"])
})

const mapDispatch = (dispatch) => ({
  getMoreData() {
    dispatch(actionCreators.getMoreData());
  }
})

export default connect(mapState, mapDispatch)(Article);