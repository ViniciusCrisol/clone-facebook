import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  height: 100px;
  width: 270px;

  background-color: white;
  box-shadow: 0px 3px 0px var(--light-gray-opacity);
  border: 1px solid var(--light-gray-opacity);
  border-radius: 10px;

  margin: 7.5px;

  overflow: hidden;

  display: flex;
  align-items: center;

  img {
    height: 100%;
    width: 100px;

    object-fit: cover;
  }

  > div {
    padding-left: 10px;
    margin-left: 10px;

    h5 {
      font-size: 15px;
      color: var(--text);
      margin-bottom: 5px;
    }

    span {
      font-size: 15px;
      color: var(--light-gray);
    }
  }
`;
