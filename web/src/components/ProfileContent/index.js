import React from 'react';

import ProfileHeader from '../ProfileHeader';

import { Container } from './styles';

function ProfileContent({ children }) {
  return (
    <Container>
      <ProfileHeader />
      {children}
    </Container>
  );
}

export default ProfileContent;
