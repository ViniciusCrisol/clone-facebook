import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform : translateX(-25px)
  }
  100% {
    opacity: 1;
    transform : translateX(0px)
  }
`;
