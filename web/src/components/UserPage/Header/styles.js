import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const Container = styled.div`
  flex: 1;
  position: relative;
  animation: 700ms ${fadeIn} ease-out;
`;

export const MainContainer = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid var(--light-gray-opacity);

  display: flex;

  img {
    height: 150px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    right: 60px;
    top: 30px;

    width: 60px;
    height: 60px;

    background: var(--light-blue);
    box-shadow: 0px 13px 30px var(--dark-blue);
    border-radius: 50%;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter, transform 200ms ease-in-out;

    svg {
      color: white;
    }

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-4px);
    }
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
