import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled(Form)`
  height: 80px;

  margin-top: 30px;
  padding: 0 25px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 1px var(--light-gray-opacity);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    object-fit: cover;
    object-position: center;

    flex-shrink: none;
  }

  > input {
    flex: 1;
    padding: 25px;
  }

  div {
    margin-right: 30px;

    display: flex;
    align-items: center;

    > label {
      display: flex;
      flex-shrink: none;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: 200ms ease;

      svg {
        color: var(--light-text);
        transition: 200ms ease;
      }

      &:hover {
        transform: scale(1.05);

        svg {
          color: var(--light-blue);
        }
      }

      > input {
        display: none;
      }
    }

    button {
      background: none;
      color: var(--light-text);

      & + button {
        margin-left: 10px;
      }

      &:last-child {
        border-left: 2px solid var(--light-gray-opacity);
        padding-left: 15px;
        margin-left: 15px;

        svg {
          transition: 200ms ease;
        }

        &:hover {
          svg {
            color: var(--light-blue);
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;
