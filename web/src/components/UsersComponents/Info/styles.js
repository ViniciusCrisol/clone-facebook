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

  background-color: white;
  box-shadow: 0px 3px 0px var(--light-gray-opacity);
  border: 1px solid var(--light-gray-opacity);
  border-radius: 10px;

  padding: 15px;
  margin: 7.5px 15px;

  display: flex;
  align-items: center;

  font-size: 20px;
  color: var(--light-gray);

  div {
    display: flex;
    align-items: flex-end;

    svg {
      margin-right: 15px;
    }
  }
`;
