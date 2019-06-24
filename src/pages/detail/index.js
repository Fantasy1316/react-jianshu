import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import BackTop from "../../common/BackTop";
import {
  DetailWrapper,
  Title,
  Content
} from "./style";

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{__html: content}} />
        <BackTop />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getDetailData(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
})

const mapDispatch = (dispatch) => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailContent(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));