import styled from 'styled-components';
import { opacity } from '../../styles/animations';

export const Container = styled.div`
  flex: 1;
  animation: 700ms ${opacity} ease-out;
`;
