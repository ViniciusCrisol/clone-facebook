import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1025px;
  height: 80px;

  margin-top: 30px;
  padding: 0 25px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 1px #d3d8e067;

  img {
    width: 50px;

    border-radius: 50%;
  }

  input {
    flex: 1;

    border: 0;
    padding: 25px;
  }

  div {
    margin-right: 30px;

    display: flex;
    align-items: center;

    button {
      border: 0;
      background: none;

      & + button {
        margin-left: 10px;
      }

      &:last-child {
        border-left: 2px solid #d3d8e067;
        padding-left: 15px;
        margin-left: 15px;

        svg {
          color: #d3d8e0;

          transition: 200ms ease;
        }

        &:hover {
          svg {
            color: #5085e8;
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;
