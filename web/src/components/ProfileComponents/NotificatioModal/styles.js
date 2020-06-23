import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: -75px;
  top: 56px;

  width: 320px;
  height: 355px;

  z-index: 30;

  background-color: white;
  border: 4px solid var(--light-gray);
  border-radius: 10px;
  padding: 7.5px 0 0 0;

  h1 {
    margin: 60px auto;

    text-align: center;
    font-size: 18px;
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
  padding: 7.5px 12px;

  background-color: var(--light-gray-opacity);
  border-radius: 10px;

  p {
    font-size: 12px;
  }

  button {
    height: 26px;
    width: 26px;

    margin: 10px 0 0 auto;

    border-radius: 50%;
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
`;
