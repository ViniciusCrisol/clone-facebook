import styled from 'styled-components';
import { fadeIn } from './animations';

const Container = styled.div`
  animation: 700ms ${fadeIn} ease-out;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;

    max-width: 300px;
    width: 100%;

    input {
      height: 50px;

      margin-bottom: 15px;
      border: 0px;
      padding: 0 15px;

      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 3px 1px #d3d8e067;
    }

    button {
      height: 50px;

      border: 0;
      background-color: #5085e8;
      border-radius: 10px;
      box-shadow: 0px 3px 1px #5085e8bb;

      transition: 250ms;

      color: white;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background-color: #3c5a99;
        box-shadow: none;
        transform: translateY(3px);
      }
    }

    h1 {
      color: #454545;
      text-transform: uppercase;
      font-size: 20px;

      opacity: 0.7;
      margin-bottom: 5px;
    }

    a {
      width: fit-content;

      font-weight: Medium;
      color: #454545;

      opacity: 0.7;
      margin-top: 8px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default Container;
