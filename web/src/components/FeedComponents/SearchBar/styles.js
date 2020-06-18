import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1025px;
  height: 60px;

  margin-top: 0px;
  padding: 0 25px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 1px var(--light-gray-opacity);

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    flex: 1;

    padding: 20px 0;
    border: 0;
  }

  button {
    border: 0;
    background: none;

    svg {
      color: var(--light-text);
      transition: 200ms ease;
    }

    &:hover {
      svg {
        color: var(--light-blue);
        transform: scale(1.1);
      }
    }
  }
`;
