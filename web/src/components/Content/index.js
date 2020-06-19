import React, { useEffect } from 'react';

import Menu from '../Menu';

import { Container } from './styles';

import { useAuth } from '../../Hooks/AuthContext';

function Content({ children }) {
  const { checkToken } = useAuth();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <>
      <Menu />
      <Container>{children}</Container>
    </>
  );
}

export default Content;
