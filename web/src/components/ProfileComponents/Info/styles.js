import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  max-width: 1025px;

  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  height: 100px;
  width: 270px;

  background-color: white;
  box-shadow: 0px 3px 0px #d3d8e066;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  padding: 15px;

  display: flex;
  align-items: center;

  font-size: 20px;
  color: #d3d8e0;

  & + div {
    margin-left: 15px;
  }

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

  background-color: white;
  box-shadow: 0px 3px 0px #d3d8e066;
  border: 2px dashed #d3d8e066;
  border-radius: 10px;

  display: flex;
  align-items: center;

  & + div {
    margin-left: 15px;
  }

  form {
    width: 100%;
    height: 100%;

    padding: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      border: 0;
      height: 100%;
      width: 170px;

      font-size: 20px;
      color: #d3d8e0;

      ::placeholder {
        color: #d3d8e0 !important;
      }
    }

    > button {
      height: 100%;
      width: 40px;

      border: 0;
      background: none;

      display: flex;
      align-items: center;
      justify-content: center;

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

  > button {
    height: 100%;

    padding: 34px 15px;
    background: none;
    border: 0;

    flex: 1;
    display: flex;
    align-items: flex-end;

    color: #d3d8e0;
    font-size: 16px;

    svg {
      margin-right: 15px;
    }
  }
`;
