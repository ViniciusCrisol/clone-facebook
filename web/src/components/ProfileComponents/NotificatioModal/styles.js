import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: -215px;
  top: 56px;

  width: 320px;
  height: 360px;

  z-index: 30;

  background-color: lightblue;
  border-radius: 10px;

  padding: 15px;

  main {
    div {
      width: 2px;
      height: 20px;

      margin: 0 auto;
      background-color: red;
    }
  }
`;
