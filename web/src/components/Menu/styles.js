import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: 100vh;

  position: fixed;

  background-color: #f2f2f5;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 220px;
  height: 100%;

  margin: 50px 0 0 70px;

  position: relative;

  > svg {
    position: absolute;
    top: 0;
    left: 0;

    width: 50px;
    height: 50px;

    border-radius: 4px;
  }

  ul {
    margin-top: 100px;

    h4 {
      font-size: 18px;
    }

    li {
      margin-top: 30px;

      a {
        font-size: 18px;
        font-weight: Medium;
        color: #454545;

        opacity: 0.7;

        display: flex;
        align-items: center;

        transition: opacity 200ms;

        > svg {
          margin-right: 10px;
        }

        &:hover {
          opacity: 1;
        }

        &.active {
          font-weight: bold;
          opacity: 1;
        }
      }
    }
  }
`;
