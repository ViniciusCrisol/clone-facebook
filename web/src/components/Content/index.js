import React from 'react';

import Menu from '../Menu';

import { Container } from './styles';

function Content({ children }) {
  return (
    <>
      <Menu />
      <Container>{children}</Container>
    </>
  );
}

export default Content;
