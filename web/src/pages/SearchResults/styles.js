import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin-top: 30px;

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

  transition: filter 200ms;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const NothingFound = styled.div`
  flex: 1;

  margin-top: 30px;

  display: flex;
  flex-direction: column;

  img {
    margin-top: 15px;

    width: 60%;
    min-width: 555px;
  }

  span {
    margin-top: 15px;

    font-size: 18px;
    color: var(--text-opacity);
  }
`;
