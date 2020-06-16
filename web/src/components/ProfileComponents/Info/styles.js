import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 270px;

  background-color: white;
  box-shadow: 0px 3px 0px #d3d8e066;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  padding: 15px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  & + div {
    margin-left: 15px;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  max-width: 1025px;

  display: flex;
  flex-wrap: wrap;
`;

export const CreateContainer = styled.div`
  height: 100px;
  width: 270px;

  color: #d3d8e0;

  background-color: white;
  box-shadow: 0px 3px 0px #d3d8e066;
  border: 2px dashed #d3d8e066;
  border-radius: 10px;
  padding: 15px;

  display: flex;
  align-items: center;

  & + div {
    margin-left: 15px;
  }

  div {
    display: flex;
    align-items: flex-end;

    font-size: 16px;

    svg {
      margin-right: 15px;
    }
  }
`;
