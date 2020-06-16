import styled from 'styled-components';

export const Container = styled.ul`
  height: 50px;
  width: 100%;

  border-bottom: 2px solid #ebebeb;

  display: flex;
  align-items: flex-start;

  li {
    button {
      background: none;
      border: 0;

      font-size: 23px;

      line-height: 25px;
      font-weight: Regular;
      color: #45454580;
    }

    &.active {
      button {
        color: #454545;

        padding-bottom: 23px;
        border-bottom: 2px solid #5085e8;
      }
    }

    & + li {
      margin-left: 30px;
    }
  }
`;
