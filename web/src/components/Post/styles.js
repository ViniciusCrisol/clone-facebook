import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 540px;

  margin-top: 30px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 1px #d3d8e067;

  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    height: 60px;
    width: 100%;

    display: flex;
    align-items: center;

    img {
      width: 50px;
      border-radius: 50%;
    }

    div {
      margin-left: 15px;
      span {
        color: #d3d8e0;
      }
    }
  }

  main {
    flex: 1;
    padding: 25px 0;
    height: 100%;

    p {
      font-size: 14px;
      max-width: 450px;
    }

    img {
      max-height: 270px;
      max-width: 100%;

      margin: 25px 0;
      border-radius: 10px;

      object-fit: cover;
      object-position: center;
    }
  }

  footer {
    height: 60px;
    width: 100%;

    display: flex;
    align-items: center;

    button {
      color: #d3d8e0;
      font-weight: bold;

      background: none;
      border: 0;

      display: flex;
      align-items: flex-end;

      svg {
        margin-right: 10px;

        transition: 200ms ease;
      }

      &:hover {
        svg {
          color: #5085e8;
          transform: scale(1.1);
        }
      }

      & + button {
        margin-left: 30px;
      }
    }
  }
`;
