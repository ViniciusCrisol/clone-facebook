import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: 100%;

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

  > section {
    width: 60px;
    height: 60px;

    background: #5085e8;
    box-shadow: 0px 13px 30px #0341b164;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    margin-top: 50px;

    > div {
      h4 {
        margin-top: 30px;
        font-size: 18px;
      }

      button {
        margin-top: 30px;

        display: flex;
        align-items: center;

        border: 0;
        background: none;

        font-size: 18px;
        font-weight: Medium;
        color: #454545;

        opacity: 0.7;

        svg {
          margin-right: 10px;
          color: #5085e8;
          transition: 200ms ease;
        }

        &:hover {
          opacity: 1;

          svg {
            transform: scale(1.2);
            color: lightcoral;
          }
        }
      }
    }

    li {
      margin-top: 30px;

      span {
        color: #454545;
        font-size: 12px;

        margin-left: 10px;
        opacity: 0.7;
      }

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
