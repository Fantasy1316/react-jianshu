import styled from 'styled-components';

export const BackTopWrapper = styled.div`
  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  font-size: 12px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.8);
`;