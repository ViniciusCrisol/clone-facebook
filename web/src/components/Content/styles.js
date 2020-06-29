import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;

    > div {
      margin-top: 80px;
      box-shadow: 0;
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  z-index: 20;
  padding: 50px 15px;
  box-shadow: -8px 0px 8px -5px rgba(201, 201, 201, 0.4);
`;

export const Layout = styled.main`
  flex: 1;
  height: 100%;
  max-width: 1025px;

  margin: 0 auto;
`;
