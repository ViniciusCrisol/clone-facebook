import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: -5px;
  top: 0;

  width: 280px;
  height: 355px;

  z-index: 30;

  background-color: white;
  border: 4px solid var(--light-gray);
  border-radius: 10px;

  h2 {
    margin: 30px auto;

    text-align: center;
    color: var(--light-text);
  }

  main {
    height: 100%;

    overflow-y: scroll;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Notification = styled.div`
  height: auto;
  width: 94%;

  margin: 7.5px auto;
  padding: 10px;

  background-color: var(--light-gray-opacity);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  footer {
    height: min-content;
    margin-top: 25px;

    button {
      height: 30px;
      width: 90px;

      border-radius: 15px;
      background-color: var(--light-blue);

      color: white;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 200ms ease;

      & + button {
        margin-left: 10px;

        background: lightcoral;
      }

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
