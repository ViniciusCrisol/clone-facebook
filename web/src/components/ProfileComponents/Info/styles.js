import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 15px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100px;
  width: 270px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 0px var(--light-gray-opacity);
  border: 1px solid var(--light-gray-opacity);

  padding: 15px;
  margin: 15px;

  font-size: 20px;
  color: var(--light-gray);

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: flex-end;

    svg {
      margin-right: 15px;
    }
  }
`;

export const CreateContainer = styled.div`
  height: 100px;
  width: 270px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 0px var(--light-gray);
  border: 2px dashed var(--light-gray);

  margin: 7.5px 15px;

  display: flex;
  align-items: center;

  form {
    width: 100%;
    height: 100%;

    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      border: 0;
      height: 100%;
      width: 170px;

      font-size: 20px;
      color: var(--light-gray);

      ::placeholder {
        color: var(--light-gray) !important;
      }
    }

    > button {
      height: 100%;
      width: 40px;

      background: none;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: var(--light-gray);

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

  > button {
    height: 100%;

    padding: 34px 15px;
    background: none;

    flex: 1;
    display: flex;
    align-items: flex-end;

    color: var(--light-gray);
    font-size: 16px;

    svg {
      margin-right: 15px;
    }
  }
`;
