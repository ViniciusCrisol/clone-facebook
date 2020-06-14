import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  flex: 1;
  animation: 700ms ${fadeIn} ease-out;
`;

export const ContentFeed = styled.main`
  flex: 1;
  max-width: 1025px;
`;
