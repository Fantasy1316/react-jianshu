import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  height: 300px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 640px;
  padding: 32px 0 0 18px;
  .banner {
    width: 625px;
    height: 270px;
    border-radius: 10px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  padding-top: 32px;
  margin-left: 40px;
`;

// 话题组件样式
export const TopicWrapper = styled.div`
  padding-top: 24px;
  overflow: hidden;
  // background-color: #ccc;
  border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
  display: flex;
  float: left;
  margin: 0 20px 20px 0;
  line-height: 28px;
  border-radius: 4px;
  border: 2px solid #f1f1f1;
  background-color: #f9f9f9;
  .topic-pic {
    width: 28px;
    height: 28px;
    border-radius: 4px 0 0 4px;
  }
  .topic-desc {
    font-size: 12px;
    padding: 0 10px;
  }
`;

// 推荐组件样式
export const RecommendWrapper = styled.div`

`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  line-height: 50px;
  padding: 0 24px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  background-color: ${(props) => props.itemColor};
`;

//文章组件样式
export const ArticleWrapper = styled.div`
  
`;

export const ArticleItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .article-cont {
    flex: 1;
  }
  .article-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333;
  }
  .article-desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .article-bottom {
    display: flex;
    margin-top: 8px;
    line-height: 10px;
  }
  .bottom-item {
    margin-right: 20px;
    font-size: 12px;
    color: #b4b4b4;
  }
  .zhuanshi {
    color: #ea6f5a;
  }
  .comment{
    &:hover {
      cursor: pointer;
      color: #808080;
    }
  }
  .iconfont {
    display: inline-block;
    font-size: 12px;
    padding-right: 4px;
  }
  .icon-zhuanshi {
    font-size: 10px;
  }
  .icon-heart {
    font-size: 14px;
  }
  .acticle-img {
    width: 150px;
    height: 100px;
    margin-top: 8px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;

export const LoadMore = styled.div`
  &:hover {
    cursor: pointer;
    background-color: #7d7d7d;
  }
  height: 40px;
  line-height: 40px;
  margin: 30px 0 60px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  background-color: #9b9b9b;
`;