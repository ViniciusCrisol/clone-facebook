import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  flex: 1;
  animation: 700ms ${fadeIn} ease;

  margin-top: 60px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h1 {
    margin: 30px auto;

    text-align: center;
    color: var(--light-text);
  }
`;
