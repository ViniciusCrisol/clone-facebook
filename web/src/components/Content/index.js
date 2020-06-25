import React, { useEffect } from 'react';

import Menu from '../Menu';

import { Container, Wrapper, Layout } from './styles';

import { useAuth } from '../../Hooks/AuthContext';

function Content({ children }) {
  const { checkToken } = useAuth();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <Wrapper>
      <Menu />
      <Container>
        <Layout>{children}</Layout>
      </Container>
    </Wrapper>
  );
}

export default Content;
