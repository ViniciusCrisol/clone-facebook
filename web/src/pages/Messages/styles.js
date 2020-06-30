import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    flex: 1;

    box-shadow: 0px 3px 1px var(--light-gray-opacity);
    border: 2px solid var(--light-gray-opacity);
    border-radius: 10px;

    padding: 30px;
    margin: 15px 0;

    div {
      display: flex;

      &.myMessage {
        justify-content: flex-end;

        p {
          strong {
            display: none;
          }
        }
      }

      p {
        min-width: 50px;
        max-width: 200px;

        background: var(--light-gray-opacity);
        border-radius: 10px;

        margin: 2.5px 0;
        padding: 10px;
      }
    }
  }

  form {
    width: 100%;

    display: flex;

    input {
      flex: 1;

      height: 60px;

      margin-top: 0px;
      padding: 0 25px;

      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 3px 1px var(--light-gray-opacity);
    }

    button {
      width: 120px;

      margin-left: 15px;
      border-radius: 10px;
      background: var(--light-blue);

      text-transform: uppercase;
      color: white;

      transition: filter 200ms;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
