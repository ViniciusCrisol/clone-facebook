import styled from 'styled-components';

export const Container = styled.ul`
  height: 50px;
  margin-top: 30px;
  border-bottom: 2px solid var(--light-gray-opacity);

  display: flex;
  align-items: flex-start;

  li {
    button {
      border: 0;
      background: none;

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
  }
`;
