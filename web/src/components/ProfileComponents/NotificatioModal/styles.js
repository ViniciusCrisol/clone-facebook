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
  height: 50px;
  width: 94%;

  margin: 7.5px auto;
  padding: 5px;

  background-color: var(--light-gray-opacity);
  border-radius: 10px;

  p {
    font-size: 12px;
  }
`;
