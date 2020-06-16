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
