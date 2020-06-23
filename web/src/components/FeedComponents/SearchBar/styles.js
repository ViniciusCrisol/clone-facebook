import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled(Form)`
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
    height: 100%;
  }

  button {
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
