import styled from 'styled-components';

export const Container = styled.ul`
  height: 50px;
  width: 100%;

  border-bottom: 2px solid var(--light-gray-opacity);

  display: flex;
  align-items: flex-start;

  li {
    button {
      background: none;
      border: 0;

      font-size: 23px;

      line-height: 25px;
      font-weight: Regular;
      color: var(--text-opacity);
    }

    &.active {
      button {
        padding-bottom: 23px;
        border-bottom: 2px solid var(--light-blue);
      }
    }

    & + li {
      margin-left: 30px;
    }
  }
`;
