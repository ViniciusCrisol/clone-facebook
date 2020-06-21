import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid var(--light-gray-opacity);

  display: flex;

  img {
    height: 150px;
    border-radius: 50%;
  }

  main {
    margin-left: 30px;

    h1 {
      font-size: 30px;
    }

    p {
      margin-top: 15px;
      font-size: 17px;

      padding: 5px;
      border-radius: 10px;

      width: 620px;
      height: 80px;
    }
  }
`;
