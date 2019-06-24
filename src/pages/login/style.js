import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 58px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #eee;
`;

export const LoginBox = styled.div`
  width: 320px;
  // height: 240px;
  padding: 20px 40px;
  margin: 80px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px #ccc;
`;

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  margin: 16px auto;
  text-indent: 14px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  line-height: 44px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #fff;
  border: 1px solid #3194d0;
  outline: none;
  border-radius: 22px;
  background-color: #3194d0;
`;