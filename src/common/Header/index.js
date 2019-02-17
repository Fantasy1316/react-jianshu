import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  SearchInfo,
  SearchInfoTitle,
  Addtion,
  Button
} from './style'

const Header = (props) => {
  return(
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={320}
            classNames="slide"
          >
            <SearchInput
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></SearchInput>
          </CSSTransition>
          <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe63d;</i>
          <SearchInfo>
            <SearchInfoTitle></SearchInfoTitle>
          </SearchInfo>
        </SearchWrapper>
        <Addtion>
          <Button className="writting">
            <i className="iconfont pen">&#xe678;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addtion>
      </Nav>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.inputFocusAction());
    },
    handleInputBlur(){
      dispatch(actionCreators.inputBlurAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);