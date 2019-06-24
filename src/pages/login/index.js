import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  LoginWrapper,
  LoginBox,
  LoginInput,
  LoginButton
} from "./style";

class Login extends PureComponent {
  render() {
    const { login, loginStatus } = this.props;
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginInput type="text" placeholder="account" innerRef={(input) => {this.account = input}} />
            <LoginInput type="password" placeholder="password"  innerRef={(input) => {this.password = input}} />
            <LoginButton onClick={() => login(this.account, this.password)}>登录</LoginButton>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
     return  <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "loginStatus"])
})

const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account.value, password.value))
  }
})

export default connect(mapState, mapDispatch)(Login);