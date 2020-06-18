import React from 'react';

import { Container, Content } from './styles';

import ProfileHeader from '../Header';

function Wrapper({ children }) {
  return (
    <Container>
      <ProfileHeader />
      <Content>{children}</Content>
    </Container>
  );
}

export default Wrapper;
