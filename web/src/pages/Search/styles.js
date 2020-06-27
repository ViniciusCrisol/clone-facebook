import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Wrapper = styled.div`
  flex: 1;
  animation: 700ms ${fadeIn} ease;

  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    width: 100%;

    > span {
      font-size: 16px;

      > strong {
        text-transform: uppercase;
      }
    }
  }
`;

export const Container = styled.div`
  margin-top: 60px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  margin: 30px 0;

  height: 50px;
  width: 270px;

  background-color: var(--light-blue);
  border-radius: 25px;
  border: 0;

  color: white;
  font-weight: bold;
  font-size: 16px;

  transition: filter 200ms ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const NothingFound = styled.div`
  height: 60%;
  width: 60%;

  margin: 30px auto;
  text-align: center;

  img {
    margin-top: 15px;

    width: 100%;
  }

  span {
    margin-top: 15px;

    font-size: 18px;
    color: var(--text-opacity);
  }
`;
