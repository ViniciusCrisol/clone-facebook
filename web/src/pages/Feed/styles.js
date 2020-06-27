import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  flex: 1;
  animation: 700ms ${fadeIn} ease;

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
