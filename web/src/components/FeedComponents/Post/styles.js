import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  width: 100%;

  margin-top: 30px;

  border-radius: 10px;
  border: 2px solid var(--light-gray-opacity);
  background-color: white;
  box-shadow: 0px 3px 1px var(--light-gray-opacity);

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    width: 100%;

    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;

      border-radius: 50%;

      object-fit: cover;
      object-position: center;
    }

    div {
      margin-left: 15px;
      span {
        font-size: 16px;
        color: var(--light-text);
      }
    }
  }

  main {
    flex: 1;
    padding: 15px 0;

    p {
      font-size: 14px;
      max-width: 850px;
    }

    img {
      width: 100%;
      max-height: 450px;

      margin: 15px auto;
      border-radius: 10px;

      object-fit: cover;
      object-position: center;
    }
  }

  footer {
    width: 100%;

    display: flex;
    align-items: center;

    button {
      background: none;

      font-weight: bold;
      color: var(--light-text);

      display: flex;
      align-items: flex-end;

      svg {
        margin-right: 10px;
        transition: 200ms ease;
      }

      &:hover {
        svg {
          color: var(--light-blue);
          transform: scale(1.1);
        }
      }

      & + button {
        margin-left: 30px;
      }
    }
  }
`;
