import React from 'react';

import { Container } from './styles';

import InfoContainer from '../../components/InfoContainer';
import ProfileContainer from '../../components/ProfileContent';

function Profile() {
  return (
    <ProfileContainer>
      <Container>
        <InfoContainer />
      </Container>
    </ProfileContainer>
  );
}

export default Profile;
