import React, { useEffect } from 'react';

import Menu from '../Menu';

import { Container, Layout } from './styles';

import { useAuth } from '../../Hooks/AuthContext';

function Content({ children }) {
  const { checkToken } = useAuth();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <>
      <Menu />
      <Container>
        <Layout>{children}</Layout>
      </Container>
    </>
  );
}

export default Content;
