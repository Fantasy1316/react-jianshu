import React, { Component } from "react";
import { connect } from "react-redux";
import BackTop from "../../common/BackTop";
import {
  DetailWrapper,
  Title,
  Content
} from "./style";

class Detail extends Component {
  render() {
    // const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Title>{this.props.title}</Title>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
        <BackTop />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
})

export default connect(mapState, null)(Detail);