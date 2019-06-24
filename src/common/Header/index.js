import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from "../../pages/login/store";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInput,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addtion,
  Button
} from './style';

class Header extends PureComponent {

  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;

    const newList = list.toJS();
    const pageList = [];

    if(newList.length) {
      for(let i = (page - 1) * 10; i < page * 10; i++){
        if(newList[i] !== undefined) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if(focused || mouseIn){
      return(
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-shuaxin"></i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else{
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, loginStatus, logout } = this.props;
    return(
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            loginStatus ? 
            <NavItem onClick={logout} className="right">退出</NavItem> :
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          }
          <NavItem className="right">
            <i className="iconfont icon-Aa"></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={320}
              classNames="slide"
            >
              <SearchInput
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></SearchInput>
            </CSSTransition>
            <i className={this.props.focused ? 'iconfont icon-fangdajing zoom focused' : 'iconfont zoom icon-fangdajing'}></i>
            { this.getListArea() }
          </SearchWrapper>
          <Addtion>
            <Link to="/write">
              <Button className="writting">
                <i className="iconfont pen">&#xe678;</i>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addtion>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getHeaderList());
      dispatch(actionCreators.inputFocusAction());
    },
    handleInputBlur() {
      dispatch(actionCreators.inputBlurAction());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(page, totalPage, spin) {
      let originalAngle = spin.style.transform.replace(/[^0-9]/ig, "");
      if(originalAngle) {
        originalAngle = parseInt(originalAngle, 10) + 360;
      } else {
        originalAngle = 0;
      }
      spin.style.transform = `rotate(${originalAngle + 360}deg)`;
      if(page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else{
        dispatch(actionCreators.pageChange(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);